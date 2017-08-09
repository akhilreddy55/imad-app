console.log('Loaded!');
//change the text of main text div in html
var element=document.getElementById('main-text');

element.innerHTML = 'New Value';

//moving image
var img=document.getElementById('madi');

function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
};