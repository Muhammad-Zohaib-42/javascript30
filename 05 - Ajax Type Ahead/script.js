const storageData = localStorage.getItem("countriesData");

const endPoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let countriesData = storageData ? JSON.parse(storageData) : [];

if (countriesData.length < 1) {
    fetch(endPoint)
    .then(response => response.json())
    .then(data => countriesData = data)
}

const input = document.querySelector("input");
const list = document.querySelector(".list");

function findMatches(wordToMatch, countriesData) {
    return countriesData.filter(countryData => countryData.city.toLowerCase().includes(wordToMatch.toLowerCase()) || countryData.state.toLowerCase().includes(wordToMatch.toLowerCase())).slice(0, 12)
}

function displayMatches(e) {
    const filteredCountries = findMatches(e.target.value, countriesData);

    const html = filteredCountries.map(filterCountry => {
        const city = filterCountry.city.toLowerCase().replace(e.target.value.toLowerCase(), `<span class="hl">${e.target.value}</span>`)
        const state = filterCountry.state.toLowerCase().replace(e.target.value.toLowerCase(), `<span class="hl">${e.target.value}</span>`); 
        const population = Number(filterCountry.population).toLocaleString('en-PK');

        return `
            <li>
                <p>
                    <span>${city}</span>,
                    <span>${state}</span>
                </p>
                <p>${population}</p>
            </li>
        `;
    }).join("");

    list.innerHTML = html;
}

// input.addEventListener("input", displayMatches)
let isThrottling = false;

input.addEventListener("input", e => {
    if (isThrottling) return;

    isThrottling = true;

    displayMatches(e)

    setTimeout(() => {
        isThrottling = false
    }, 500);
})