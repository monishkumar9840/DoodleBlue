import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { createRegistration, getAllEvents } from '../../Services/eventService';
import Registration from './Registration';

function RegistrationRoute() {
  const location = useLocation();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(location.state?.event ?? null);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    getAllEvents()
      .then((loadedEvents) => {
        if (active) {
          setEvents(loadedEvents);
        }
      })
      .catch(() => {
        if (active) {
          setError('Could not load events. Please try again later.');
        }
      });

    return () => {
      active = false;
    };
  }, []);

  function handleEventChange(id) {
    setSelectedEvent(events.find((event) => String(event.id) === id) ?? null);
  }

  async function handleSubmit(formData, event) {
    const registration = {
      studentName: formData.studentName.trim(),
      email: formData.email.trim(),
      department: formData.department,
      year: formData.year,
      attendance: formData.attendance,
      accessibility: formData.accessibility,
      message: formData.message.trim(),
      eventId: event.id,
      eventTitle: event.title,
      createdAt: new Date().toISOString(),
    };

    return createRegistration(registration);
  }

  return (
    <>
      {error && <p className="empty-events" role="alert">{error}</p>}
      <Registration
        event={selectedEvent}
        events={events}
        onEventChange={handleEventChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default RegistrationRoute;
