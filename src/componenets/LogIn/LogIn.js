import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send POST request to backend endpoint
        fetch("http://localhost:3001/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.status === 200) {
                alert("User successfully logged in");
                // Handle successful login (e.g., redirect to dashboard)
            } else if (response.status === 401) {
                alert("Invalid credentials");
            } else {
                alert("Internal server error");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to log in. Please try again later.");
        });
    };

    return (
        <div className="login login-form">
        <form onSubmit={handleSubmit} className="Lcontainer">
            <div className="form-container">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={formData.username} onChange={handleChange} required /><br />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={formData.password} onChange={handleChange} required /><br />
                
                <button type="submit">Log In</button>
            </div>
        </form>
        </div>
    );
}

export default LoginForm;

