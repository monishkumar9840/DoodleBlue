// save a favourite colour in local storage and read it after refreshing the page

let favouriteColour = "red";
localStorage.setItem("favouriteColour", favouriteColour);
const SavedColour = localStorage.getItem("favouriteColour");
console.log("Saved Colour:", SavedColour);

// save a temporary step number in session storage
let stepNumber = 3;
sessionStorage.setItem("stepNumber", stepNumber);
const savedStepNumber = sessionStorage.getItem("stepNumber");
console.log("Saved Step Number:", savedStepNumber);

//
