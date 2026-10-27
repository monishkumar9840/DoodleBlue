import React from "react";
import EventCard from "../EventCard/EventCard";
import "./EventList.css";

function EventList({
  events,
  onRegister,
  onFavorite,
  onRemove,
}) {
  return (
    <section className="events-section" id="events">

      <div className="events-header">

        <p className="events-subtitle">
          DISCOVER YOUR CAMPUS
        </p>

        <h2>Upcoming Events</h2>

        <p className="events-description">
          Find opportunities to learn, connect, and participate.
        </p>

      </div>


      <div className="event-list">

        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onRegister={onRegister}
            onFavorite={onFavorite}
            onRemove={onRemove}
          />
        ))}

      </div>


      {events.length === 0 && (
        <p className="empty-events">
          No events available.
        </p>
      )}

    </section>
  );
}

export default EventList;