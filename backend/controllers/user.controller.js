import User from '../models/user.model.js';
import Notification from '../models/notification.model.js';

export const getUserProfile = async (req, res) => {
    const { username } = req.params;

    try{
        const user = await User.findOne({username}).select("-password");

        if(!user) return res.status(404).json({error: error.message});
        res.status(200).json(user);

    }catch(error){
        console.log("Error in getUserProfile controller", error.message);
        res.status(500).json({error: error.message});
    }
}

export const followUnfollowUser = async (req, res) => {
    try{
        const { id } = req.params;
        const userToModify = await User.findById(id);
        const currentUser = await User.findById(req.user._id);

        if(id === req.user._id.toString()) {
            return res.status(400).json({ error: "You cannot follow/unfollow yourself" });
        }

        if(!userToModify || !currentUser) return res.status(404).json({ error: "User not found" });

        const isFollowing = currentUser.following.includes(id);

        if(isFollowing) {
            // unfollow user
            await User.findByIdAndUpdate(id, { $pull: { followers: currentUser._id } });
            await User.findByIdAndUpdate(currentUser._id, { $pull: { following: id } });

            //TODO: return the id of the user as a response
            return res.status(200).json({ message: "User unfollowed successfully" });
        } else {
            // Follow user
            await User.findByIdAndUpdate(id, { $push: { followers: currentUser._id} });
            await User.findByIdAndUpdate(currentUser._id, { $push: { following: id} });
            // Send notification to the user
            const newNotification = new Notification({
                type: 'follow',
                from: req.user._id,
                to: userToModify._id
            });
            await newNotification.save();

            //TODO: return the id of the user as a response to update the UI
            res.status(200).json({ message: "User followed successfully" });
        }
    }catch(error) {
        console.log("Error in followUnfollowUser controller", error.message);
        res.status(500).json({error: error.message});
    }
}

export const getSuggestedUsers = async (req, res) => {
    try{
        const userId = req.user._id;

        const usersFollowedByMe = await User.findById(userId).select("following");

        const users = await User.aggregate([
            { $match: { _id: { $ne: userId }, }, },
            { $sample: { size: 10 } }
        ]);

        const filteredUsers = users.filter((user) => !usersFollowedByMe.following.includes(user._id));
        const suggestedUsers = filteredUsers.slice(0, 4); // Limit to 4 users

        suggestedUsers.forEach((user) => (user.password = null));
        
        res.status(200).json(suggestedUsers);
    }catch(error){
        console.log("Error in getSuggestedUsers controller", error.message);
        res.status(500).json({error: error.message});
    }
}