import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import DashNavbar from '../components/DashNavbar';


const EmployeeDash = ({ loggedInEmployeeId, loggedInEmployeeRole }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (loggedInEmployeeId) {
            fetchEmployeeWorkingHours(loggedInEmployeeId);
        }
    }, [loggedInEmployeeId]);

    const handleDateClick = (arg) => {
        alert(arg.dateStr)
    }

    const fetchEmployeeWorkingHours = (employeeId) => {
        fetch(`/employee-working-hours/${employeeId}`)
            .then(response => response.json())
            .then(data => {
                const eventsData = data.map(event => ({
                    title: 'Work',
                    start: formatISOTime(event.start_time), // Format start time
                    end: formatISOTime(event.end_time) // Format end time
                }));
                console.log('Fetched employee working hours:', eventsData);
                setEvents(eventsData);
            })
            .catch(error => console.error('Error fetching employee working hours:', error));
    };

    const formatISOTime = (timeString) => {
        // Assuming timeString is in a format that can be parsed by Date constructor
        const date = new Date(timeString);
        return date.toISOString();
    };



    return (
        <div className="calendar-container">
            <h1 className="calendar-header">Employee Dashboard</h1>
            <FullCalendar
                id="calendar"
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={
                    {
                        start: "today prev,next",
                        center: "title",
                        end: "dayGridMonth,timeGridWeek,timeGridDay",
                    }
                }
                events={[
                    { title: 'Public Holiday - Easter Monday', date: '2024-04-01' }
                ]}
                weekends={true}
                selectable={true}
                selectMirror={true}
                firstDay={1} // To start the week on Monday
                dateClick={handleDateClick}
            />
            <div className="calendar-footer">Calendar Footer content</div>
        </div>
    );
};

export default EmployeeDash;
