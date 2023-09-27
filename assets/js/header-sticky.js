function stickyHeader() {

    const headerSite=document.querySelector('.header__navbar');
    // const heightSite=88;
    // const heightContact=40;
    const banner=document.querySelector('.banner');
    let space=128;
    window.addEventListener('scroll', e=>{
        if(window.pageYOffset>space){
            // banner.style.marginTop=`${88}px`;
            headerSite.classList.add('sticky');
        }else{
            // banner.style.marginTop=`${0}px`;
            headerSite.classList.remove('sticky');
        }
    })
}

stickyHeader();
