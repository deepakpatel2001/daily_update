const randomDogs = document.querySelector('.randomDogs');
const images = document.querySelector('img');

randomDogs.addEventListener('click', () => {
    let xml = new XMLHttpRequest();

    console.log(xml);

    xml.addEventListener('load', () => {
        console.log(JSON.parse(xml.response).data.first_name);
    });

    xml.open('GET', 'https://reqres.in/api/users/1?delay=5');
    xml.send();

    console.log('jhello'); // if the open third parameter is false then the jhello will print after getting the data from the api, and another thing is if the third parameter is true then the jhello will print first and then teh api data will be print`
});
