const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnCheckpoint = $('.checkpoint')
const btnSignup = $('.signup')

btnSignup.addEventListener('click', () => {
    $('#signup').classList.add('show')
    $('#checkpoint').classList.add('hide')
    $('.cover').classList.add('change')
    btnCheckpoint.classList.remove('active')
    btnSignup.classList.add('active')
})

btnCheckpoint.addEventListener('click', () => {
    $('#signup').classList.remove('show')
    $('#checkpoint').classList.remove('hide')
    $('.cover').classList.remove('change')
    btnCheckpoint.classList.add('active')
    btnSignup.classList.remove('active')
})

//----------------------validate-----------------------
// select checkpoint
const userNameCheck = $('#username')
const btnCheck = $('.check')

// alert
const alert = $('.alert')
const alertBtnClose = $('.closeAlert')
const alertText = $('.alert--message')

// points
const pointsDetail = $('.points')
const btnClosePoints = $('.closePoint')

//details
const phoneEmail = $('#phoneEmail')
const nameUser = $('#nameUser')
const dayOfBirth = $('#dayOfBirth')
const gender = $('#gender')
const points = $('#points')

showAlert = (txt) => {
    alert.classList.add('show')
    alertText.innerHTML = txt
    $('.container').style.pointerEvents = 'none'
    alertBtnClose.addEventListener('click', () => {
        alert.classList.remove('show')
        $('.container').style.pointerEvents = 'all'
    })
}

showPoints = () => {
    pointsDetail.classList.add('show')
    $('.container').style.pointerEvents = 'none'
    btnClosePoints.addEventListener('click', () => {
        pointsDetail.classList.remove('show')
        $('.container').style.pointerEvents = 'all'
    })
}

var regExp1 = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
var regExp2 = /^(0[234][0-9]{8}|1[89]00[0-9]{4})$/;

// check validate
btnCheck.addEventListener('click', () => {
    if (userNameCheck.value == "") {
        showAlert("Bạn nhập đi !")
        return false;
    }
    if (regExp1.test(userNameCheck.value) == false && regExp2.test(userNameCheck.value) == false) {
        showAlert("Emai hoặc SĐT không hợp lệ !")
        return false;
    }
    else {
        userNameCheck.value = null
        showPoints()
        return true;
    }
})

// select signup
const userName = $('#userName')
const name = $('#Name')
const birthDay = $('#birthDay')
const btnRegister = $('.registering')

// signup validate
btnRegister.addEventListener('click', () => {
    console.log(typeof userName.value)
    if (userName.value == "" || name.value == "") {
        showAlert("Bạn điền thông tin đê !")
        return false
    }
    if (regExp1.test(userName.value) == false && regExp2.test(userName.value) == false) {
        showAlert("Email hoặc SĐT không hợp lệ !")
        return false
    }
    else {
        showAlert("Bạn đã đăng ký thành công !")
        userName.value = null
        name.value = null
        birthDay.value = null
        $('#signup').classList.remove('show')
        $('#checkpoint').classList.remove('hide')
        $('.cover').classList.remove('change')
        btnCheckpoint.classList.add('active')
        btnSignup.classList.remove('active')
        return true
    }
})