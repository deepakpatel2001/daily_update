let cardContainer = document.querySelector('.cardContiner');
let input = document.querySelector('input');
let selectCountry = document.querySelector('.selectCountry');
let darkMode = document.querySelector('.dark-mode');
let bodyData = document.querySelector('body');
let themeName = document.querySelector('.themeNameChanger');

darkMode.addEventListener('click', () => {
    bodyData.classList.toggle('bodyData');
    if (themeName.innerHTML === 'Dark Mode') {
        themeName.innerHTML = 'Light Mode';
    } else {
        themeName.innerHTML = 'Dark Mode';
    }
});

async function apiCalling() {
    const mainUrl = 'https://restcountries.com/v3.1/independent?status=true';
    const apiCall = await fetch(mainUrl);
    const res = await apiCall.json();
    res.forEach((country) => {
        countryData(country);
    });

    selectCountry.addEventListener('change', (e) => {
        fetch(`https://restcountries.com/v3.1/region/${selectCountry.value}`)
            .then((res) => {
                return res.json();
            })
            .then((regionData) => {
                if (cardContainer.innerHTML !== '') {
                    cardContainer.innerHTML = '';
                }
                regionData.forEach((regionCountry) => {
                    countryData(regionCountry);
                });
            });
    });

    input.addEventListener('input', (e) => {
        fetch('https://restcountries.com/v3.1/independent?status=true')
            .then((res) => {
                return res.json();
            })
            .then((searchData) => {
                const searchCountryData = searchData.filter((searchCountry) => {
                    return searchCountry.name.common
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase());
                });
                console.log(searchCountryData);
                cardContainer.innerHTML = '';
                searchCountryData.forEach((country) => {
                    countryData(country);
                });
            });
    });

    function countryData(country) {
        const countryCard = document.createElement('div');
        countryCard.className = 'mainCard';
        const anchorTag = document.createElement('a');
        anchorTag.href = `./country.html?name=${country.name.common}`;
        anchorTag.innerHTML = `<div class="imgUpper">
                        <img src="${country.flags.svg}" alt="">
                    </div>
                    <div class="data">
                        <h1>${country.name.common}</h1>
                        <p><b>Population: </b>${country.population.toLocaleString()}</p>
                        <p><b>Region: </b>${country.region}</p>
                        <p><b>Capital: </b> ${country.capital}</p>
                    </div>`;
        countryCard.append(anchorTag);
        cardContainer.append(countryCard);
    }
}

apiCalling();
