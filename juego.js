let y = 0;
let x = 0;

let personaje = document.getElementById('personaje');
let obstacles = document.querySelectorAll('.obstacle');

function mover(event) {
    if (event.key === 'd') {
        x += 50;
        personaje.style.left = x + 'px';
        personaje.src = '/personaje/p-right.png';
    }
    if (event.key === 'a') {
        x -= 50;
        personaje.style.left = x + 'px';
        personaje.src = '/personaje/p-left.png';
    }
    if (event.key === 's') {
        y += 50;
        personaje.style.top = y + 'px';
    }
    if (event.key === 'w') {
        y -= 50;
        personaje.style.top = y + 'px';
    }

    
    for (let obstacle of obstacles) {
        if (collision(personaje, obstacle)) {
           
            if (event.key === 'd') x -= 50;
            if (event.key === 'a') x += 50;
            if (event.key === 's') y -= 50;
            if (event.key === 'w') y += 50;

            personaje.style.left = x + 'px';
            personaje.style.top = y + 'px';
        }
    }
}


function collision(element1, element2) {
    let rect1 = element1.getBoundingClientRect();
    let rect2 = element2.getBoundingClientRect();

    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}

window.onkeydown = mover;