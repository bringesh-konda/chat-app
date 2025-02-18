import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../socket/socket.js";

import { io } from '../socket/socket.js';

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const { id: receiverId }= req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        
        // await conversation.save();
        // await newMessage.save();                These two statements run one after the other so to optimise this and save these simultaneously

        //instead of these we can run the following command.
        
        await Promise.all([conversation.save(), newMessage.save()]);

        // SOCKET IO FUNCTIONALITY SHOULD BE ADDED TO MAKE THIS REAL TIME.
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId) {
            // io.to(<socket_id>).emit() used to send events to specific client.
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);

    } catch (error) {
        console.log('Error in sendMessage Controller: ', error.message);
        res.status(500).json({ error: 'Internal server error'});
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId }= req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate('messages');    //NOT REFERENCE BUT ACTUAL MESSAGES SINCE WE USED THE POPULATE FUNCTION.

        if(!conversation)   return res.status(200).json([]);
        const messages = conversation.messages;

        res.status(200).json(messages);
        
    } catch (error) {
        console.log('Error in getMessages Controller: ', error.message);
        res.status(500).json({ error: 'Internal server error'});
    }
}