const slide=document.querySelector('.header__slider-item');  //trả về 1 biến 

const wrapSlide=document.querySelector('.header__slider');

const btnNext=document.querySelector('.header__slider-control-right');

const btnPre=document.querySelector('.header__slider-control-left');

// var ttl;

btnNext.addEventListener('click', function(e){
    const list=document.querySelectorAll('.header__slider-item');
    //list[0,1,2]
    // ttl=0;
    wrapSlide.append(list[0]);
})

btnPre.addEventListener('click', function(e){
    const list=document.querySelectorAll('.header__slider-item');
    //list[0,1,2]
    // ttl=0;
    wrapSlide.prepend(list[list.length-1]);
})

setInterval (function(){
    btnNext.click();
}, 4000);

// setInterval (function(){
//     ttl++;
//     if(ttl>3){
//         btnNext.click(); 
//     }
    
// }, 2000);