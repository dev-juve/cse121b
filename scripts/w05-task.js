/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (tempList) => { 
    tempList.forEach(temple => {
        const article = document.createElement("article");
        let header = document.createElement("h3");
        header.textContent = temple.templeName;
        const picture = document.createElement("img");
        picture.setAttribute("src", temple.imageUrl);
        picture.setAttribute("alt", temple.location); 
        article.appendChild(header);
        article.appendChild(picture);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () =>{
    const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"; //"scripts/temples.json";
    const response = await fetch(url);
    templeList = await response.json();
    displayTemples(templeList);
}


/* reset Function */
const reset = () => {templesElement.innerHTML = "";}

/* filterTemples Function */
const filterTemples = (temples) =>{
    reset();
    let filter = document.querySelector("#filtered");
    switch (filter.value) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

