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
        const picture = document.createElement("img")
        picture.setAttribute("src", temple.imageURL);
        picture.setAttribute("alt", temple.location); 
        article.appendChild(header);
        article.appendChild(picture);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () =>{
    const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
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
    switch (filter)
    {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.include("Utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter(temple => !temple.location.include("Utah")));
            break;
        case "old":
            displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", ()=> {filterTemples(templeList)});