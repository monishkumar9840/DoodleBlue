import { Link } from 'react-router-dom';
import { Button } from '../Common';
import { useFavorites } from '../../context/FavoritesContext';
import './EventCard.css';

function EventCard({ event, handleDelete }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(event.id);

  return (
    <article className="event-card">
      <div className="event-image" aria-hidden="true">
        <span>{event.category}</span>
      </div>

      <div className="event-content">
        <span className="event-category">{event.category}</span>
        <h3>{event.title}</h3>
        <p className="event-description">{event.description}</p>
        <p className="event-info"><strong>Date:</strong> {event.date}</p>
        <p className="event-info"><strong>Venue:</strong> {event.venue}</p>
        <p className="event-info">
          <strong>Registrations:</strong> {event.registrations ?? 0}
        </p>
        <p className="event-info"><strong>Event ID:</strong> {event.id}</p>

        <Link className="details-btn" to={`/events/${event.id}`} state={{ event }}>
          View Details
        </Link>

        <div className="event-actions">
          <div className="event-primary-actions">
            <Link className="register-btn" to="/registration" state={{ event }}>
              Register
            </Link>
            <Button
              variant="favorite"
              size="small"
              type="button"
              className={`favorite-btn ${favorite ? 'is-favorite' : ''}`}
              onClick={() => toggleFavorite(event.id)}
              aria-pressed={favorite}
            >
              {favorite ? 'Favorited' : 'Add Favorite'}
            </Button>
          </div>
          <div className="event-secondary-actions">
            <Button
              variant="danger"
              size="small"
              type="button"
              className="remove-btn"
              onClick={() => handleDelete(event.id)}
            >
              Delete Event
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
