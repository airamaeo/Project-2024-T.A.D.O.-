SELECT * FROM ELMS.employees;
SELECT * FROM ELMS.leave_requests;
SELECT * FROM ELMS.leave_balances;

-- ------------ TABLE FOR EMPLOYEE INFORMATION ----------- -- 

-- DROP TABLE employees;
USE ELMS;

CREATE TABLE IF NOT EXISTS employees (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL
);
SELECT * FROM employees WHERE email = 'test';
SET FOREIGN_KEY_CHECKS=0;


ALTER TABLE employees
ADD COLUMN employee_role VARCHAR(100) NOT NULL;

USE ELMS;
INSERT INTO employees (employee_role, first_name, last_name)
VALUES ('Content Analyst', 'John', 'Doe');

----------- ISERTING VALUES INTO EMPLOYEES TABLE ------------ -- 
USE ELMS;
INSERT INTO employees (first_name, last_name, date_of_birth, email, phone_number, password, employee_role) 
VALUES ('John', 'Doe', '1990-01-01', 'test', '1234567890', 'test', 'Quality Analyst');

USE ELMS;
INSERT INTO employees (first_name, last_name, date_of_birth, email, phone_number, password, employee_role) 
VALUES ('Jane', 'Rush', '1994-02-03', 'test2', '1234567890', 'test2', 'Quality Analyst');

USE ELMS;
INSERT INTO employees (first_name, last_name, date_of_birth, email, phone_number, password, employee_role) 
VALUES ('Josh', 'Dark', '1985-02-03', 'test3', '4765920', 'test3', 'Manager');
DELETE FROM employees WHERE first_name = 'Jane';

ALTER TABLE employees
RENAME COLUMN id TO employee_id;

-- ---------------------------------------------------------------------------------------------------------------

-- USE ELMS;
-- DROP TABLE LEAVE_REQUESTS;

-- ----------------------- TABLE FOR LEAVE REQUESTS --------------------------
-- CREATE TABLE IF NOT EXISTS leave_requests (
--     employee_id INT NOT NULL,
--     request_type VARCHAR(100) NOT NULL,
--     start_date DATE NOT NULL,
--     end_date DATE NOT NULL,
--     comments TEXT,
--     FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
-- );

SELECT * FROM ELMS.leave_requests;
SELECT * FROM ELMS.leave_requests WHERE employee_id = employee_id;

-- --------------------------------------------------------------------------------------------------------------

-- ----------------------- TABLE FOR LEAVE BALANCES --------------------------

USE ELMS;
DROP TABLE leave_balances;
SELECT * FROM ELMS.leave_balances;

-- ----------------------- Original table --------------------

CREATE TABLE IF NOT EXISTS leave_balances (
    leave_type VARCHAR(100) PRIMARY KEY,
    balance INT NOT NULL
);

INSERT INTO leave_balances (leave_type, balance)
VALUES 
    ('Annual Leave', 25),
    ('Sick Leave - Paid', 10),
    ('Sick Leave - Unpaid', 0),
    ('Maternity Leave', 180),
    ('Paternal Leave', 90),
    ('Compassionate Leave', 30),
    ('Bereavement Leave', 30),
    ('Unpaid Leave', 0);

-- ----------------------- TABLE with employee_id --------------------

