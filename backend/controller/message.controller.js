import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";
import { geReceiverSocketId, io } from "../socket/socket.js";
export const sendMessage = async (req, res, next) => {
  try {
    // Extract message from request body
    const { message } = req.body;
    // Extract receiver ID from URL parameters
    const { id: receiverId } = req.params;
    // Extract sender ID from authenticated user
    const { id: senderId } = req.user;
    // Find a conversation that includes both sender and receiver
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // If no conversation exists, create a new one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // Create a new message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // If the new message is successfully created, add its ID to the conversation's messages array
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // Save both the conversation and the new message to the database concurrently
    await Promise.all([conversation.save(), newMessage.save()]);

    // Implement socket.io functionality here if needed
    const receiverSocketId = geReceiverSocketId(receiverId);

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    res.status(201).json(newMessage);
  } catch (error) {
    next(error); // Pass any errors to the error-handling middleware
  }
};
export const getMessage = async (req, res, next) => {
  try {
    const { id: userToMessage } = req.params; // This is the receiver's ID
    const { id: senderId } = req.user; // This is the authenticated user's ID

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToMessage] },
    }).populate("messages");

    if (!conversation) {
      return res.status(201).json([]);
    }
    const message = conversation.messages;

    res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};
