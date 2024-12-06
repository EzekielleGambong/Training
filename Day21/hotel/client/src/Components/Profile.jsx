import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";

const Profile = () => {

    
    return (
        <div className="container mt-5">
          <h2>Profile</h2>
          {message && <div className="alert alert-info">{message}</div>}
          <div>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
    <h3>Change Email</h3>
          <div className="mb-3">
            <label htmlFor="newEmail" className="form-label">
              New Email
            </label>
            <input
              type="email"
              className="form-control"
              id="newEmail"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <button className="btn btn-primary mt-2" onClick={handleChangeEmail}>
              Update Email
            </button>
          </div>
    <h3>Change Password</h3>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button className="btn btn-primary mt-2" onClick={handleChangePassword}>
              Update Password
            </button>
          </div>
    <button className="btn btn-danger mt-4" onClick={handleLogout}>
            Logout
          </button>
        </div>
      );
}