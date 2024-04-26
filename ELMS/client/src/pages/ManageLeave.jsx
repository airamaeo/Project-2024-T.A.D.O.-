import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const ManageLeave = () => {
    return (
        <div className="ml-Body">
            <h1 className="manage-leave-heading">Manage Leave</h1>
            <div className="ml-options">
                <Link to="/request-leave">
                    <button>Request Leave</button>
                </Link>
                <Link to="/view-balances">
                    <button>View Balances</button>
                </Link>
                <Link to="/view-history">
                    <button>View History</button>
                </Link>
            </div>
        </div>
    );
};

export default ManageLeave;
