// roll dice function
//preload the six images first
var face0=new Image()
face0.src="../img/roll1.svg"
var face1=new Image()
face1.src="../img/roll2.svg"
var face2=new Image()
face2.src="../img/roll3.svg"
var face3=new Image()
face3.src="../img/roll4.svg"
var face4=new Image()
face4.src="../img/roll5.svg"
var face5=new Image()
face5.src="../img/roll6.svg"

function rolldice(){
//create a random integer between 0 and 5
var randomdice=Math.round(Math.random()*5)
document.images["dice"].src=eval("face"+randomdice+".src")
}