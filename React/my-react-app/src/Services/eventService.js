const API_URL = "http://localhost:3000/events";
const REGISTRATIONS_URL = "http://localhost:3000/registrations";

// GET ALL
export async function getAllEvents() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Could not load events (${response.status})`);
  }
  return response.json();
}

export async function createEvent(event) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });

  if (!response.ok) {
    throw new Error(`Could not create event (${response.status})`);
  }

  return response.json();
}

// GET ID
export async function getEventById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Could not load event (${response.status})`);
  }
  return response.json();
}

// DELETE
export async function deleteEvent(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Could not delete event (${response.status})`);
  }
  return response.json();
}

export async function createRegistration(registration) {
  const response = await fetch(REGISTRATIONS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registration),
  });

  if (!response.ok) {
    throw new Error(`Could not save registration (${response.status})`);
  }

  return response.json();
}

export async function getAllRegistrations() {
  const response = await fetch(REGISTRATIONS_URL);
  if (!response.ok) {
    throw new Error(`Could not load registrations (${response.status})`);
  }
  return response.json();
}
