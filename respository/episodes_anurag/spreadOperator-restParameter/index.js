// let container = document.querySelector(".container")

// for (let i = 1; i <= 100; i++) {
//     let images = document.createElement('img');
//     let paragraph = document.createElement('p');
//     images.setAttribute(
//         'src',
//         `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png`
//     );

//     paragraph.innerHTML = i;
//     container.append(images);
//     container.append(paragraph);
// }

let parentContainer = document.querySelector('.container2');
let cardAdder = document.querySelector('.cardAdder');

let count = 0;
cardAdder.addEventListener("click", () => {
    count++
    let newCard = document.createElement('div')
    newCard.classList.add("card")
    newCard.innerHTML = count
    parentContainer.append(newCard)
})