const button = document.getElementById("loadBtn");
const message = document.getElementById("message");
const nameList = document.getElementById("nameList");

function loadNames() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Monish", "Kavin", "Abadon", "Hari", "Krish"]);
        }, 1000);
    });
}

button.addEventListener("click", () => {
    message.textContent = "Loading...";
    nameList.innerHTML = "";

    loadNames().then((names) => {
        message.textContent = "Names loaded successfully!";

        names.forEach((name) => {
            const li = document.createElement("li");
            li.textContent = name;
            nameList.appendChild(li);
        });
    });
});