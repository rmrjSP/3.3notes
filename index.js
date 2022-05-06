const cardList = document.querySelector('.cardList');
const score = document.getElementById('score');
const image = document.querySelector('image');
const restartButton = document.getElementById('restart')
let points = 0;
buildBoard();

let interval = setInterval(function(){
    addCard(cardList.children.length + 1)
}, 2000);

function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard(){
    for (let i=0; i<12; i++){
        addCard('starter');
    }
}

cardList.addEventListener('click', function(e){
    console.log(e.target);
    if (e.target.matches('.cardList')){
        return
    }
    if (e.target.classList.contains('active')){
        points +=1;
        score.innerHTML = `score ${points}`;

    }
    if (e.target.classList.contains('inactive')) {
        points += 2;
        score.innerHTML = `score ${points}`;
    }
    if (e.target.classList.contains('active')){
        e.target.classList.remove('active');

        e.target.classList.add('inactive');
        points +=1;
        return
    }
    e.target.remove();
    let children = cardList.children;
    if (children.length < 1){
        clearInterval(interval);
        score.innerHTML = `total score ${points}`;
        image(src="https://pngimg.com/uploads/confetti/confetti_PNG86993.png");
    }

    restartButton.addEventListener('click', function(e){
        location.reload();
    })

});