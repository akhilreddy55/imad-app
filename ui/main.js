console.log('Loaded!');
//change the text of main text div in html
var element=document.getElementById('main-text');
element.innerHTML = 'New Value';

//moving image
var img=document.getElementById('madi');
img.onclick=function(){
    img.style.marginLeft='100px';
};