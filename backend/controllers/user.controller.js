import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: { $ne: loggedInUserId }}).select('-password'); //This will fetch all the userIds except the loggedIn user.

        res.status(200).json(filteredUsers);
        //We have to add the socket.io at the deployment
    } catch(error) {
        console.error('Error in getUsersForSideBar: ', error.message);
        res.status(500).json({ error: 'Internal Server error' });
    }
}