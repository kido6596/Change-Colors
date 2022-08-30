const colorBtn = document.querySelector('.colorBtn');
const bodyBg = document.querySelector('body');

const colors =['#f5d3d3', '#f5e2c6', '#f5f5c6', '#def5d5', '#d5f5ee', '#d5ddf5', '#e9d5f5'];

colorBtn.addEventListener('click',changeColor);

function changeColor(){
    //bodyBg.style.backgroundColor = colors[2];
    let random = Math.floor(Math.random()*colors.length)
    bodyBg.style.backgroundColor = colors[random];
}