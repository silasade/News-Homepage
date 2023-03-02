function changeImage(){
    document.getElementById("second").visibility='visible'
    var image = document.getElementById('menu');
    var block1 = document.getElementById("second");
            if (image.src.match("./assets/images/icon-menu.svg")) {
                image.src = "./assets/images/icon-menu-close.svg";
                
                if(block1.style.visibility = "visible")
                {
                
                block1.style.visibility == "hidden";
                
                }
                else
                {
                    block1.style.visibility = "visible";
                }
            }
            else {
                image.src = "./assets/images/icon-menu.svg";
                var block1 = document.getElementById("second");
                if(block1.style.visibility == "hidden")
                {
                block1.style.visibility = "visible";
                }
                else
                {
                block1.style.visibility = "hidden";
                
                }
            }
            if(window.innerWidth>600){
                window.open("./index.html")
                console.log("uhu")
            }
   
}