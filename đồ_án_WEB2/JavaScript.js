// -----------------------------------------------------------------------------
// ---------------------------Đăng ký-------------------------------------------
// -----------------------------------------------------------------------------
var buttonDangKy = document.querySelector('.register-btn')
var modalsignUp = document.querySelector('.modal-signUp')
var closeiconsignUp = document.querySelector('.close-icon-signUp')
// ẩn hiện form đăng ký
function showFormDangKy(){
    modalsignUp.classList.toggle('show-signUp')
}
// ấn nút đăng ký sẽ hiện ra form đăng kí
buttonDangKy.onclick = function(){
    showFormDangKy()
}
// ấn vùng ngoài form đăng kí form sẽ close
modalsignUp.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        showFormDangKy()
    }
})
// ấn close form đăng kí 
closeiconsignUp.addEventListener('click', showFormDangKy)
// danh sách user
var userArray = []
//tài khoản admin mặc định
function taiKhoanAdmin(){
    if(localStorage.getItem('user') == null){
        var user = {
            tenHienThi: 'Trịnh Hoàng Phú',
            taiKhoan: 'admin',
            matKhau: '123123123',
            soDienThoai: '0123456789',
            diaChi: 'ĐẠI HỌC SÀI GÒN'
        }
        userArray.push(user)
        localStorage.setItem('user', JSON.stringify(userArray))
    }
}
//đăng ký người dùng
function dangKyNguoiDung(){
    userArray = JSON.parse(localStorage.getItem('user'))
    var tenHienThi = document.getElementById('dangKy-tenHienThi')
    var taiKhoan = document.getElementById('dangKy-taiKhoan')
    var matKhau = document.getElementById('dangKy-matKhau')
    var nhapLaiMatKhau = document.getElementById('dangKy-nhapLaiMatKhau')
    var soDienThoai = document.getElementById('dangKy-soDienThoai')
    var diaChi = document.getElementById('dangKy-diaChi')

    if(dieuKienDangKyNguoiDung(tenHienThi, taiKhoan, matKhau, nhapLaiMatKhau, soDienThoai, diaChi)){
        var user = {
            tenHienThi: tenHienThi.value,
            taiKhoan: taiKhoan.value,
            matKhau: matKhau.value,
            nhapLaiMatKhau: nhapLaiMatKhau.value,
            soDienThoai: soDienThoai.value,
            diaChi: diaChi.value
        }
    userArray.push(user)
    localStorage.setItem('user', JSON.stringify(userArray))
    tenHienThi.value = ''
    taiKhoan.value = ''
    matKhau.value = ''
    nhapLaiMatKhau.value = ''
    soDienThoai.value = ''
    diaChi.value = ''
    showListUser()
    showFormDangKy()
    alert('Đăng ký tài khoản thành công')
    }
}
//điều kiện đăng ký tài khoản người dùng
function dieuKienDangKyNguoiDung(tenHienThi, taiKhoan, matkhau, nhapLaiMatKhau, soDienThoai, diaChi){
    userArray = JSON.parse(localStorage.getItem('user'))
    var a = false;
    for(let i = 0; i < userArray.length; i++){
        if(userArray[i].taiKhoan === taiKhoan.value){
            a = true
            if(a){
                alert('tài khoản đã tồn tại')
                taiKhoan.focus()
                return false
            }
        }
    }if(tenHienThi.value.length < 1){
        alert('Tên hiển thị không được bỏ trống')
        return false
    }if(taiKhoan.value.indexOf(' ') >= 0){
        alert('tài khoản không được có khoảng trắng')
        return false
    }if(matkhau.value.length <= 8 || matkhau.value.length >= 16){
        alert('Mật khẩu phải từ 8 đến 16 kí tự')
        return false
    }if(matkhau.value != nhapLaiMatKhau.value){
        alert('nhập lại mật khẩu sai')
        return false
    }if(isNaN(soDienThoai.value) || soDienThoai.value.length < 10 && soDienThoai.value.length <= 11){
        alert('nhập sai số điện thoại')
        return false
    }if(diaChi.value.length < 1){
        alert('Địa chỉ không được bỏ trống')
        return false
    }return true
}
// cứ reset lại web là tài khoản admin sẽ được tạo
taiKhoanAdmin()
// thực hiện sự kiện click của button đăng ký trong form đăng ký
document.getElementById('button-dangKy').addEventListener('click', dangKyNguoiDung)





