let parentContainer = document.querySelector('.container2');
let cardAdder = document.querySelector('.cardAdder');

let count = 0;
// cardAdder.addEventListener('click', () => {
//     count++;
//     let newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerHTML = count;
//     parentContainer.append(newCard);
// });

// the major differece between mousedown and click is when we do mousedown then the event will fire suddenly and when we say click then the event will fire when the button up.

// * Mouse event
// cardAdder.addEventListener('mousedown', () => {
//     count++;
//     let newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerHTML = count;
//     parentContainer.append(newCard);
// });

// cardAdder.addEventListener('mouseup', () => {
//     count++;
//     let newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerHTML = count;
//     parentContainer.append(newCard);
// });

// cardAdder.addEventListener('mouseenter', () => {
//     count++;
//     let newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerHTML = count;
//     parentContainer.append(newCard);
// });

// cardAdder.addEventListener('mouseleave', () => {
//     count++;
//     let newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerHTML = count;
//     parentContainer.append(newCard);
// });

// cardAdder.addEventListener('mousemove', () => {
//     count++;
//     let newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerHTML = count;
//     parentContainer.append(newCard);
// });

// cardAdder.addEventListener('wheel', () => {
//     count++;
//     let newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerHTML = count;
//     parentContainer.append(newCard);
// });


// * mobile devices events

// cardAdder.addEventListener('touchstart', () => {
//     count++;
//     let newCard = document.createElement('div' );
//     newCard.classList.add('card');
//     newCard.innerHTML = count;
//     parentContainer.append(newCard);
// });


// cardAdder.addEventListener('touchend', () => {
//     count++;
//     let newCard = document.createElement('div' );
//     newCard.classList.add('card');
//     newCard.innerHTML = count;
//     parentContainer.append(newCard);
// });

//  pointer events 

// ! Note:- we should always use teh pointer events because it works for both the deveces such as desktop and mobile devices

cardAdder.addEventListener('pointerenter', () => {
    count++;
    let newCard = document.createElement('div' );
    newCard.classList.add('card');
    newCard.innerHTML = count;
    parentContainer.append(newCard);
});