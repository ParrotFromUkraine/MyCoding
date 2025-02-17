let noneImg = '/img/01 Images/Placeholder Square.svg';
let imgOnStatsBlock = document.querySelector('.stats-img');
let clickerCounter = 0

imgOnStatsBlock.setAttribute("src",noneImg);

function clickerButton () {
    console.log('Була натыскнута кнопка')
    clickerCounter++
    console.log(clickerCounter)
}