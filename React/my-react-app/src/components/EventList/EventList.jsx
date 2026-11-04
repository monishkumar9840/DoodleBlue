import { useEffect, useMemo, useState } from 'react';
import EventCard from '../EventCard/EventCard';
import { Button, Input, Select, TextArea } from '../Common';
import { useFavorites } from '../../context/FavoritesContext';
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getAllRegistrations,
} from '../../Services/eventService';
import './EventList.css';

function EventList({ favoritesOnly = false }) {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [createError, setCreateError] = useState('');
  const [createSuccess, setCreateSuccess] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    category: 'Tech',
    date: '',
    venue: '',
    description: '',
  });
  const { favoriteIds, removeFavorite } = useFavorites();

  useEffect(() => {
    let active = true;

    async function loadEvents() {
      try {
        setLoading(true);
        setError('');
        const [data, registrations] = await Promise.all([
          getAllEvents(),
          getAllRegistrations(),
        ]);
        const registrationCounts = registrations.reduce((counts, registration) => {
          const eventById = data.find(
            (event) => String(event.id) === String(registration.eventId)
          );
          const matchingTitleEvents = data.filter(
            (event) => event.title?.trim().toLowerCase()
              === registration.eventTitle?.trim().toLowerCase()
          );
          const matchedEvent = eventById
            ?? (matchingTitleEvents.length === 1 ? matchingTitleEvents[0] : null);

          if (matchedEvent) {
            const eventId = String(matchedEvent.id);
            counts[eventId] = (counts[eventId] ?? 0) + 1;
          }
          return counts;
        }, {});

        if (active) {
          setEvents(data.map((event) => ({
            ...event,
            registrations: registrationCounts[String(event.id)] ?? 0,
          })));
        }
      } catch {
        if (active) {
          setError('Could not fetch events. Please try again later.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadEvents();
    return () => {
      active = false;
    };
  }, []);

  async function handleDelete(id) {
    try {
      await deleteEvent(id);
      setEvents((currentEvents) =>
        currentEvents.filter((event) => String(event.id) !== String(id))
      );
      removeFavorite(id);
    } catch {
      setError('Could not delete this event. Please try again.');
    }
  }

  function handleNewEventChange(event) {
    const { name, value } = event.target;
    setCreateError('');
    setCreateSuccess('');
    setNewEvent((currentEvent) => ({ ...currentEvent, [name]: value }));
  }

  async function handleCreateEvent(event) {
    event.preventDefault();
    setCreateError('');
    setCreateSuccess('');
    setIsCreating(true);

    try {
      const createdEvent = await createEvent({
        title: newEvent.title.trim(),
        category: newEvent.category,
        date: newEvent.date,
        venue: newEvent.venue.trim(),
        description: newEvent.description.trim(),
        registrations: 0,
      });

      setEvents((currentEvents) => [...currentEvents, createdEvent]);
      setNewEvent({
        title: '',
        category: 'Tech',
        date: '',
        venue: '',
        description: '',
      });
      setCreateSuccess(`${createdEvent.title} was added to the event list.`);
    } catch (requestError) {
      setCreateError(
        requestError instanceof Error
          ? `${requestError.message}. Make sure the JSON Server is running.`
          : 'Could not add the event. Make sure the JSON Server is running.'
      );
    } finally {
      setIsCreating(false);
    }
  }

  const categories = useMemo(
    () => [...new Set(events.map((event) => event.category).filter(Boolean))].sort(),
    [events]
  );

  const visibleEvents = useMemo(() => {
    const query = search.trim().toLowerCase();
    return events.filter((event) => {
      const isShownInFavorites = !favoritesOnly
        || favoriteIds.includes(String(event.id));
      const matchesSearch = !query
        || `${event.title ?? ''} ${event.venue ?? ''}`.toLowerCase().includes(query);
      const matchesCategory = !category || event.category === category;

      return isShownInFavorites && matchesSearch && matchesCategory;
    });
  }, [category, events, favoriteIds, favoritesOnly, search]);

  function resetFilters() {
    setSearch('');
    setCategory('');
  }

  return (
    <section className="events-section">
      <header className="events-page-header">
        <p className="events-page-eyebrow">
          {favoritesOnly ? 'YOUR SAVED CAMPUS EVENTS' : 'DISCOVER YOUR CAMPUS'}
        </p>
        <h1>{favoritesOnly ? 'Favorite Events' : 'Upcoming Events'}</h1>
        <p>
          {favoritesOnly
            ? 'The events you have saved for later.'
            : 'Find opportunities to learn, connect, and participate.'}
        </p>
      </header>

      {!favoritesOnly && (
        <form className="create-event-form" onSubmit={handleCreateEvent}>
          <div className="create-event-form-header">
            <h2>Add a New Event</h2>
            <p>Fill in the event details below.</p>
          </div>

          <div className="create-event-grid">
            <div className="create-event-field">
              <label htmlFor="new-event-title">Event title <span>*</span></label>
              <Input
                id="new-event-title"
                name="title"
                value={newEvent.title}
                onChange={handleNewEventChange}
                placeholder="e.g. React Workshop"
                required
              />
            </div>

            <div className="create-event-field">
              <label htmlFor="new-event-category">Category <span>*</span></label>
              <Select
                id="new-event-category"
                name="category"
                value={newEvent.category}
                onChange={handleNewEventChange}
                required
              >
                {[...new Set(['Tech', ...categories])].map((eventCategory) => (
                  <option key={eventCategory} value={eventCategory}>
                    {eventCategory.charAt(0).toUpperCase()
                      + eventCategory.slice(1).toLowerCase()}
                  </option>
                ))}
              </Select>
            </div>

            <div className="create-event-field">
              <label htmlFor="new-event-date">Date <span>*</span></label>
              <Input
                id="new-event-date"
                name="date"
                type="date"
                value={newEvent.date}
                onChange={handleNewEventChange}
                required
              />
            </div>

            <div className="create-event-field">
              <label htmlFor="new-event-venue">Venue <span>*</span></label>
              <Input
                id="new-event-venue"
                name="venue"
                value={newEvent.venue}
                onChange={handleNewEventChange}
                placeholder="e.g. Seminar Hall"
                required
              />
            </div>

            <div className="create-event-field create-event-field--full">
              <label htmlFor="new-event-description">
                Description <span>*</span>
              </label>
              <TextArea
                id="new-event-description"
                name="description"
                value={newEvent.description}
                onChange={handleNewEventChange}
                placeholder="Describe the event"
                rows={3}
                required
              />
            </div>
          </div>

          {createError && <p className="create-event-error" role="alert">{createError}</p>}
          {createSuccess && <p className="create-event-success" role="status">{createSuccess}</p>}

          <Button type="submit" disabled={isCreating}>
            {isCreating ? 'Adding Event...' : 'Add Event'}
          </Button>
        </form>
      )}

      {error && <p className="empty-events" role="alert">{error}</p>}

      <div className="events-filters" role="search">
        <Input
          type="search"
          placeholder="Search events by title or venue..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search events by title or venue"
        />
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {categories.map((eventCategory) => (
            <option key={eventCategory} value={eventCategory}>
              {eventCategory}
            </option>
          ))}
        </Select>
        <Button
          variant="secondary"
          className="reset-filters-btn"
          type="button"
          onClick={resetFilters}
        >
          Reset Filters
        </Button>
      </div>

      {loading && <p className="empty-events">Loading events...</p>}

      {!loading && !error && (
        visibleEvents.length > 0 ? (
          <div className="events-grid">
            {visibleEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <p className="empty-events">
            {favoritesOnly && favoriteIds.length === 0
              ? 'You have not added any favorite events yet.'
              : 'No events match your filters.'}
          </p>
        )
      )}
    </section>
  );
}

export default EventList;