// --------------------------------------------------------------------------------------------
// ---------------------------Hiện danh sách người dùng lên màn hình---------------------------
// --------------------------------------------------------------------------------------------
function showListUser(){
    userArray = JSON.parse(localStorage.getItem('user'));
    var showListUser = document.getElementById('showListUser');
    var tr = `
            <tr>
                <th class="show-info-capital">ID</th>
                <th class="show-info-capital">Tên hiển thị</th>
                <th class="show-info-capital">Tài khoản</th>
                <th class="show-info-capital">Mật khẩu</th>
                <th class="show-info-capital">Số điện thoại</th>
                <th class="show-info-capital">Địa chỉ</th>
                <th class="show-info-capital">Sửa</th>
                <th class="show-info-capital">Xóa</th>
            </tr>`;
    for(let i = 0; i < userArray.length; i++){
        tr += `
            <tr>
                <td class="show-info">${i}</td>
                <td class="show-info">${userArray[i].tenHienThi}</td>
                <td class="show-info">${userArray[i].taiKhoan}</td>
                <td class="show-info">${userArray[i].matKhau}</td>
                <td class="show-info">${userArray[i].soDienThoai}</td>
                <td class="show-info">${userArray[i].diaChi}</td>
                <td class="show-info">
                    <input class="edit-delete" type="button" value="Sửa" onclick="editUser(${i})">
                </td>   
                <td class="show-info">
                    <input class="edit-delete" type="button" value="Delete" onclick="deleteUser(${i})">
                </td>
            </tr>`;
    }
    showListUser.innerHTML = tr;
}
// Xóa người dùng
function deleteUser(index){
    if(hoiTruocKhiXoaUser() == true){
        userArray = JSON.parse(localStorage.getItem('user'));
        userArray.splice(index, 1);
        localStorage.setItem('user',JSON.stringify(userArray));
        showListUser();
    }
}
//hỏi trước khi xóa
function hoiTruocKhiXoaUser(){
    var hoiTruocKhiXoa = confirm('Bạn có chắc muốn xóa người dùng này chứ?')
    if (hoiTruocKhiXoa)
        return true;
    else
      return false;
}





// Tắt mở hiện thị mật khẩu
const pass = document.querySelector('.pass')
const show = document.getElementById('show-btn')
show.onclick = (()=>{
    if(pass.type === 'password'){
        pass.type = 'text'
    }
    else{
        pass.type = 'password'
    }
})
// Đăng nhập
const loginBtn = document.querySelector('.login-btn')
const modal = document.querySelector('.modal')
const iconClose = document.querySelector('.close-icon')
const loginPage = document.querySelector('.login-modal')
function toggleModal(){
    modal.classList.toggle('hide')
}
modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget) {
        toggleModal()
    }
})
loginBtn.addEventListener('click',toggleModal)
iconClose.addEventListener('click',toggleModal)


// ------------------------------------------------------------------------
// ------------------------đăng nhập đăng xuất-----------------------------
// ------------------------------------------------------------------------
//điều kiện đăng nhập người dùng
var isLogin = false;

function dieuKienDangNhapNguoiDung(){
    userArray = JSON.parse(localStorage.getItem('user'))
    var loginAccount = document.getElementById('login-account')
    var loginPassword = document.getElementById('login-password')
    var showUserName = document.querySelector('.show-userName')
    var a = false
    //Đăng nhập tài khoản admin
    if(loginAccount.value === userArray[0].taiKhoan && loginPassword.value === userArray[0].matKhau){
        loginAccount.value = ''
        loginPassword.value = ''
        toggleModal()
        hide_showUserName()
        showUserName.innerHTML = `${userArray[0].tenHienThi}`
        a = true
        isLogin = true;
        localStorage.setItem('isLogin',JSON.stringify(isLogin));
        return
    //Đăng nhập tài khoản khách hàng
    }else if(a == false){
        for(let i = 1 ; i < userArray.length; i++){
            if(loginAccount.value === userArray[i].taiKhoan && loginPassword.value === userArray[i].matKhau){
                loginAccount.value = ''
                loginPassword.value = ''
                toggleModal()
                hide_showUserName()
                showUserName.innerHTML = `${userArray[i].tenHienThi}`
                a = true
                isLogin = true;
                localStorage.setItem('isLogin',JSON.stringify(isLogin));
                return
            }
        }
    }
    alert('Đăng nhập không thành công')
}
// click button đăng nhập trong form đăng nhập thì dieuKienDangNhapNguoiDung sẽ được hoạt động
document.getElementById('button-dangNhap').addEventListener('click', dieuKienDangNhapNguoiDung)
// Ẩn hiện người dùng
var loginMenu = document.querySelector('.login-menu')
var userNameCart = document.querySelector('.userName-cart')
function hide_showUserName(){
    loginMenu.classList.toggle('login-menu-show')
    userNameCart.classList.toggle('userName-cart-show')
}
//đăng xuất tài khoản admin
var buttonDangXuat = document.getElementById('button-dangXuat')
function dangXuatAdmin(){
    hide_showUserName()
    isLogin = false;
    localStorage.setItem('isLogin',JSON.stringify(isLogin));
}
buttonDangXuat.addEventListener('click', dangXuatAdmin)


