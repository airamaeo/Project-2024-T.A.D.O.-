import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDash = () => {
    const [leaveRequests, setLeaveRequests] = useState([]);

    useEffect(() => {
        // Fetch leave requests data from backend
        axios.get('http://localhost:3001/leave-requests')
            .then(response => {
                setLeaveRequests(response.data);
            })
            .catch(error => {
                console.error('Error fetching leave requests:', error);
            });
    }, []);

    const handleApprove = (requestId) => {
        // Check if requestId is defined before sending the request
        if (requestId !== undefined) {
            // Update leave request status to 'approved'
            axios.put(`http://localhost:3001/leave-requests/${requestId}`, { status: 'approved' })
                .then(response => {
                    console.log('Leave request approved successfully');
                    // Refresh leave requests data after approval
                    axios.get('http://localhost:3001/leave-requests')
                        .then(response => {
                            setLeaveRequests(response.data);
                        })
                        .catch(error => {
                            console.error('Error fetching leave requests:', error);
                        });
                })
                .catch(error => {
                    console.error('Error approving leave request:', error);
                });
        } else {
            console.error('Invalid requestId:', requestId);
        }
    };

    const handleDecline = (requestId) => {
        // Check if requestId is defined before sending the request
        if (requestId !== undefined) {
            // Prompt the user for a reason
            const reason = prompt('Please provide a reason for declining the leave request:');
            if (reason) {
                // Update leave request status to 'declined' along with the reason
                axios.put(`http://localhost:3001/leave-requests/${requestId}`, { status: 'declined', reason })
                    .then(response => {
                        console.log('Leave request declined successfully');
                        // Refresh leave requests data after decline
                        axios.get('http://localhost:3001/leave-requests')
                            .then(response => {
                                setLeaveRequests(response.data);
                            })
                            .catch(error => {
                                console.error('Error fetching leave requests:', error);
                            });
                    })
                    .catch(error => {
                        console.error('Error declining leave request:', error);
                    });
            } else {
                console.log('Reason not provided. Leave request was not declined.');
            }
        } else {
            console.error('Invalid requestId:', requestId);
        }
    };


    return (
        <div className="admin-dash-container">
            <h2>Leave Requests Approval</h2>
            <ul>
                {leaveRequests.map(request => (
                    <li key={request.id} className="leave-request">
                        <div className="leave-request-info">
                            <div><span>Employee ID:</span> {request.employee_id}</div>
                            <div><span>Request Type:</span> {request.request_type}</div>
                            <div><span>Start Date:</span> {request.start_date}</div>
                            <div><span>End Date:</span> {request.end_date}</div>
                            <div><span>Comments:</span> {request.comments}</div>
                        </div>
                        <div className="leave-request-buttons">
                            <button onClick={() => handleApprove(request.id)}>Approve</button>
                            <button onClick={() => handleDecline(request.id)}>Decline</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default AdminDash;
