import React, { useEffect, useState } from "react"; 
import { useParams, Link } from "react-router-dom";

const RoomDetails = () => {
    const {id} = useParams();
    const [room, setRoom] = useState(null);

    useEffect (() => {
        const fetchRoomDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/rooms/${id}`); 
                const data = await response.json();
                setRoom(data);
            } catch (error) {
                console.error("Error fetching room details:", error);
            }
        };
        
        fetchRoomDetails();
    }, [id]);

    if (!room) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h1>{room.type}</h1>
            <p>Room ID: {room.roomId}</p>
            <p>Hotel ID: {room.hotelId}</p> 
            <p>Capacity: {room.capacity}</p>
            <p>Availability: {room.availability}</p>
            <p>Price per night: ${room.pricePerNight}</p>
            <Link to={`/reservation/${room._id}`} className="btn btn-primary">
            Reserve Room
            </Link>
        </div>
    );
};

export default RoomDetails;