const randomDogs = document.querySelector('.randomDogs');
const images = document.querySelector('img');

randomDogs.addEventListener('click', () => {
    let xml = new XMLHttpRequest();

    console.log(xml);

    xml.addEventListener('load', () => {
        console.log(JSON.parse(xml.response).data.first_name);
    });

    xml.open('GET', 'https://reqres.in/api/users/1?delay=5', false);
    xml.send();
});
