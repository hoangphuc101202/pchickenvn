let products = []
function danhSachSanPham(){
    if(localStorage.getItem('PRODUCTS') == null){
        products = 
        [
            {
                ma: "1",
                hinhAnh: "./assets/image/garan1.png",
                name:"Combo gà rán 1",
                gia:199,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
        ,
            {
                ma: "2",
                hinhAnh: "./assets/image/garan2.png",
                name:"Combo gà rán 2",
                gia:199,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,   
            {
                ma: "3",
                hinhAnh: "./assets/image/garan3.png",
                name:"Cánh gà chiên giòn",
                gia:35,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "4",
                hinhAnh: "./assets/image/garan4.png",
                name:"Đùi gà chiên giòn",
                gia:30,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "5",
                hinhAnh: "./assets/image/garan5.png",
                name:"Combo gà rán 3",
                gia:199,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "6",
                hinhAnh: "./assets/image/garan6.png",
                name:"Đùi và má đùi gà",
                gia:70,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "7",
                hinhAnh: "./assets/image/garan7.png",
                name:"Khoai tây chiên",
                gia:20,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "8",
                hinhAnh: "./assets/image/garan8.png",
                name:"Combo gà rán 4",
                gia:199,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "9",
                hinhAnh: "./assets/image/garan9.png",
                name:"Combo gà rán 5",
                gia:199,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "10",
                hinhAnh: "./assets/image/garan10.png",
                name:"Combo gà rán 6",
                gia:350,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "11",
                hinhAnh: "./assets/image/garan11.png",
                name:"Cánh gà phô mai",
                gia:40,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "12",
                hinhAnh: "./assets/image/garan12.png",
                name:"Gà lăn bột giòn   ",
                gia:50,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "13",
                hinhAnh: "./assets/image/garan13.png",
                name:"Gà nguyên con lăn bột",
                gia:199,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "14",
                hinhAnh: "./assets/image/garan14.png",
                name:"Sụn gà",
                gia:40,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "15",
                hinhAnh: "./assets/image/garan15.png",
                name:"Combo gà đặc biệt",
                gia:199,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "16",
                hinhAnh: "./assets/image/garan16.png",
                name:"Gà sốt cay",
                gia:85,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "17",
                hinhAnh: "./assets/image/garan17.png",
                name:"Đùi và miếng gà",
                gia:70,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "18",
                hinhAnh: "./assets/image/garan18.png",
                name:"Sụn gà lăn trứng muối",
                gia:35,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "19",
                hinhAnh: "./assets/image/garan19.png",
                name:"Đùi và miếng gà 2",
                gia:70,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "20",
                hinhAnh: "./assets/image/garan20.png",
                name:"Sụn gà sốt chua ngọt",
                gia:35,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "21",
                hinhAnh: "./assets/image/garan21.png",
                name:"Đùi và miếng gà 3",
                gia:70,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "22",
                hinhAnh: "./assets/image/garan22.png",
                name:"Đùi và miếng gà cay",
                gia:72,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "23",
                hinhAnh: "./assets/image/garan23.png",
                name:"Combo đùi và cánh gà",
                gia:150,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "24",
                hinhAnh: "./assets/image/garan24.png",
                name:" Cánh gà sốt chua ngọt",
                gia:70,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "25",
                hinhAnh: "./assets/image/garan25.png",
                name:"Combo gà rán 7",
                gia:199,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "26",
                hinhAnh: "./assets/image/garan26.png",
                name:"Combo gà rán trứng muối",
                gia:150,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "27",
                hinhAnh: "./assets/image/garan27.png",
                name:"Quả sa kê chiên giòn",
                gia:20,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "28",
                hinhAnh: "./assets/image/garan28.png",
                name:"Sụn gà phô mai",
                gia:35,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "29",
                hinhAnh: "./assets/image/garan29.png",
                name:"Combo gà rán 8",
                gia:160,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "30",
                hinhAnh: "./assets/image/garan30.png",
                name:"Combo Hamburger",
                gia:70,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "31",
                hinhAnh: "./assets/image/garan31.png",
                name:"Má đùi gà trứng muối",
                gia:80,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "32",
                hinhAnh: "./assets/image/garan32.png",
                name:"Đùi và miếng gà giòn",
                gia:70,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "33",
                hinhAnh: "./assets/image/garan33.png",
                name:"Combo cơm gà giòn",
                gia:199,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "34",
                hinhAnh: "./assets/image/garan34.jpg",
                name:"Combo cơm gà giòn",
                gia:199,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "35",
                hinhAnh: "./assets/image/garan35.jpg",
                name:"Cơm gà giòn kèm nước",
                gia:99,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "36",
                hinhAnh: "./assets/image/garan36.png",
                name:"Bánh tart phô mai",
                gia:30,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "37",
                hinhAnh: "./assets/image/coca.png",
                name:"Coca",
                gia:20,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "38",
                hinhAnh: "./assets/image/sprite.png",
                name:"Sprite",
                gia:20,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "39",
                hinhAnh: "./assets/image/fanta.png",
                name:"Fanta",
                gia:20,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
            
        ,
            {
                ma: "40",
                hinhAnh: "./assets/image/dasani.png",
                name:"Nước suối Dasani",
                gia:10,
                moTa: "2 miếng gà rán sốt cay / 2 miếng gà không xương/ 1 Hamberger bò / 2 Coca size M",
                soLuong: 100
            }
        ]
        localStorage.setItem('PRODUCTS',JSON.stringify(products));
        localStorage.setItem('PRODUCTS',JSON.stringify(products));
    }
}
danhSachSanPham()





// thêm sản phẩm
function themSanPham(){
    products = JSON.parse(localStorage.getItem('PRODUCTS'))
    var hinhSanPham = document.getElementById('hinhSanPham')
    var tenSanPham = document.getElementById('tenSanPham')
    var giaSanPham = document.getElementById('giaSanPham')
    var moTaSanPham = document.getElementById('moTaSanPham')
    var soLuongSanPham = document.getElementById('soLuongSanPham')
    var sanPham = {
        hinhAnh: hinhSanPham.value,
        name: tenSanPham.value,
        gia: giaSanPham.value,
        moTa: moTaSanPham.value,
        soLuong: soLuongSanPham.value
    }
    products.push(sanPham)
    localStorage.setItem('PRODUCTS', JSON.stringify(products))
    alert('Thêm sản phẩm mới thành công')
    removeInputProduct()
    hienDanhSachSanPham()
}
document.getElementById('button-themSanPham').addEventListener('click', themSanPham)



// Xóa sản phẩm
function deleteProduct(index){
    if(hoiTruocKhiXoaSanPham() == true){
        products = JSON.parse(localStorage.getItem('PRODUCTS'));
        products.splice(index, 1);
        localStorage.setItem('PRODUCTS',JSON.stringify(products));
        hienDanhSachSanPham()
    }
}
//hỏi trước khi xóa
function hoiTruocKhiXoaSanPham(){
    var hoiTruocKhiXoa = confirm('Bạn có chắc muốn xóa sản phẩm này chứ?')
    if (hoiTruocKhiXoa)
        return true;
    else
      return false;
}
// mỗi lần thêm sản phẩm thành công thì các input products sẽ được xóa
function removeInputProduct(){

    document.getElementById('hinhSanPham').value = ''
    document.getElementById('tenSanPham').value = ''
    document.getElementById('giaSanPham').value = ''
    document.getElementById('moTaSanPham').value = ''
    document.getElementById('soLuongSanPham').value = ''
}

//hiện danh sách sản phẩm lên màn hình 
function hienDanhSachSanPham(){
    products = JSON.parse(localStorage.getItem('PRODUCTS'));
    var showListProducts = document.querySelector('.show-list-products');
    var tr = `
        <tr>
           
            <th class="show-info-products-capital">Mã</th>
            <th class="show-info-products-capital">Hình</th>
            <th class="show-info-products-capital">Tên</th>
            <th class="show-info-products-capital">Giá</th>
            <th class="show-info-products-capital">Mô tả</th>
            <th class="show-info-products-capital">Số lượng</th>
            <th class="show-info-products-capital">Sửa</th>
            <th class="show-info-products-capital">Xóa</th>
        </tr>`;
    for(let i = 0; i < products.length; i++){
        products[i].ma = i+1;
        tr += `
            <tr>
               
                <td class="show-info-products" style="text-align:center">${products[i].ma}</td>
                <td class="show-info-products">${products[i].hinhAnh}</td>
                <td class="show-info-products">${products[i].name}</td>
                <td class="show-info-products">${products[i].gia}.000đ</td>
                <td class="show-info-products">${products[i].moTa}</td>
                <td class="show-info-products">${products[i].soLuong}</td>
                <td class="show-info">
                    <input class="edit-delete" type="button" value="Sửa" onclick="editProducts(${i})">
                </td>   
                <td class="show-info">
                    <input class="edit-delete" type="button" value="Delete" onclick="deleteProduct(${i})">
                </td>
            </tr>`;
    }
    showListProducts.innerHTML = tr;
}




// chỉnh sửa thông tin sản phẩm
function editProducts(indexProduct){
    console.log(indexProduct)
    products = JSON.parse(localStorage.getItem('PRODUCTS'));
    document.getElementById('hinhSanPham').value = products[indexProduct].hinhAnh;
    document.getElementById('tenSanPham').value = products[indexProduct].name;
    document.getElementById('giaSanPham').value = products[indexProduct].gia;
    document.getElementById('moTaSanPham').value = products[indexProduct].moTa;
    document.getElementById('soLuongSanPham').value = products[indexProduct].soLuong;

    document.getElementById('indexProduct').value = indexProduct;

    document.getElementById('button-themSanPham').style.display = 'none';
    document.getElementById('button-chinhSuaSanPham').style.display = 'inline-block'; 
}
// chỉnh sửa thông tin sản phẩm 
function changeProducts(){
    products = JSON.parse(localStorage.getItem('PRODUCTS'));
    var indexProduct = document.getElementById('indexProduct').value;
    products[indexProduct] = {
        hinhAnh: document.getElementById('hinhSanPham').value,
        name: document.getElementById('tenSanPham').value,
        gia: document.getElementById('giaSanPham').value,
        moTa: document.getElementById('moTaSanPham').value,
        soLuong: document.getElementById('soLuongSanPham').value,
    }
    localStorage.setItem('PRODUCTS',JSON.stringify(products));
    document.getElementById('button-themSanPham').style.display = 'inline-block'
    document.getElementById('button-chinhSuaSanPham').style.display = 'none'
    alert('Chỉnh sửa thông tin sản phẩm thành công')
    removeInputProduct()
    hienDanhSachSanPham()
}




















