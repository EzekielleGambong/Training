
import logo from "./logo.svg";
import { Route, Routes } from "react-router"; import "./App.css";
import Navbar from "./Components/Navbar"
import Home from "./Components/Home";
import { Router } from "express";
import RoomList from "./Components/RoomList";
import RoomDetails from "./Components/RoomDetails";

function App() { 
  return ( 
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      <Route
        path="/rooms"
        element={
          <>
            <Navbar />
            <RoomList />
          </>
        }
      />

      <Route
        path="/rooms/:id"
        element={
          <>
            <Navbar />
            <RoomDetails />
          </>
        }
      />      
    </Routes>
  );
}
export default App;