function handleAddCart(){
    const btnShow=document.querySelector('.header__navbar-item-icon:nth-child(4)');

    const list_product=document.querySelectorAll('.body__product-item');

    const wrapProductCart=document.querySelector('.list-product-cart');
    
    const dataCart=JSON.parse(localStorage.getItem('dataCart'));
    
    let dataProduct=dataCart ? dataCart :[];

    function getValueProduct(wrap){
        const listSize=wrap.querySelectorAll('.option-size input');
        let currentSize='S';
        listSize.forEach(input=>{
            if(input.checked){
                currentSize=input.value;
            }
        })
        const valueProduct={
            name:wrap.querySelector('.content-product .name-product').innerHTML,
            price:wrap.querySelector('.content-product .price-product span:nth-child(1)').innerHTML,
            size:currentSize,
            img:wrap.querySelector('.img-product-js').src,
            quantity:wrap.querySelector('.quantity-add-cart').value,
            id:wrap.querySelector('.id-product').value
        }
        return valueProduct;
    }

    function handleDatabase(){
        const cartItem=document.querySelectorAll('.list-product-cart .cart-item');
        cartItem.forEach(items=>{
            items.remove();
        })
        dataProduct.forEach(items=>{
            renderCartItem(items);
        })
        hanldeCartItems();
        showQuantityCart();
        btnShow.click();
    }

    handleDatabase();

    function addCart(){
        list_product.forEach(item => {
            const btn=item.querySelector('.btn-confirm');
            btn.addEventListener('click', e=>{
                const valueProduct=getValueProduct(item);
                const id=valueProduct.id;
                const same=checkSame(id);
                if(same){
                    dataProduct.push(valueProduct);
                    localStorage.setItem('dataCart', JSON.stringify(dataProduct));
                }else{
                    //tạo 1 biến lấy ra sản phẩm đang trùng hiện tại
                    const newData=dataProduct.filter(items=>items.id==id);
                    //Xóa sản phẩm tại vị trí hiện tại
                    dataProduct=dataProduct.filter(items=>items.id!=id);
                    //Tăng số lượng của tại vt thứ 0 của mảng
                    newData[0].quantity++;
                    //Push sản phẩm vào đầu mảng
                    dataProduct.push(newData[0]);
                    //cập nhật lại csdl
                    localStorage.setItem('dataCart', JSON.stringify(dataProduct));
                }
                //gọi lại hàm
                handleDatabase();
            })
        })
    }

    addCart();

    function renderCartItem(value) {
        const wrap=document.createElement('li');
        wrap.className='cart-item';

        const content=`
                    <div class="cart-item-left">
                        <img src="${value.img}" alt="">
                    </div>
                    <div class="cart-item-right">
                        <div class="top">
                            <div class="name-product">${value.name}</div>
                            <div class="close"><ion-icon name="close-outline"></ion-icon></div>
                        </div>
                        <div class="center">
                            <p>Size: </p>
                            <select name="size" id="">
                                <option value="S">${value.size}</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>
                        <div class="bottom">
                            <div class="add-cart form-quantity">
                                <div class="quantity">
                                    <div class="input">
                                        <p>Số lượng:</p>
                                        <input class="number quantity-item" type="number" value="${value.quantity}" min="0">
                                    </div>
                                </div>
                            </div>
                            <div class="price">
                                <span>${value.price}</span>
                                <span>VND</span>
                            </div>
                        </div>
                    </div>
                    <input class="check-confirm" type="checkbox">
                    <input type="hidden" value="${value.id}" class="id-product-cart" >
                    `;
        wrap.innerHTML=content;
        wrapProductCart.prepend(wrap);
    }

    function removeItemCart(id){
        //filter: có chức năng lọc mảng
        
        const arrValue=dataProduct.filter(items=>{
            return items.id!=id;
        })
        return arrValue;
    }

    //Mang quan ly thong tin duoc check
    let arrCheck=[];

    function hanldeCartItems(){
        const listProductCart=document.querySelectorAll('.list-product-cart .cart-item');
        listProductCart.forEach(item=>{
            const close=item.querySelector('.list-product-cart .cart-item .cart-item-right .close ion-icon');
            close.addEventListener('click', e=>{
                const idCart=item.querySelector('.id-product-cart').value;
                dataProduct=removeItemCart(idCart);
                localStorage.setItem('dataCart', JSON.stringify(dataProduct));
                handleDatabase();
            })
        })

        // Btn check
        const btnCheck=document.querySelectorAll('.check-confirm');
        btnCheck.forEach(item=>{
            item.addEventListener('click', e=>{
                const parent=item.parentElement;
                if(item.checked){
                    parent.classList.add('active');
                    const valueItem={
                        id:parent.querySelector('.id-product-cart').value,
                        price:parent.querySelector('.price span').innerHTML,
                        quantity:parent.querySelector('.quantity input').value
                    };
                    arrCheck.push(valueItem);
                    totalPriceProduct();
                    showCheckOut();
                }else{
                    const id=parent.querySelector('.id-product-cart').value;
                    arrCheck=arrCheck.filter(function(items){
                        return items.id!=id;
                    });
                    parent.classList.remove('active');
                    totalPriceProduct();
                    showCheckOut();
                }
            })
        })

    }

    function checkSame(id){
        const same=dataProduct.filter(items=>items.id==id);
        if(same.length>0){
            return false;
        }else{
            return true;
        }
    }

    function totalPriceProduct(){
        let total=0;

        arrCheck.forEach(item=>{
            total+=(item.price*item.quantity);
        })
        const totalcart=document.querySelector('.total-price-cart-js');
        totalcart.innerHTML=total.toLocaleString('vi-VN');
    }

    function showQuantityCart(){
        const quantity=document.querySelector('.quantity-cart');
        quantity.innerHTML=dataProduct.length;
        if(dataProduct.length==0){
            quantity.style.display='none';
        }else{
            quantity.style.display='flex';
        }
    }

    //Nút thanh toán
    function showCheckOut() {
        const btnCheckOut=document.querySelector('.checkout');
        if(arrCheck.length>0){
            btnCheckOut.classList.add('active');
        }else{
            btnCheckOut.classList.remove('active');
        }
    }

}

handleAddCart();
