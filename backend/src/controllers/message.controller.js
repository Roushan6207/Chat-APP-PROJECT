import Message from "../models/message.model.js";
import User from "../models/user.model.js";
import cloudinary from "../lib/cloudinary.js";
import { getReceiverSocketId,io } from "../lib/socket.js";

export const getUsersForSidebars= async(req,res) => {

    try{
 const loggedInUsersId= req.user._id;
 const filteredUsers= await User.find( {_id: {$ne: loggedInUsersId} }).select("-password");

 res.status(200).json(filteredUsers);
    }

    catch(error){
console.log("Error in getUsersForSidebar:",error.message);
res.status(500).json({error: "Internal server error"});
    }
};


export const getMessages =async(req,res) => {
try{

const {id:userToChatId} =req.params;
const myId=req.user._id;

const messages =await Message.find({
$or:[
 {senderId:myId,receiverId:userToChatId},
 {senderId:userToChatId,receiverId:myId},
]

})

res.status(200).json(messages);
}

catch(error){
console.log("Error in getMessages controller:",error.message);
res.status(500).json({message:"Internal Server Error"});
}
     
};

export const sendMessage= async(req,res) => {
 try{

 const {text,image} = req.body;
 const {id:receiverId} = req.params;
 const senderId=req.user._id;

 let imageurl;

 if(image){
    //upload  image to cloudinary..
    const uploadResponse= await cloudinary.uploader.upload(image);
    imageurl=uploadResponse.secure_url;
 }

 const newMessages = new Message({
    senderId,
    receiverId,
    text,
    image:imageurl, 
 });

 await newMessages.save();

 // todo == realtime functionalities goes here => socket.io

 const receiverSocketId= getReceiverSocketId(receiverId);

 if(receiverSocketId){
   io.to(receiverSocketId).emit("newMessage",newMessages);
 }

 res.status(201).json(newMessages);
 }

 catch(error){
    console.log("Error in sendMessages controller:",error.message);
    res.status(500).json({error:"Internal Server Errror"});

 }
};