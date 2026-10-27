import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import EventList from "./components/EventList/EventList";
import Registration from "./components/Registration/Registration";
import Footer from "./components/Footer/Footer";

import { initialEvents } from "./data/events";

import "./App.css";


function App() {

  const [events, setEvents] = useState(initialEvents);

  const [selectedEvent, setSelectedEvent] = useState(null);


  /*
    Register button

    If event is already registered:
    cancel registration

    If event is not registered:
    open registration form
  */

  const handleRegister = (event) => {

    if (event.isRegistered) {

      setEvents((previousEvents) =>
        previousEvents.map((item) =>
          item.id === event.id
            ? {
                ...item,
                isRegistered: false,
                registrations:
                  Math.max(0, item.registrations - 1),
              }
            : item
        )
      );

      return;
    }


    setSelectedEvent(event);
  };


  /*
    Submit Registration
  */

  const handleRegistrationSubmit = (eventId) => {

    setEvents((previousEvents) =>
      previousEvents.map((event) =>
        event.id === eventId
          ? {
              ...event,
              isRegistered: true,
              registrations: event.registrations + 1,
            }
          : event
      )
    );


    setSelectedEvent(null);

    alert("Registration successful!");
  };


  /*
    Favorite
  */

  const handleFavorite = (eventId) => {

    setEvents((previousEvents) =>
      previousEvents.map((event) =>
        event.id === eventId
          ? {
              ...event,
              isFavorite: !event.isFavorite,
            }
          : event
      )
    );
  };


  /*
    Remove Event
  */

  const handleRemove = (eventId) => {

    setEvents((previousEvents) =>
      previousEvents.filter(
        (event) => event.id !== eventId
      )
    );
  };


  /*
    Back to Events
  */

  const handleBackToEvents = () => {
    setSelectedEvent(null);
  };


  return (
    <>

      <Navbar />


      {selectedEvent ? (

        <Registration
          event={selectedEvent}
          onSubmit={handleRegistrationSubmit}
          onBack={handleBackToEvents}
        />

      ) : (

        <>

          <Hero />

          <EventList
            events={events}
            onRegister={handleRegister}
            onFavorite={handleFavorite}
            onRemove={handleRemove}
          />

        </>

      )}


      <Footer />

    </>
  );
}


export default App;