import React from "react";
import "./EventCard.css";

function EventCard({
  event,
  onRegister,
  onFavorite,
  onRemove,
}) {
  return (
    <article className="event-card">

      <div className="event-image">
        <span>{event.category}</span>
      </div>

      <div className="event-content">

        <span className="event-category">
          {event.category}
        </span>

        <h3>{event.title}</h3>

        <p className="event-description">
          {event.description}
        </p>

        <p className="event-info">
          <strong>Date:</strong> {event.date}
        </p>

        <p className="event-info">
          <strong>Venue:</strong> {event.venue}
        </p>

        <p className="event-info">
          <strong>Registrations:</strong> {event.registrations}
        </p>

        <div className="event-actions">

          <button
            className="register-btn"
            onClick={() => onRegister(event)}
          >
            {event.isRegistered
              ? "Cancel Registration"
              : "Register"}
          </button>

          <button
            className={`favorite-btn ${
              event.isFavorite ? "is-favorite" : ""
            }`}
            onClick={() => onFavorite(event.id)}
          >
            {event.isFavorite
              ? "★ Favorited"
              : "Add Favorite"}
          </button>

          <button
            className="remove-btn"
            onClick={() => onRemove(event.id)}
          >
            Remove Event
          </button>

        </div>

      </div>

    </article>
  );
}

export default EventCard;