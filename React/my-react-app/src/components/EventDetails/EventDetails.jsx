import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Button } from '../Common';
import { useFavorites } from '../../context/FavoritesContext';
import { getEventById } from '../../Services/eventService';
import './EventDetails.css';

function EventDetails() {
  const { id } = useParams();
  const location = useLocation();
  const { isFavorite, toggleFavorite } = useFavorites();
  const routeEvent = location.state?.event
    && String(location.state.event.id) === id
    ? location.state.event
    : null;
  const [loadedEvent, setLoadedEvent] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const event = routeEvent
    ?? (loadedEvent?.id === id ? loadedEvent.event : null);
  const favorite = event ? isFavorite(event.id) : false;
  const error = loadError?.id === id ? loadError.message : '';
  const isLoading = !routeEvent && loadedEvent?.id !== id && !error;

  useEffect(() => {
    if (routeEvent) {
      return undefined;
    }

    let active = true;

    getEventById(id)
      .then((loadedEvent) => {
        if (active) {
          setLoadedEvent({ id, event: loadedEvent });
        }
      })
      .catch(() => {
        if (active) {
          setLoadError({ id, message: 'This event could not be found.' });
        }
      });

    return () => {
      active = false;
    };
  }, [id, routeEvent]);

  return (
    <section className="event-details-page">
      <div className="event-details-container">
        <Link className="back-to-events" to="/events">Back to Events</Link>

        {isLoading && <p className="event-details-message">Loading event...</p>}
        {!isLoading && !event && error && (
          <p className="event-details-message" role="alert">{error}</p>
        )}

        {!isLoading && event && (
          <article className="event-details-card">
            <header className="event-details-header">
              <span className="event-details-category">{event.category}</span>
              <span className="event-details-id">Event ID: #{event.id}</span>
            </header>

            <h1>{event.title}</h1>
            <p className="event-details-description">{event.description}</p>

            <div className="event-details-info">
              <p><strong>Date:</strong> <span>{event.date}</span></p>
              <p><strong>Venue:</strong> <span>{event.venue}</span></p>
            </div>

            <div className="event-details-actions">
              <Link className="event-details-register" to="/registration" state={{ event }}>
                Register for this Event
              </Link>
              <Button
                variant="favorite"
                size="small"
                type="button"
                className={`event-details-favorite ${favorite ? 'is-favorite' : ''}`}
                onClick={() => toggleFavorite(event.id)}
                aria-pressed={favorite}
              >
                {favorite ? 'Favorited' : 'Add Favorite'}
              </Button>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

export default EventDetails;
