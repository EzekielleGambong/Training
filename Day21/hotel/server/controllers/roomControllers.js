const Room = require("../models/room");

const getAllRooms = async (req, res, next) => { 
    try {
        const rooms = await Room.find(); 
        res.status(200).json(rooms);
    } catch (error) { 
        next(error);
    }
}

const getRoomById = async (req, res, next) => {
    try {
        const roomId = req.params.id;
        const room = await Room.findById(roomId);

    if (!room) {
        return res.status(484).json({ message: "Room not found" });
    }

    res.status(200).json(room);
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllRooms, getRoomById };