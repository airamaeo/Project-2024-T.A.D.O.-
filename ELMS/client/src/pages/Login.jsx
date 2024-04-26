import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ViewBalances from './ViewBalances';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedInEmployeeId, setLoggedInEmployeeId] = useState(null);
    const [loggedInEmployeeRole, setLoggedInEmployeeRole] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { email, password };
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: new Headers({ 'content-type': 'application/json' }),
                body: JSON.stringify(body),
            });

            if (response.ok) {
                const data = await response.json();
                const { employee_role } = data;
                // setLoggedInEmployeeRole(employee_role);
                // setLoggedInEmployeeId(employee_id);

                // Redirect based on employee role
                if (employee_role === 'Quality Analyst') {
                    window.location.href = '/employeeDash';
                } else if (employee_role === 'Manager') {
                    window.location.href = '/adminDash';
                } else {
                    console.log('Unknown role:', employee_role);
                }
            } else if (response.status === 401) {
                alert('Incorrect email or password');
            } else {
                alert('An error occurred while logging in');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred while logging in');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="email"
                    placeholder='Enter your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>

            {/* Redirect based on logged-in user's role */}
            {loggedInEmployeeRole === 'Quality Analyst' && <Link to="/employeeDash" />}
            {loggedInEmployeeRole === 'Manager' && <Link to="/adminDash" />}

            {/* Pass loggedInEmployeeId to ViewBalances component */}
            {loggedInEmployeeId && <ViewBalances loggedInEmployeeId={loggedInEmployeeId} />}
        </div>
    );
};

export default Login;
