//CSS

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    margin: auto;
}
.row{
    align-content: center;
}
h2{
  margin-top: 150px;
  padding: 10px 20px;
    width: auto;
    height: 50px;
    background-color: aqua;
    text-align: center;
    font-size: 30px;
}
button{
    margin: 30px;
    width: 150px;
    height: 50px;
    font-size: 25px;
    font-weight: 800;
    border-radius: 50px;
    color: black;
    background-color: white;
}


//JS


var Hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let hexcolor = "#";
for(let i=0; i<6; i++){
    hexcolor+= Hex[getRandomNumber()];
}
color.textContent = hexcolor;
document.body.style.backgroundColor = hexcolor;
});
function getRandomNumber(){
    return Math.floor(Math.random()*Hex.length);
}



// HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Hex-color.generator.css">
    <title>Hex-color-generator</title>
</head>
<body>
    <div class="container">
        <div class="row">
           <div><h2>Background color:
               <span class="color"></span>        
            </h2></div>
            <button class="btn btn-hero" id="btn">Click me</button>
        </div>
    </div>
    <script src="Hex-color-generator.js"></script>
</body>
</html>
