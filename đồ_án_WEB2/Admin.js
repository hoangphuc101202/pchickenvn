var showUserName = document.querySelector('.show-userName')
var settingUser = document.querySelector('.setting-user')
var userNameSettingUser = document.querySelector('.userName-settingUser')
var buttonQuyenAdmin = document.querySelector('.button-quyenAdmin')
userArray = JSON.parse(localStorage.getItem('user'))
function show_settingUser(){
    if(showUserName.innerHTML == userArray[0].tenHienThi){
        settingUser.classList.toggle('show-setting-user')
        buttonQuyenAdmin.classList.toggle('show-button-quyenAdmin')
    }else{
        settingUser.classList.toggle('show-setting-user')
    }
}
// hover vào sẽ hiện ra menu gồm quyền admin và đăng xuất
userNameSettingUser.onmouseover = function(){
    show_settingUser()
}
userNameSettingUser.onmouseout = function(){
    show_settingUser()
}


var buttonQuyenAdmin = document.getElementById('button-quyenAdmin')
var modalAdmin = document.querySelector('.modal-admin')
var modalAdminIconReturn = document.querySelector('.modal-admin-icon-return')
// Ẩn hiện quyền admin
function anHienQuyenAdmin(){
        modalAdmin.classList.toggle('modal-admin-show')
}
buttonQuyenAdmin.addEventListener('click', anHienQuyenAdmin)
modalAdminIconReturn.addEventListener('click', anHienQuyenAdmin)


var parentShowListUser = document.querySelector('.parent-showListUser')
var buttonQuanLyKhachHang = document.getElementById('button-quanLyKhachHang')
//Ẩn hiện danh sách người dùng
function anHienDanhSachNguoiDung(){
    parentShowListUser.classList.add('show-parent-showListUser')
    listProductsWrap.classList.remove('show')
}
buttonQuanLyKhachHang.addEventListener('click', anHienDanhSachNguoiDung)

var buttonQuanLySanPham = document.getElementById('button-quanLySanPham')
var listProductsWrap = document.querySelector('.list-products-wrap')
// ẩn hiện form quản lý sản phẩm
function anHienDanhSachSanPham(){
    parentShowListUser.classList.remove('show-parent-showListUser')
    listProductsWrap.classList.add('show')
}
buttonQuanLySanPham.addEventListener('click', anHienDanhSachSanPham)







