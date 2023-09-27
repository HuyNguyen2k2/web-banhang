
// const btnShow=document.querySelector('.action .add-cart');

// const btnClose=document.querySelector('.point-close');

// const bodyShow=document.querySelector('.select-add-cart');

// btnShow.addEventListener('click', function(){
//     bodyShow.classList.add('active');
// })

// btnClose.addEventListener('click', function(){
//     bodyShow.classList.remove('active');
// })

const product=document.querySelectorAll('.body__product-item');

product.forEach(element => {
    const btnShow=element.querySelector('.action .add-cart');
    const btnHiden=element.querySelector('.point-close');
    const bodyProduct=element.querySelector('.select-add-cart');
    btnShow.addEventListener('click', function(){
        bodyProduct.classList.add('active');
    })
    btnHiden.addEventListener('click', function(){
        bodyProduct.classList.remove('active');
    })
});

