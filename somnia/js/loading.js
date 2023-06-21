
const load = document.querySelector('.loading_message');
const clickload = document.querySelector('.Logo');
window.addEventListener('DOMContentLoaded', function()
{
    console.log('test');
    load.style.visibility = 'visible';
});

window.onload = () =>{
    console.log('투명화');
    load.style.visibility = 'hidden';
}

clickload.addEventListener('click', function(){
    console.log("로딩중");
    load.style.visibility = 'visible';
    clickload.style.visibility = 'hidden';
    setTimeout(()=>location.href="Story.html",3500);
})
