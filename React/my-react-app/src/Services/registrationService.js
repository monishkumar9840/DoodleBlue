const API_URL = "http://localhost:3000/registrations";

async function request(url, options) {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    return response.status === 204 ? null : response.json();
}

export function getRegistrations() {
    return request(API_URL);
}

export function createRegistration(registration) {
    return request(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registration),
    });
}

export function deleteRegistration(id) {
    return request(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
}