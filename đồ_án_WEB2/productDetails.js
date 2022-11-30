//---------------------------------------------------------------------
//-----------------------Xu ly hien thi San Pham-----------------------
//---------------------------------------------------------------------

function xulyHienThiChiTietSP(){
    // An hien chi tiet san pham 
    var buttonProducts = document.querySelectorAll('.product-image')
    // an vao hinh anh se hien chi tiet san pham
    buttonProducts.forEach(function(buttonProduct){
    buttonProduct.onclick = function(){
        let tenSanPham = buttonProduct.parentElement.querySelector('.product-name').textContent;
        let giaSP = buttonProduct.parentElement.querySelector('.product-price').textContent;
        let moTaSP = buttonProduct.parentElement.querySelector('.product-discription').textContent;
        let anhSP = buttonProduct.parentElement.querySelector('.product-image').src;
        modalproduct.innerHTML = `
        <div class="product-details">
        <img class="product-details-image" src="${anhSP}" alt="">
        <ul class="product-details-info">
        <li><h1>${tenSanPham}</h1></li>
        <li><h2>${giaSP}</h2></li>
        <li>${moTaSP}</li>
        
        </ul>
        </div>
        `
        showProduct()
    }
})
}
function showProduct(){
    modalproduct.classList.toggle('show-product')
}
var modalproduct = document.querySelector('.product-details-modal')
modalproduct.addEventListener('click',function(s){
if(s.target == s.currentTarget){
    showProduct()
}
})