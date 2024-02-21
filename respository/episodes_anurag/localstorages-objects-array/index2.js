const nameInput = document.querySelector('.nameInput');
const ageInput = document.querySelector('.ageInput');
const namePara = document.querySelector('.namePara');
const agePara = document.querySelector('.agePara');

let parsedName = localStorage.getItem('userName');
let parsedAge = localStorage.getItem('userAge')

if (parsedName) {
    namePara.innerHTML = localStorage.getItem('userName');
    console.log(typeof namePara.innerHTML);
}
nameInput.addEventListener('input', (e) => {
    localStorage.setItem('userName', e.target.value);
    namePara.innerHTML = e.target.value;
})


if (parsedAge) {
    agePara.innerHTML = localStorage.getItem('userAge');
    console.log(typeof agePara.innerHTML);
}
ageInput.addEventListener('input', (e) => {
    localStorage.setItem('userAge', e.target.value);
    agePara.innerHTML = e.target.value;
});