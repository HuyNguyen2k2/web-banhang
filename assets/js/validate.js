function showError(input, text){
    const parent=input.parentElement;
    const error=parent.querySelector('.error');
    const line=parent.querySelector('.line');
    error.innerHTML = text;
    line.classList.add('active');   
}

function showSuccess(input){
    const parent=input.parentElement;
    const error=parent.querySelector('.error');
    const line=parent.querySelector('.line');
    error.innerHTML = '';
    line.classList.remove('active');
}

function checkFill(input){
    if(input.value.trim()==""){
        showError(input, 'Không được để trống thông tin!');
        return false;
    }else{
        showSuccess(input);
        return true;
    }
}