// -------------------------------------------------------------------------------------
// -----------------------------Thêm tài khoản bằng admin-------------------------------
// -------------------------------------------------------------------------------------
function themNguoiDungBangAdmin(){
    userArray = JSON.parse(localStorage.getItem('user'))
    var tenHienThi = document.getElementById('admin-create-tenHienThi')
    var taiKhoan = document.getElementById('admin-create-taiKhoan')
    var matKhau = document.getElementById('admin-create-matKhau')
    var nhapLaiMatKhau = document.getElementById('admin-create-nhapLaiMatKhau')
    var soDienThoai = document.getElementById('admin-create-soDienThoai')
    var diaChi = document.getElementById('admin-create-diaChi')

    if(dieuKienDangKyNguoiDung(tenHienThi, taiKhoan, matKhau, nhapLaiMatKhau, soDienThoai, diaChi)){
        var user = {
            tenHienThi: tenHienThi.value,
            taiKhoan: taiKhoan.value,
            matKhau: matKhau.value,
            nhapLaiMatKhau: nhapLaiMatKhau.value,
            soDienThoai: soDienThoai.value,
            diaChi: diaChi.value
        }
    userArray.push(user)
    localStorage.setItem('user', JSON.stringify(userArray))
    removeInput()
    showListUser()
    alert('Thêm tài khoản thành công')
    }
}
document.getElementById('admin-button-create-themUser').addEventListener('click', themNguoiDungBangAdmin)


//Xóa thông tin đã nhập
function removeInput(){
    document.getElementById('admin-create-tenHienThi').value = ''
    document.getElementById('admin-create-taiKhoan').value = ''
    document.getElementById('admin-create-matKhau').value = ''
    document.getElementById('admin-create-nhapLaiMatKhau').value = ''
    document.getElementById('admin-create-soDienThoai').value = ''
    document.getElementById('admin-create-diaChi').value = ''

}
// chỉnh sửa thông tin người dùng 
function editUser(index){
    var userArray = JSON.parse(localStorage.getItem('user'));
    document.getElementById('admin-create-tenHienThi').value = userArray[index].tenHienThi;
    document.getElementById('admin-create-taiKhoan').value = userArray[index].taiKhoan;
    document.getElementById('admin-create-matKhau').value = userArray[index].matKhau;
    document.getElementById('admin-create-nhapLaiMatKhau').value = userArray[index].nhapLaiMatKhau;
    document.getElementById('admin-create-soDienThoai').value = userArray[index].soDienThoai;
    document.getElementById('admin-create-diaChi').value = userArray[index].diaChi;

    document.getElementById('index').value = index;

    document.getElementById('admin-button-create-themUser').style.display = 'none';
    document.getElementById('admin-button-create-chinhUser').style.display = 'inline-block'; 
}
// chỉnh sửa thông tin người dùng 
function changeUser(){
    userArray = JSON.parse(localStorage.getItem('user'));
    var index = document.getElementById('index').value;
    userArray[index] = {
        tenHienThi: document.getElementById('admin-create-tenHienThi').value,
        taiKhoan: document.getElementById('admin-create-taiKhoan').value,
        matKhau: document.getElementById('admin-create-matKhau').value,
        nhapLaiMatKhau: document.getElementById('admin-create-nhapLaiMatKhau').value,
        soDienThoai: document.getElementById('admin-create-soDienThoai').value,
        diaChi: document.getElementById('admin-create-diaChi').value,
    }
    localStorage.setItem('user',JSON.stringify(userArray));
    document.getElementById('admin-button-create-themUser').style.display = 'inline-block';
    document.getElementById('admin-button-create-chinhUser').style.display = 'none';
    alert('Chỉnh sửa thông tin người dùng thành công')
    removeInput()
    showListUser();
}



function scrollMenu(){
    window.scroll({
        top: 743,
        behavior: "smooth"
    })
}


