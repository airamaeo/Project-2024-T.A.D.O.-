import React, { useState, useEffect } from 'react';

const ViewBalances = ({ loggedInEmployeeId }) => {
    const [leaveBalances, setLeaveBalances] = useState([]);

    useEffect(() => {
        fetchLeaveBalances();
    }, [loggedInEmployeeId]);

    const fetchLeaveBalances = async () => {
        try {
            const response = await fetch(`http://localhost:3001/view-balances?employee_id=${loggedInEmployeeId}`);
            if (response.ok) {
                const data = await response.json();
                setLeaveBalances(data);
            } else {
                throw new Error('Failed to fetch leave balances');
            }
        } catch (error) {
            console.error('Error fetching leave balances:', error);
        }
    };

    return (
        <div className='balances-container'>
            <div className='balances-box'>
                <h2>Leave Balances</h2>
                <ul>
                    {leaveBalances.map((balance) => (
                        <li key={balance.leave_type}>
                            Employee ID {loggedInEmployeeId}: {balance.leave_type}: {balance.balance}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ViewBalances;
