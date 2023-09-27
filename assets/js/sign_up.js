function validateSignUp(){

    const listInput=document.querySelectorAll('.body_form-signUp-input input');
    const btnSignUp=document.querySelector('.confirm-sign-up');
    const fromSignUp=document.querySelector('.from-sign-up');

    // localStorage
    const data=JSON.parse(localStorage.getItem('sannyAccount'));
    const listAcc=data ? data : [];

    const checkSignUp = {
        name:false,
        mail:false,
        phone:false,
        password:false
    }

    function checkLength(input, min, max){
        if(input.value.trim().length<min){
            showError(input, `Ít nhất ${min} ký tự!`);
            return false;
        }else if(input.value.trim().length>max){
            showError(input, `Tối đa ${max} ký tự!`);
            return false;
        }else{
            showSuccess(input);
            return true;
        }
    }

    function checkEmail(input){
        const regex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!regex.test(input.value)){
            showError(input, 'Sai định dạng email!');
            return false;
        }else{
            showSuccess(input);
            return true;
        }
    }

    function checkPhoneNumber(input){
        const regex=/(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        if(!regex.test(input.value)){
            showError(input, 'Định dạng số điện thoại chưa đúng!');
            return false;
        }else{
            showSuccess(input);
            return true;
        }
    }

    function checkPassword(input_1, input_2){
        if(input_1.value.trim()!=input_2.value.trim()){
            showError(input_2, 'Mật khẩu không trùng khớp!');
            return false;
        }else{
            showSuccess(input_2);
            return true;
        }
    }

    listInput.forEach((items, index)=>{
        items.addEventListener('focusout', e=>{
            const check=checkFill(items);
            if(index==0 && check){
                checkSignUp.name = checkLength(items, 5, 20);
            }
            if(index==1 && check){
                checkSignUp.mail = checkEmail(items);
            }
            if(index==2 && check){
                checkSignUp.phone = checkPhoneNumber(items);
            }
            if(index==3 && check){
                checkSignUp.password = checkLength(items, 5, 20);
            }
            if(index==4 && check){
                checkSignUp.password = checkPassword(listInput[3], items);
            }
        })
    })

    btnSignUp.addEventListener('click', e=>{

        // Check thong tin rong
        listInput.forEach(items=>{
            checkFill(items);
        })
        
        // check điều kiện đúng hết
        if(checkSignUp.name && checkSignUp.mail && checkSignUp.phone && checkSignUp.password){

            //dang ky thanh cong => push len localstore
            const account={
                name:listInput[0].value,
                mail:listInput[1].value,
                phone:listInput[2].value,
                password:listInput[3].value
            }

            listAcc.push(account);
            localStorage.setItem('sannyAccount', JSON.stringify(listAcc));

            alert('Bạn đã đăng ký thành công tài khoản Sanny!');

            fromSignUp.onsubmit=function(){
                return true;
            }
            
        }else{
            alert('Đăng ký không thành công!');
        }

    })

}

validateSignUp();