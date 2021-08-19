const help = document.getElementsByClassName("help");
for(let i = 0; i<help.length;i++){
    // console.log(i)
    help[i].addEventListener('click',function(){
//alert("Thankss")
this.classList.toggle("rich");
let box  = this.nextElementSibling;
//alert(box);

if(box.style.display==="block"){
   box.style.display="none";
}else{
    box.style.display="block"; 
}

    });
}