CREATE TABLE IF NOT EXISTS leave_balances (
    employee_id INT NOT NULL,
    leave_type VARCHAR(100),
    balance INT NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

INSERT INTO leave_balances (employee_id, leave_type, balance)
SELECT 
    employee_id,
    'Annual Leave' AS leave_type,
    25 AS balance
FROM employees;

INSERT INTO leave_balances (employee_id, leave_type, balance)
SELECT 
    employee_id,
    'Sick Leave - Paid' AS leave_type,
    10 AS balance
FROM employees;

INSERT INTO leave_balances (employee_id, leave_type, balance)
SELECT 
    employee_id,
    'Sick Leave - Unpaid' AS leave_type,
    0 AS balance
FROM employees;

INSERT INTO leave_balances (employee_id, leave_type, balance)
SELECT 
    employee_id,
    'Maternity Leave' AS leave_type,
    180 AS balance
FROM employees;

INSERT INTO leave_balances (employee_id, leave_type, balance)
SELECT 
    employee_id,
    'Paternal Leave' AS leave_type,
    90 AS balance
FROM employees;

INSERT INTO leave_balances (employee_id, leave_type, balance)
SELECT 
    employee_id,
    'Compassionate Leave' AS leave_type,
    30 AS balance
FROM employees;

INSERT INTO leave_balances (employee_id, leave_type, balance)
SELECT 
    employee_id,
    'Bereavement Leave' AS leave_type,
    30 AS balance
FROM employees;

INSERT INTO leave_balances (employee_id, leave_type, balance)
SELECT 
    employee_id,
    'Unpaid Leave' AS leave_type,
    0 AS balance
FROM employees;


    
-- ---------------------FOR RESETTING THE BALANCE--------------------
TRUNCATE TABLE leave_balances;

INSERT INTO leave_balances (leave_type, balance)
VALUES 
    ('Annual Leave', 25),
    ('Sick Leave - Paid', 10),
    ('Sick Leave - Unpaid', 0),
    ('Maternity Leave', 180),
    ('Paternal Leave', 90),
    ('Compassionate Leave', 30),
    ('Bereavement Leave', 30),
    ('Unpaid Leave', 0);

DELETE FROM leave_requests;

-- --------------------------------------------------------------------------------------------------------------
-- --------------------------------------------------------------------------------------------------------------
-- --------------------------------------------------------------------------------------------------------------
-- --------------------------------------------------------------------------------------------------------------
-- --------------------------------------------------------------------------------------------------------------
-- --------------------------------------------------------------------------------------------------------------
-- --------------------------------------------------------------------------------------------------------------
-- --------------------------------------------------------------------------------------------------------------
DROP TABLE employees;
DROP TABLE leave_requests;
DROP TABLE leave_balances;

SELECT * FROM ELMS.employees;
SELECT * FROM ELMS.leave_requests;
SELECT * FROM ELMS.leave_balances;
-- --------------------------------------------------------------------------------------------------------------
USE ELMS; 
-- Create the employees table
CREATE TABLE IF NOT EXISTS employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    employee_role VARCHAR(100) NOT NULL
);
-- ----------- ISERTING VALUES INTO EMPLOYEES TABLE ------------ -- 
USE ELMS;
INSERT INTO employees (employee_id, first_name, last_name, date_of_birth, email, phone_number, password, employee_role) 
VALUES ('1', 'John', 'Doe', '1990-01-01', 'test', '1234567890', 'test', 'Quality Analyst');

USE ELMS;
INSERT INTO employees (employee_id, first_name, last_name, date_of_birth, email, phone_number, password, employee_role) 
VALUES ('2', 'Jane', 'Rush', '1994-02-03', 'test2', '1234567890', 'test2', 'Quality Analyst');

USE ELMS;
INSERT INTO employees (employee_id, first_name, last_name, date_of_birth, email, phone_number, password, employee_role) 
VALUES ('3', 'Josh', 'Dark', '1985-02-03', 'test3', '4765920', 'test3', 'Manager');

