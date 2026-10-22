// 1 Change heading text using ID
document.getElementById("page-heading").textContent =
    "Upcoming Campus Events";

// 2 Add highlight class to all event cards
document.querySelectorAll(".event-card").forEach(card => {
    card.classList.add("highlight");
});

// 3 Read input value and display using textContent
document.getElementById("display-btn").addEventListener("click", () => {
    const name = document.getElementById("name-input").value;
    document.getElementById("output").textContent = name;
});