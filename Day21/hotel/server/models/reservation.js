const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
      ref: "Room",
      required: true
    },
    checkInDat: {
      type: Date,
      required: true,
    },
    checkOutDat: {
      type: Date,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    paymentIntentId: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
  },
  { timestamps: true }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;