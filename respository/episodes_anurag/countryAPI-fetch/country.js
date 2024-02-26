const urlParams = new URLSearchParams(location.search).get('name');
const parentContainer = document.querySelector('.all-Data');
const backBtn = document.querySelector('.back-button');
const flag = document.querySelector('img');
const countryName = document.querySelector('.countryName');
const nativeName = document.querySelector('.native-name');
const population = document.querySelector('.population');
const region = document.querySelector('.region');
const subRegion = document.querySelector('.sub-region');
const capital = document.querySelector('.capital');
const tld = document.querySelector('.tld');
const currencies = document.querySelector('.currencies');
const lang = document.querySelector('.lang');
const borders = document.querySelector('.borderClassAnchor');
const body = document.querySelector('body');
const themeChanger = document.querySelector('.themeNameChanger')

themeChanger.addEventListener('click', () => {
    body.classList.toggle('bodyData');
    if (themeChanger.innerHTML === 'Dark Mode') {
        themeChanger.innerHTML = 'Light Mode';
    } else {
        themeChanger.innerHTML = 'Dark Mode';
    }
})


backBtn.addEventListener('click', () => {
    window.history.back(1);
});

async function myNewData() {
    const url = `https://restcountries.com/v3.1/name/${urlParams}?fullText=true`;
    const fetchData = await fetch(url);
    const res = await fetchData.json();
    res.forEach((data) => {
        flag.src = `${data.flags.svg}`;
        countryName.innerHTML = `${data.name.common}`;
        population.innerHTML = `${data.population}`;
        region.innerHTML = `${data.region}`;
        subRegion.innerHTML = `${data.subregion}`;
        capital.innerHTML = `${data.capital}`;
        tld.innerHTML = `${Object.values(data.tld).join(', ')}`;
        nativeName.innerHTML = `${
            Object.values(data.name.nativeName)[0].official
        }`;
        currencies.innerHTML = `${Object.values(data.currencies)[0].name}`;
        lang.innerHTML = `${Object.values(data.languages).join(', ')}`;
        data.borders.forEach((border) => {
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((response) => response.json())
            .then((countryBorder) => {
                console.log(countryBorder.forEach((borderData) => {
                    let achor = document.createElement('a');
                    achor.className = 'borderValue';
                    achor.innerHTML = borderData.name.common;
                    achor.addEventListener('click', () => {
                        achor.href = `./country.html?name=${borderData.name.common}`;
                    })
                    borders.append(achor);
                }));
                
            } )
            
        });
    });
}

myNewData();
