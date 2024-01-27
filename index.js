function generateRandomColor(){

    var red = Math.floor(Math.random() *256);
    var green = Math.floor(Math.random() *256);
    var blue = Math.floor(Math.random() *256);
    return color = "rgb("+ red + "," + green + "," + blue +")";
}


 
 document.querySelector("button").addEventListener("click" , function(){
    var randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
 })