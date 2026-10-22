// Task 1 Update status using textContent
document.getElementById("statusButton").addEventListener("click", function () {
    document.getElementById("status").textContent = "Button clicked successfully!";
});

// Task 2 Live character count
document.getElementById("message").addEventListener("input", function () {
    document.getElementById("count").textContent = this.value.length;
});

// Task 3 & 4 Registration form and validation
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const feedback = document.getElementById("feedback");

    if (!name || !email) {
        feedback.textContent = "Error: Please fill in both name and email.";
        feedback.className = "error";
    } else {
        feedback.textContent = "Registration successful!";
        feedback.className = "success";
    }
});

// Challenge Render three event cards
const eventList = [
    { title: "Ethical Hacking Workshop", date: "October 22, 2026" },
    { title: "Cloud Computing Seminar", date: "October 25, 2026" },
    { title: "Cyber Security Event", date: "November 18, 2026" }
];

const eventsContainer = document.getElementById("events");

eventList.forEach(function (event, index) {
    const card = document.createElement("div");
    card.className = "event-card";

    const title = document.createElement("h3");
    title.textContent = event.title;

    const date = document.createElement("p");
    date.textContent = event.date;

    const button = document.createElement("button");
    button.textContent = "Join Event";
    button.dataset.index = index;

    card.append(title, date, button);
    eventsContainer.appendChild(card);
});

// One parent listener handles every Join button (event delegation)
eventsContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        const selectedEvent = eventList[event.target.dataset.index];
        document.getElementById("eventStatus").textContent =
            "You joined: " + selectedEvent.title;
    }
});