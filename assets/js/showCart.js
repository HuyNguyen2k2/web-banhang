
const btnShow=document.querySelector('.header__navbar-item-icon:nth-child(4)');

const btnHiden=document.querySelector('.headline-cart ion-icon');

const spaceblock=document.querySelector('.space-block');

const bodyShow=document.querySelector('.body-cart');

btnShow.addEventListener('click', function(){
    bodyShow.classList.add('active');
})

btnHiden.addEventListener('click', function(){
    bodyShow.classList.remove('active');
})

spaceblock.addEventListener('click', function(){
    bodyShow.classList.remove('active');
})

