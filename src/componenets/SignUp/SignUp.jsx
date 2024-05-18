import React, { useState } from 'react';
import './SignUp.css';

function SignUpForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Client-side validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneNumberRegex = /^\d{10}$/;

        if (!emailRegex.test(formData.email)) {
            alert("Invalid email format");
            return;
        }

        if (!phoneNumberRegex.test(formData.phoneNumber)) {
            alert("Invalid phone number format (10 digits)");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Send POST request to backend endpoint
        fetch("http://localhost:3001/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.status === 201) {
                alert("User created successfully");
            } else if (response.status === 400) {
                alert("Invalid input data");
            } else {
                alert("Internal server error");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to create user. Please try again later.");
        });
    };

    return (
        <div className="signup">
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={formData.username} onChange={handleChange} required /><br />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required /><br />
            
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} pattern="[0-9]{10}" required /><br />
            
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={formData.password} onChange={handleChange} required /><br />
            
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required /><br />
            
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
}

export default SignUpForm;
