/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Juvenson Elizaire",
    photo: "images/Juvenson-removebg-preview.png",
    favoriteFoods: ["Pwason Fri", "Bannann Peze ak Pikliz", "Diri, Sos Pwa ak Legim", "Diri Kole ak Sos Somon"],
    hobbies: ["Reading", "Going out", "Body Building", "Listening to music", "Singing and dancing"],
    placesLived: []
};

/* Populate Profile Object with placesLived objects */
myProfile.placesLived.push(
    {
        place: "Port-au-Prince, Ouest",
        length: "25 years",
    },
    {
        place: "Delmas, Ouest",
        length: "1 year",
    },
    {
        place: "Léogâne, Ouest",
        length: "6 months",
    },
    {
        place: "Saint-Marc, Artibonite",
        length: "3 months",
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = placeLived.place;
    dd.textContent = placeLived.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});
