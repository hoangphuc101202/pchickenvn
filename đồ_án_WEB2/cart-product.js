// const cartShow = document.querySelector('.fa-solid')
// // console.log(cartShow)
// cartShow.addEventListener("click",function(){
//     document.querySelector('.cart')
// })




var trangSanPham = document.getElementById("products-list")
let dsSanPham = JSON.parse(localStorage.getItem('PRODUCTS'))

//--------------------------------------------------------------------------
//--------------------Xử lý hiển thị số nút chuyển trang--------------------
//--------------------------------------------------------------------------
var soTrang = Math.ceil(dsSanPham.length/16)
var pagesContainer = document.getElementsByClassName('pagination')[0];
var pageRender = ''
for(let i = 0; i < soTrang; i++){
    pageRender += `<a href="" stt="${i}" class="page">${i+1}</a>`
}
pagesContainer.innerHTML = pageRender



function hienThiSanPham(dsSanPham){
    let dsSP = dsSanPham.map(function(sanPham){
        return`
        <div class="product-card">
        <input type="hidden" class="product-id" id="${sanPham.ma}">
        <img class="product-image" src=${sanPham.hinhAnh} alt="">
        <h2 class="product-price">${sanPham.gia}d</h2>
        <h1 class="product-name">${sanPham.name}</h1>
        <h1 class="product-discription" style="display: none;">${sanPham.moTa}</h1>
        <div class="product-control">
                <button class="btn btn-muahang">Thêm vào giỏ hàng</button>
            </div>
        </div>
        `
    })
    let ketqua = dsSP.join('');
    trangSanPham.innerHTML = ketqua;
    
    // Xử lý trang trí viền sản phẩm( xóa viền phải của từng sản phẩm)
    const productlist = document.getElementsByClassName('product-card');
    for(let i = 0; i < productlist.length; i++){
        if( (i+1) % 4 == 0){
            productlist[i].style.borderRight = 'none';
        }
    }
}

console.log(dsSanPham[0].ma);
var pages = document.querySelectorAll('.page');

function xuLyHieuUngChuyenTrang(event){
    for(let i = 0; i < pages.length; i++){
        pages[i].classList.remove('active');
    }
    event.target.classList.add('active')
    window.scroll({
        top: 743,
        behavior: "smooth"
    })
}
//Xử lý ấn nút chuyển trang
for(let i = 0; i < pages.length; i++){
    pages[i].onclick = function(e){
        e.preventDefault();
        if(!e.target.classList.contains('active')){
            xuLyHieuUngChuyenTrang(e);
            let stt = e.target.getAttribute('stt');
            let diemBatDau = stt * 16;
            let kq = dsSanPham.slice(diemBatDau,diemBatDau+16);
            hienThiSanPham(kq);
            xulyHienThiChiTietSP(); 
            cartBtn = document.querySelectorAll('.btn-muahang')
            
            xuLyThemSpVaoCart(cartBtn)
        }
    }
}
// Hiển thị trang sản phẩm đầu tiên
// hienThiSanPham(dsSanPham.slice(0,16));
pages[0].click();



//-----------------------------------------------------------------------------------------------
//--------------------------------Xử lý giở hàng-------------------------------------------------
//-----------------------------------------------------------------------------------------------


var cartItem = {
    products : [],
    total : 0
}
var cartBtn = document.querySelectorAll('.btn-muahang')

// console.log(cartBtn)
function xuLyThemSpVaoCart(cartBtns){
    cartBtns.forEach(function(button) {
        button.addEventListener("click",function(event){{
            var cartBtnItem = event.target
            var product = cartBtnItem.parentElement.parentElement
            
            var productId = product.querySelector('.product-id').id
            var productImg = product.querySelector('.product-image').src
            var productName = product.querySelector('.product-name').innerText
            var productPrice = product.querySelector('.product-price').innerText
            addcart(productImg, productName, productPrice, productId)
            
            hieuUng()
        }})
        
    });
}

xuLyThemSpVaoCart(cartBtn)

