console.log('Loaded!');
//change the text of main text div in html
var element=document.getElementById('main-text');

element.innerHTML = 'New Value';

//moving image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};