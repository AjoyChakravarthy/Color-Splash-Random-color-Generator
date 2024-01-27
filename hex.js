function generateRandomColorHex (){

    var red = Math.floor(Math.random() *256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random() *256);
//convert decimal to hexadecimal
    var redHex = red.toString(16).padStart(2, '0');
    var greenHex = green.toString(16).padStart(2, '0');
    var blueHex = blue.toString(16).padStart(2, '0');
    var colorHex = "#"+ redHex + greenHex + blueHex ;
    return colorHex;

}

document.querySelector("button").addEventListener("click", function(){
    var colorHex = generateRandomColorHex();
    document.body.style.backgroundColor=colorHex;
    
    document.querySelector("button").textContent = "COLOR : "+colorHex;

})