-- --------------------------------------------------------------------------------------------------------------
SELECT * FROM ELMS.leave_requests;
-- Create the leave_requests table
CREATE TABLE IF NOT EXISTS leave_requests (
    request_id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    request_type VARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    comments TEXT,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

-- Add weekday_days_requested column to the leave_requests table
ALTER TABLE leave_requests
ADD COLUMN weekday_days_requested INT DEFAULT 0;

-- Create a trigger to update weekday_days_requested
DELIMITER //

CREATE TRIGGER update_weekday_days_requested
BEFORE INSERT ON leave_requests
FOR EACH ROW
BEGIN
    DECLARE start_date_weekday INT;
    DECLARE end_date_weekday INT;

    SET start_date_weekday = DAYOFWEEK(NEW.start_date);
    SET end_date_weekday = DAYOFWEEK(NEW.end_date);

    SET NEW.weekday_days_requested = 
        (DATEDIFF(NEW.end_date, NEW.start_date) + 1) -
        (IF(start_date_weekday = 1, 1, 0) + IF(end_date_weekday = 7, 1, 0));
END;
//

DELIMITER ;

ALTER TABLE leave_requests ADD COLUMN status VARCHAR(50) NOT NULL DEFAULT 'pending';

ALTER TABLE leave_requests
CHANGE status request_status VARCHAR(50);

-- --------------------------------------------------------------------------------------------------------------
SELECT * FROM ELMS.leave_balances;

-- Create the leave_balances table
CREATE TABLE IF NOT EXISTS leave_balances (
    employee_id INT  NOT NULL,
    leave_type VARCHAR(100) NOT NULL,
    balance INT NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

INSERT INTO leave_balances (employee_id, leave_type, balance)
VALUES 
    (1, 'Annual Leave', 25),
    (1, 'Sick Leave - Paid', 10),
    (1, 'Sick Leave - Unpaid', 0),
    (1, 'Maternity Leave', 180),
    (1, 'Paternal Leave', 90),
    (1, 'Compassionate Leave', 30),
    (1, 'Bereavement Leave', 30),
    (1, 'Unpaid Leave', 0),
	(2, 'Annual Leave', 25),
    (2, 'Sick Leave - Paid', 10),
    (2, 'Sick Leave - Unpaid', 0),
    (2, 'Maternity Leave', 180),
    (2, 'Paternal Leave', 90),
    (2, 'Compassionate Leave', 30),
    (2, 'Bereavement Leave', 30),
    (2, 'Unpaid Leave', 0),
    (3, 'Annual Leave', 25),
    (3, 'Sick Leave - Paid', 10),
    (3, 'Sick Leave - Unpaid', 0),
    (3, 'Maternity Leave', 180),
    (3, 'Paternal Leave', 90),
    (3, 'Compassionate Leave', 30),
    (3, 'Bereavement Leave', 30),
    (3, 'Unpaid Leave', 0);

-- Modify the table structure to allow NULL values for employee_id and request_id
ALTER TABLE leave_balances
    MODIFY COLUMN employee_id INT NULL,
    MODIFY COLUMN request_id INT NULL;

-- Insert the data with default values
INSERT INTO leave_balances (employee_id, request_id, leave_type, balance)
VALUES 
    (NULL, NULL, 'Annual Leave', 25),
    (NULL, NULL, 'Sick Leave - Paid', 10),
    (NULL, NULL, 'Sick Leave - Unpaid', 0),
    (NULL, NULL, 'Maternity Leave', 180),
    (NULL, NULL, 'Paternal Leave', 90),
    (NULL, NULL, 'Compassionate Leave', 30),
    (NULL, NULL, 'Bereavement Leave', 30),
    (NULL, NULL, 'Unpaid Leave', 0);

-- Revert the table structure back to disallow NULL values for employee_id and request_id
ALTER TABLE leave_balances
    MODIFY COLUMN employee_id INT NOT NULL,
    MODIFY COLUMN request_id INT NOT NULL;
    
SELECT * FROM leave_balances WHERE employee_id = ?;

TRUNCATE TABLE leave_requests;
TRUNCATE TABLE leave_balances;

DESCRIBE leave_requests;

-- --------------------------------------------------------------------------------------------------------------
SELECT * FROM employee_working_hours;
-- DROP TABLE employee_working_hours;

-- Create the employee_working_hours table
USE ELMS;
CREATE TABLE IF NOT EXISTS employee_working_hours (
    working_hours_id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

-- Insert working hours for employee_id 1 (9AM to 5PM)
USE ELMS;
INSERT INTO employee_working_hours (working_hours_id, employee_id, start_time, end_time)
VALUES (1, 1, '2024-04-19 09:00:00', '2024-04-19 17:00:00');

-- Insert working hours for employee_id 2 (9AM to 5PM)
USE ELMS;
INSERT INTO employee_working_hours (working_hours_id, employee_id, start_time, end_time)
VALUES (2, 2,  '2024-04-19 09:00:00', '2024-04-19 17:00:00');

-- Insert working hours for employee_id 3 (8:30AM to 4:30PM)
USE ELMS;
INSERT INTO employee_working_hours (working_hours_id, employee_id, start_time, end_time)
VALUES (3, 3, '2024-04-19 08:30:00', '2024-04-19 16:30:00');

ALTER TABLE employee_working_hours ADD COLUMN first_name VARCHAR(255) NOT NULL;
ALTER TABLE employee_working_hours ADD COLUMN last_name VARCHAR(255) NOT NULL;
ALTER TABLE employee_working_hours ADD COLUMN employee_role VARCHAR(100) NOT NULL;

-- Add foreign key constraint to employee_id referencing employees(employee_id)
ALTER TABLE employee_working_hours 
ADD FOREIGN KEY (employee_id) REFERENCES employees(employee_id);

-- Update employee_working_hours with first_name, last_name and employee_role information
UPDATE employee_working_hours AS ewh
JOIN employees AS e ON ewh.employee_id = e.employee_id
SET ewh.first_name = e.first_name, ewh.last_name = e.last_name, ewh.employee_role = e.employee_role;

-- Create trigger to enforce shift timing based on employee_role
DELIMITER //
CREATE TRIGGER enforce_shift_timing
BEFORE INSERT ON employee_working_hours
FOR EACH ROW
BEGIN
    IF NEW.employee_role = 'Manager' THEN
        SET NEW.start_time = DATE_FORMAT(NEW.start_time, '%Y-%m-%d 08:30:00');
        SET NEW.end_time = DATE_FORMAT(NEW.end_time, '%Y-%m-%d 16:30:00');
    ELSEIF NEW.employee_role = 'Quality Analyst' THEN
        SET NEW.start_time = DATE_FORMAT(NEW.start_time, '%Y-%m-%d 09:00:00');
        SET NEW.end_time = DATE_FORMAT(NEW.end_time, '%Y-%m-%d 17:00:00');
    END IF;
END;
//
DELIMITER ;

-- --------------------------------------------------------------------------------------------------------------
USE ELMS;
CREATE TABLE demo_bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    contact_number VARCHAR(20) NOT NULL,
    company_email VARCHAR(255) NOT NULL,
    job_title VARCHAR(255) NOT NULL,
    number_of_employees INT NOT NULL,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM demo_bookings;
