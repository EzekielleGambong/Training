const Reservation = require("../models/reservation"); 
const Room = require("../models/room");

const createReservation = async (req, res, next) => { 
    try {
        const { roomId, checkInDate, checkOutDate} = req.body;

        const room = await Room.findOne({ roomId });
        if (!room) {
            return res.status(404).json({ error: "Room not found" });
        }

        const numberOfNights = Math.ceil(
            (new Date(checkOutDate) - new Date(checkInDate)) / (1000* 60 * 60 * 24) 
        );
        const totalAmount = numberofNights * room.pricePerNight;

        const reservation = new Reservation({
            roomId,
            checkInDate,
            checkOutDate,
            totalAmount,
            user: req.userId,
        });
        await reservation.save();

        res.status(201).json({ message: "Reservation created successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = { createReservation };