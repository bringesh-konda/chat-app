import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    }
    // createdAt, updatedAt  => in the front end we can access the times
    //by message.createdAt this is the advantage of time stamps.
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;