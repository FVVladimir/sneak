
document.querySelector('.btn_start').onclick = startGame;

let sneak = document.querySelector('.sneak');
let coord = sneak.getBoundingClientRect();


document.querySelector('.enter_name').onclick = () => {
    document.querySelector('.curName').innerHTML = 'Name:' + document.querySelector('#curInput').value
};
document.querySelector('.btn_save_resalt').onclick = () => {

    let player = {
        name: 'default',
        score: 0
    }

    player.name = document.querySelector('#curInput').value;

    localStorage.setItem('player', player)

    console.log(player)
};
let mLeft = coord.x;
let mRigt = coord.x;
let mTop = coord.y;
let mDown = coord.y;

document.body.onkeydown = (event) => {
    let direction = event.key;

    // возможно заменить на switch
    if (direction == 'ArrowUp') {
        moveUp();
    } else if (direction == 'ArrowDown') {
        moveDown();
    } else if (direction == 'ArrowRight') {
        moveRight();
    } else if (direction == 'ArrowLeft') {
        moveLeft();
    }
};

function startGame() {
    console.log('let is goooo')
    setInterval(createEat, 3000);
};

function createEat() {
    let gameField = document.querySelector('.game_field')
    let eat = document.createElement('div');
    let eatTop = random(0, 450) + 'px';
    let eatLeft = random(250, 700) + 'px';
    eat.classList.add('eat');
    eat.style.position = 'absolute';
    eat.style.top = eatTop;
    eat.style.left = eatLeft;
    gameField.append(eat);
};

function moveLeft() {
    mLeft--;
    sneak.style.left = `${mLeft}px`;
};

function moveRight() {
    mRigt++;
    sneak.style.left = `${mRigt}px`;
};

function moveUp() {
    mTop--;
    sneak.style.top = `${mTop}px`;
};

function moveDown() {
    mDown++;
    sneak.style.top = `${mDown}px`;
};

function gameOver() {

};

function random(min = 1, max = 500) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function playerName(n) {
    console.log(n)
}
