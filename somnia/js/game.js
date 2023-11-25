let before = document.querySelector("#before");
let after = document.querySelector("#after");
let imgchange = document.querySelector("#bigImages>img");

before.addEventListener("click",function(){
    console.log("click");
    let num = imgchange.getAttribute("class");
    if (num==1){
        num = 10;
    }
    else{
        num--;
    }
    nsrc = "../webproimg/ui" + num + ".png";
    imgchange.setAttribute("src",nsrc);
    imgchange.setAttribute("class",num);
});


after.addEventListener("click",function(){
    console.log("click");
    let num = imgchange.getAttribute("class");
    if (num==10){
        num = 1;
    }
    else{
        num++;
    }
    nsrc = "../webproimg/ui" + num + ".png";
    imgchange.setAttribute("src",nsrc);
    imgchange.setAttribute("class",num);
});
