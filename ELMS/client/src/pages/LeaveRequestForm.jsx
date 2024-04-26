import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LeaveRequestForm = () => {
    const [requestType, setRequestType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [comments, setComments] = useState('');
    const [weekdayDays, setWeekdayDays] = useState(0);
    const [leaveBalances, setLeaveBalances] = useState([]);
    const [showNotification, setShowNotification] = useState(false);


    // Function to calculate weekday days
    const calculateWeekdayDays = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        let count = 0;
        for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
            const dayOfWeek = date.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                count++;
            }
        }
        setWeekdayDays(count);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        calculateWeekdayDays();
        try {
            const response = await fetch('http://localhost:3001/request-leave', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    employee_id: 3, // Assuming hardcoded for now
                    request_type: requestType,
                    start_date: startDate,
                    end_date: endDate,
                    comments,
                    weekday_days: weekdayDays
                })
            });

            if (response.ok) {
                setShowNotification(true);
            } else {
                throw new Error('Failed to submit leave request');
            }
        } catch (error) {
            console.error('Error submitting leave request:', error);
            alert('Failed to submit leave request');
        }
    };

    return (
        <div className='form-leave-body'>
            <div className='form-leave-container'>
                <h2>Leave Request Form</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Leave Request Type:
                        <select value={requestType} onChange={(e) => setRequestType(e.target.value)}>
                            <option value="">Select Leave Request Type</option>
                            <option value="Annual Leave">Annual Leave</option>
                            <option value="Sick Leave - Paid">Sick Leave - Paid</option>
                            <option value="Sick Leave - Unpaid">Sick Leave - Unpaid</option>
                            <option value="Maternity Leave">Maternity Leave</option>
                            <option value="Paternal Leave">Paternal Leave</option>
                            <option value="Bereavement Leave">Bereavement Leave</option>
                            <option value="Unpaid Leave">Unpaid Leave</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Date Range:
                        <input type="date" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        <input type="date" name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Weekday Days Requested: {weekdayDays}
                    </label>
                    <br />
                    <label>
                        Comments:
                        <textarea name="comments" rows="4" cols="50" onChange={(e) => setComments(e.target.value)} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                {showNotification && (
                    <div className="notification">
                        <p>Leave request submitted successfully</p>
                        {/* Use Link to navigate back to ManageLeave.jsx */}
                        <Link to="/manageLeave">
                            <button>Dismiss</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LeaveRequestForm;
