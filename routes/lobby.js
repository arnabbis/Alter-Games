const express = require('express');
const router = express.Router();
const Room = require('../models/room.js');

module.exports = (io) => {
  // Define routes for the lobby module

  // Route to render the lobby page
  router.get('/', (req, res) => {
    res.sendFile(__dirname + '/../views/lobby.html');
  });

  // Route to fetch and send the list of available rooms to the client
  router.get('/rooms', async (req, res) => {
    try {
      const rooms = await Room.find();
      res.json(rooms);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  // Add more routes specific to the lobby feature

  return router;
};
