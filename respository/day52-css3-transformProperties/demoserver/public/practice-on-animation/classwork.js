var container = document.querySelector('.container');

var angle = 0;

var rotator = () => {
    angle += 5;
    container.style.transform = `rotate(${angle}deg)`;
}

setInterval(() => {
    if(angle == 360){
        angle = 0;
    }
    rotator()
}, 100)