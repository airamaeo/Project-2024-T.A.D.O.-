import React, { useState, useEffect } from 'react';

const ViewHistory = () => {
    const [leaveHistory, setLeaveHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaveHistory = async () => {
            try {
                const response = await fetch(`http://localhost:3001/view-history?employee_id=1`);
                if (response.ok) {
                    const data = await response.json();
                    // Calculate weekday days for each leave request
                    const leaveWithWeekdayDays = data.map(leave => ({
                        ...leave,
                        weekday_days_requested: calculateWeekdayDays(leave.start_date, leave.end_date)
                    }));
                    setLeaveHistory(leaveWithWeekdayDays);
                } else {
                    throw new Error('Failed to fetch leave history');
                }
            } catch (error) {
                console.error('Error fetching leave history:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLeaveHistory();
    }, []);

    // Function to format date as dd/mm/yyyy
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    // Function to calculate the number of weekdays between two dates
    const calculateWeekdayDays = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        let count = 0;
        let currentDate = new Date(start);
        while (currentDate <= end) {
            const dayOfWeek = currentDate.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude weekends (Saturday and Sunday)
                count++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return count;
    };

    return (
        <div className='leave-history-container'>
            <h2>Leave History</h2>

            {loading ? (
                <p>Loading...</p>
            ) : leaveHistory.length === 0 ? (
                <p>There are no history records</p>
            ) : (
                <table className="leave-history-table">
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Request Type</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>No. of Days on Leave</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaveHistory.map((leave) => (
                            <tr key={leave.id}>
                                <td>{leave.employee_id}</td>
                                <td>{leave.request_type}</td>
                                <td>{formatDate(leave.start_date)}</td>
                                <td>{formatDate(leave.end_date)}</td>
                                <td>{leave.weekday_days_requested}</td>
                                <td>{leave.comments}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ViewHistory;
