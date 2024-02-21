const nameInput = document.querySelector('.nameInput');
const ageInput = document.querySelector('.ageInput');
const namePara = document.querySelector('.namePara');
const agePara = document.querySelector('.agePara');

const userInfo = JSON.parse(localStorage.getItem('myData')) || {};

if (userInfo.name) {
    namePara.innerHTML = userInfo.name;
}
if (userInfo.age) {
    agePara.innerHTML = userInfo.age;
}

nameInput.addEventListener('input', (e) => {
    userInfo.name = e.target.value;
    localStorage.setItem('myData', JSON.stringify(userInfo));
    namePara.innerHTML = e.target.value;
});
ageInput.addEventListener('input', (e) => {
    userInfo.age = e.target.value;
    localStorage.setItem('myData', JSON.stringify(userInfo));
    agePara.innerHTML = e.target.value;
});
