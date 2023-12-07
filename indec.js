let show = document.getElementsByClassName("share");
let boxCard = document.getElementById("social-media");
let content = document.getElementById("content");

for(let i=0;i<2;i++){
    show[i].addEventListener('click', function(e){
        if(boxCard.style.display=="block"){
            boxCard.style.display="none";
            show[i].style.backgroundColor="hsl(210, 46%, 95%)";
        }else{
            boxCard.style.display="block";
            show[i].style.backgroundColor="gainsboro";
        }
    })
}