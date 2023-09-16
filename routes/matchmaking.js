const express = require('express');
const router = express.Router();
const Room = require('../models/room.js');
const User = require('../models/user.js');

module.exports = (io) => {
  // Define routes for the matchmaking module

  // Route to handle user joining matchmaking
  router.post('/join', async (req, res) => {
    try {
      const { username } = req.body;

      // Check if the user is already in a room
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'User is already in a room' });
      }

      // Find a room with one user (if available)
      const room = await Room.findOne({ users: { $size: 1 } });

      if (room) {
        // Add the user to the room
        room.users.push(username);
        await room.save();

        // Create a User document for the user
        const newUser = new User({ username, socketId: null });
        await newUser.save();

        // Emit real-time updates to the room
        io.to(room.name).emit('updateUsers', room.users);

        // Respond with the room details
        res.json({ room });
      } else {
        // No available room, create a new room
        const newRoom = new Room({ name: 'Room ' + (await Room.countDocuments()), users: [username] });
        await newRoom.save();

        // Create a User document for the user
        const newUser = new User({ username, socketId: null });
        await newUser.save();

        // Emit real-time updates to the room
        io.to(newRoom.name).emit('updateUsers', [username]);

        // Respond with the room details
        res.json({ room: newRoom });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  // Add more routes specific to the matchmaking feature

  return router;
};
