/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Juvenson Elizaire";
let currentYear = "2024";
const profilePicture = "images/Juvenson-removebg-preview.png";


/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile of ${fullName}`);




/* Step 5 - Array */
let favFoods = ["Diri Sos Pwa ak Legim", "Taso", "Pwason Fri", "Bannann Peze ak Pikliz"];
foodElement.innerHTML = `${favFoods}`;

let singleFavFood = "Diri Blanc Sos Pwa ak Lalo";
favFoods.push(singleFavFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;





