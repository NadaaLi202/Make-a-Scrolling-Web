let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('moun3');
let mountains4 = document.getElementById('moun4');
let river = document.getElementById('river');
let boat= document.getElementById('boat');
let mountains7 = document.getElementById('moun7');
let nounvil = document.querySelector('.nouvil');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value*4 + 'px';
    mountains3.style.top = value*2 + 'px';
    mountains4.style.top = value*1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value*3 + 'px';
    nounvil.style.fontSize = value*2 + 'px';
    if (scrollY >= 67){
        nounvil.style.fontSize = 67 + 'px';
        nounvil.style.position = 'fixed';
        if(scrollY >= 360){
            nounvil.style.display = 'none';
        }else{
            nounvil.style.display = 'block';
        }
        if (scrollY >= 150) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
        }
    }
}