function addcart(productImg,productName,productPrice,productId){
    var quantity = 1;
    // khi sản phẩm có số id trùng nhau tăng số lượng sản phẩm lên
    if(checkProductExsist(productId)){
        
        var productNumber = document.querySelector('#productID-'+productId);
        var quantity = productNumber.value;
        
        var productNumber2 = parseInt(quantity) + parseInt(1);
        productNumber.value = productNumber2;

        for(var i = 0;i< cartItem.products.length;i++)
        if(cartItem.products[i].id == productId){
            cartItem.products[i].quantity = productNumber2
        }
        
    }
    // khi không chọn sp trùng nhau
    else{
        var addtr = document.createElement('tr')
        var trContent =`
        <tr class="cart-product">
        <td style="display:flex; align-items:center"><img style=" width: 100px; height: 100px;" src="${productImg}" alt="">${productName}</td>
        <td><p><span>${productPrice}</span><sup>đ</sup></p></td>
        <td><input class="cart-product-quantity" data="${productId}" id="productID-${productId}" type="number" value="${quantity}" min="1" ></td>
        <td class="delete-product" id="${productId}" >Xóa</td>
        </tr>
        `
        addtr.innerHTML = trContent
        var cartTable = document.querySelector('.body-cart')
        cartTable.append(addtr)
        cartItem.products.push({
            id: productId,
            image : productImg,
            name : productName,
            price : productPrice,
            quantity : 1
        })
        
    }
    
    cartItem.total = parseInt(cartItem.total) + parseInt(productPrice) ;
    // tăng số lượng sản phảm trong giỏ hàng
    const updateQuantity = document.querySelectorAll('.cart-product-quantity')
    updateQuantity.forEach(function(button,index) {
        button.addEventListener("click",function(event){{
            var cartBtnItem = event.target
            var proId = this.getAttribute('data');
            var inpvalue = document.querySelector('#productID-'+proId);
            var quantity = inpvalue.value;
            
        for(var i = 0;i< cartItem.products.length;i++)
        if(cartItem.products[i].id == proId){
            // khi giảm số lượng sản phảm hoặc số lượng sản phảm bằng 1
            if(cartItem.products[i].quantity > quantity || quantity == 1 && cartItem.products[i].quantity == 2){
                // tổng tiền hiện tại - 1 sản phẩm giảm
                cartItem.total = parseInt(cartItem.total) - parseInt(cartItem.products[i].price);
            }
            // khi tăng số lượng sản phẩm
            else if(cartItem.products[i].quantity < quantity){
                cartItem.total = parseInt(cartItem.total) + parseInt(cartItem.products[i].price);
            }
            
            cartItem.products[i].quantity = quantity;
            break;
            
        }
        document.querySelector('.total-order').innerText = cartItem.total + '.000';
    }})
});


document.querySelector('.total-order').innerText = cartItem.total + '.000';


const deleteBtn = document.querySelectorAll('.delete-product')
deleteBtn.forEach(function(button,index) {
    button.addEventListener("click",function(event){{
        var cartBtnItem = event.target
        var product = cartBtnItem
        product.parentElement.remove();
        removeCartItem(product.id)
    }})
    
    
});

}
// check id sản phẩm
const checkProductExsist = (productId) => {
    for(var i = 0;i< cartItem.products.length;i++)
    if(cartItem.products[i].id == productId) return true;
    return false;
}


const removeCartItem = (id) => {
    for(var i = 0;i< cartItem.products.length;i++)
    if(cartItem.products[i].id == id){
            cartItem.total = parseInt(cartItem.total) - parseInt(cartItem.products[i].price)*parseInt(cartItem.products[i].quantity);
            cartItem.products.splice(i, 1);
            document.querySelector('.total-order').innerText = cartItem.total + '.000';
            break;
        }
        
}
   


// tổng tiền
function carttotal(){
    var total = 0;
    for(var i = 0; i<cartItem.products.length;i++){
         total += (cartItem.products[i].price * cartItem.products[i].quantity);
    }
    document.querySelector('.total-order').innerText = total + '.000';
 
}



var btnCart = document.querySelector('.parent-icon-cart')
var modalCart = document.querySelector('.modal-cart')
var closeiconCart = document.querySelector('.close-cart')
// ẩn hiện form cart
function showFormCart(){
    modalCart.classList.toggle('show-cart')
}
// ấn nút đăng ký sẽ hiện ra form cart
btnCart.onclick = function(){
    showFormCart()
}
// ấn vùng ngoài form cart form sẽ close
modalCart.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        showFormCart()
    }
})
// ấn close form cart 
closeiconCart.addEventListener('click', showFormCart)
 

// Hiệu ứng 

function hieuUng(){
    btnCart.style.scale = 1.3
    setTimeout(()=>{
        btnCart.style.scale = 1
    },200)
}
