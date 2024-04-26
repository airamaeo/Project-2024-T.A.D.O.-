import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import amazonLogo from '../images/amazonLogo.png';
import bookingLogo from '../images/bookingLogo.png';
import netflixLogo from '../images/netflixLogo.png';
import ebayLogo from '../images/ebayLogo.png';
import adidasLogo from '../images/adidasLogo.png';


const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        contactNumber: '',
        companyEmail: '',
        jobTitle: '',
        numberOfEmployees: ''
    });

    const [bookingSuccess, setBookingSuccess] = useState(false);
    //TODO: Send email to client when booking is successful

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/submit-demo-booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Demo booking submitted successfully');
                setBookingSuccess(true);
            } else {
                console.error('Failed to submit demo booking');
            }
        } catch (error) {
            console.error('Error submitting demo booking:', error);
        }
    };


    return (
        <div className="register-body">
            <h2 className="demo-heading">The Best HR Software for Managing Your People</h2>
            <div className="demo-body">
                <div className="demo-intro">
                    <h3>Get to see T.A.D.O. in action</h3>
                    <h4>Join one of our experts and find out why businesses trust T.A.D.O.
                        for all their people management needs.</h4>
                    <p>
                        Here's what to expect:
                        <ul className="demo-list">
                            <li>Discussion built on your top priorities</li>
                            <li>A no-commitment product walkthrough </li>
                            <li>Your questions, answered</li>
                        </ul>
                    </p>
                    <div className="subscribed-brands">
                        <p>Some of our trusted subscribers:</p>
                        <img src={amazonLogo} alt="amazonLogo" />
                        <img src={bookingLogo} alt="bookingLogo" />
                        <img src={netflixLogo} alt="netflixLogo" />
                        <img src={ebayLogo} alt="ebayLogo" />
                        <img src={adidasLogo} alt="adidasLogo" />
                    </div>
                </div>
                {!bookingSuccess ? (
                    <form className="demo-form" onSubmit={handleSubmit}>
                        <div className="demo-form-box">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="demo-form-box">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="demo-form-box">
                            <input
                                type="text"
                                name="companyName"
                                placeholder="Company Name"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="demo-form-box">
                            <input
                                type="tel"
                                name="contactNumber"
                                placeholder="Contact Number"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="demo-form-box">
                            <input
                                type="email"
                                name="companyEmail"
                                placeholder="Company Email"
                                value={formData.companyEmail}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="demo-form-box">
                            <input
                                type="text"
                                name="jobTitle"
                                placeholder="Job Title"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="demo-form-box">
                            <input
                                type="number"
                                name="numberOfEmployees"
                                placeholder="Number of Employees"
                                value={formData.numberOfEmployees}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Book a Free Demo with us!</button>
                    </form>
                ) : (
                    <div className="success-message">
                        <p>Your demo booking was successful!</p>
                        <p>Please check your email for more details.</p>
                        <p>One of our trusted operators will reach out to you immediately.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;
