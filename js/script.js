var navigation = document.getElementById('navigation');
var navshow = document.getElementById('navshow');
var side = document.getElementById('side');
var sideshow = document.getElementById('sideshow');
function navHide(){
    navigation.style.left = '-200px';
    navshow.innerHTML = "&raquo;";
}
function navShow(){
    navigation.style.left = '0';
    navshow.innerHTML = "&laquo;";
}
function sideHide(){
    side.style.left = '-200px';
    sideshow.innerHTML = "&raquo;";
}
function sideShow(){
    side.style.left = '0';
    sideshow.innerHTML = "&laquo;";
}