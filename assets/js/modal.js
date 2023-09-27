function modal() {

    const show = document.querySelectorAll('.body__product-item .body__product-item-top img');
    const hidden = document.querySelector('.modal-close');
    const bodyShow = document.querySelector('.modal');

    console.log(show)

    show.forEach(input=>{
        input.addEventListener('click', e=>{
            bodyShow.classList.add('active');
        })
    })

    hidden.addEventListener('click', e=>{
        bodyShow.classList.remove('active');
    })

}

modal();