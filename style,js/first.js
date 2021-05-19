const body = document.getElementsByTagName('body')[0];
const logo = document.getElementsByClassName('logo')[0];
const loginC = document.getElementsByClassName('loginC')[0];
const logo1 = document.getElementById('logo1');
const h1 = document.getElementsByTagName('h1')[0];

const kakaoi = document.getElementById('kakaoicon');
const naveri = document.getElementById('navericon');
const facebooki = document.getElementById('facebookicon');
const googlei = document.getElementById('googleicon');

// LoginC_PopUp
body.addEventListener('click',function(){
    loginC.style.bottom = "0";
    loginC.style.transition = "1s";
    logo1.style.bottom = "30vh";
    logo1.style.transition = "1.2s";
    h1.style.opacity = "0";
    h1.style.transition = "1s";
})

document.getElementById('loginBB').addEventListener('click',function(){ location.href = "./second.html"});

kakaoi.addEventListener('click',function(){
    location.href = "https://accounts.kakao.com/login?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount%2Finfo";
})
naveri.addEventListener('click',function(){
    location.href = "https://nid.naver.com/nidlogin.login";
})
facebooki.addEventListener('click',function(){
    location.href = "https://m.facebook.com/?locale2=ko_KR";
})
googlei.addEventListener('click',function(){
    location.href = "https://myaccount.google.com/?utm_source=sign_in_no_continue";
})