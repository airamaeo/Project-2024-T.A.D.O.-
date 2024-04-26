const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
// const request = require('supertest');
// const bodyParser = require('body-parser');
// const cors = require('cors');

const app = express();
const port = 3001;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Coco29!',
    database: 'ELMS'
});

// Custom middleware to set CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Fetch employee working hours endpoint
app.get('/employee-working-hours/:employeeId', (req, res) => {
    const { employeeId } = req.params;
    const query = 'SELECT * FROM employee_working_hours WHERE employee_id = ?';
    db.query(query, [employeeId], (error, results) => {
        if (error) {
            console.error('Error fetching employee working hours:', error);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            const employeeWorkingHours = results.map(row => ({
                title: 'Work',
                start: row.start_time,
                end: row.end_time
            }));
            res.json(employeeWorkingHours);
        }
    });
});


// LOGIN ENDPOINT
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT employee_id, employee_role, password FROM employees WHERE email = ?";

    db.query(sql, [email], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            if (result.length > 0) {
                const user = result[0];
                if (password === user.password) { // Compare passwords
                    // Login successful
                    console.log('Login successful');
                    res.status(200).json({ employee_role: user.employee_role, employee_id: user.id });
                } else {
                    // Incorrect password
                    console.log('Incorrect password');
                    res.status(401).json({ message: 'Incorrect email or password' });
                }
            } else {
                // User not found
                console.log('User not found');
                res.status(404).json({ message: 'User not found' });
            }
        }
    });
});



//LEAVE REQUEST ENDPOINT
app.post('/request-leave', (req, res) => {
    const { employee_id, request_type, start_date, end_date, comments } = req.body;
    // Calculate weekday days
    const startDateObj = new Date(start_date);
    const endDateObj = new Date(end_date);
    let weekdayDays = 0;
    for (let date = startDateObj; date <= endDateObj; date.setDate(date.getDate() + 1)) {
        const dayOfWeek = date.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude weekends (Saturday and Sunday)
            weekdayDays++;
        }
    }

    const sqlInsertRequest = "INSERT INTO leave_requests (employee_id, request_type, start_date, end_date, comments, weekday_days_requested) VALUES (?, ?, ?, ?, ?, ?)";
    const sqlUpdateBalance = "UPDATE leave_balances SET balance = balance - ? WHERE employee_id = ? AND leave_type = ?";

    db.beginTransaction((err) => {
        if (err) {
            console.error('Database transaction error:', err);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }

        db.query(sqlInsertRequest, [employee_id, request_type, start_date, end_date, comments, weekdayDays], (err, result) => {
            if (err) {
                console.error('Insert leave request error:', err);
                db.rollback(() => {
                    res.status(500).json({ message: 'Internal server error' });
                });
                return;
            }

            db.query(sqlUpdateBalance, [weekdayDays, employee_id, request_type], (err, result) => {
                if (err) {
                    console.error('Update leave balance error:', err);
                    db.rollback(() => {
                        res.status(500).json({ message: 'Internal server error' });
                    });
                    return;
                }

                db.commit((err) => {
                    if (err) {
                        console.error('Commit transaction error:', err);
                        db.rollback(() => {
                            res.status(500).json({ message: 'Internal server error' });
                        });
                        return;
                    }

                    res.status(200).json({ message: 'Leave request submitted successfully' });
                });
            });
        });
    });
});



// VIEW BALANCES ENDPOINT
app.get('/view-balances', (req, res) => {
    //TODO: Figure out how to make this work so it shows for the user that is logged in
    // const employee_id = req.query.employee_id; // Get the employee_id from the request query parameters
    // const sql = "SELECT * FROM ELMS.leave_balances WHERE employee_id = employee_id";

    //Currently this will show for all employees
    //Changing req.query.employee_id to 1 & = employee_id to ? will show employee_id1 only
    const employee_id = req.query.employee_id; // Get the employee_id from the request query parameters
    const sql = "SELECT * FROM ELMS.leave_balances WHERE employee_id = employee_id";
    db.query(sql, [employee_id], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.status(200).json(result);
        }
    });
});


// VIEW HISTORY ENDPOINT
app.get('/view-history', (req, res) => {
    const employee_id = req.query.employee_id;
    const sql = "SELECT * FROM leave_requests WHERE employee_id = ?";
    db.query(sql, [employee_id], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.status(200).json(result);
        }
    });
});


// Backend endpoint to fetch leave requests for approval
app.get('/leave-requests', (req, res) => {
    const sql = "SELECT * FROM leave_requests WHERE request_status = 'pending'";
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.status(200).json(result);
        }
    });
});

// Backend endpoint to update leave request status
app.put('/leave-requests/:requestId', (req, res) => {
    const requestId = req.params.requestId;
    const { status } = req.body;

    // Check if status is valid
    if (status !== 'approved' && status !== 'declined') {
        return res.status(400).json({ message: 'Invalid status' });
    }

    const sql = "UPDATE leave_requests SET request_status = ? WHERE id = ?";
    db.query(sql, [status, requestId], (err, result) => {
        if (err) {
            console.error('Update leave request status error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            console.log('Leave request status updated successfully');
            res.status(200).json({ message: 'Leave request status updated successfully' });
        }
    });
});

// Backend endpoint to handle form submissions
app.post('/submit-demo-booking', (req, res) => {
    const { firstName, lastName, companyName, contactNumber, companyEmail, jobTitle, numberOfEmployees } = req.body;

    const sql = "INSERT INTO demo_bookings (first_name, last_name, company_name, contact_number, company_email, job_title, number_of_employees) VALUES (?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, [firstName, lastName, companyName, contactNumber, companyEmail, jobTitle, numberOfEmployees], (err, result) => {
        if (err) {
            console.error('Insert demo booking error:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            console.log('Demo booking submitted successfully');
            res.status(200).json({ message: 'Demo booking submitted successfully' });
        }
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//UNIT TESTING for employee-working-hours
// describe('GET /employee-working-hours/:employeeId', () => {
//     it('responds with JSON containing the employee working hours', async () => {
//         const response = await request(app).get('/employee-working-hours/123');
//         expect(response.statusCode).toBe(200);
//         expect(response.body).toHaveProperty('workingHours');
//         expect(response.body.workingHours).toHaveLength(2); // Assuming two working hours returned
//     });

//     it('responds with 404 if employee ID is not found', async () => {
//         const response = await request(app).get('/employee-working-hours/999');
//         expect(response.statusCode).toBe(404);
//     });

// });