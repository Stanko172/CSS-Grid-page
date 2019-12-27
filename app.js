var dropdown = document.querySelector("nav .dropdown");
var button = document.querySelector(".menu");

function menu(){
    button.classList.toggle("change");

    if(dropdown.style.display == "grid"){
        dropdown.style.display = "none";
    }else{
        dropdown.style.display = "grid";
        
    }
};

