//*tracker functions*
// initializing function
function start() {
	 document.getElementById('player1').style.display = "block";
	 document.getElementById('player2').style.display = "block";
	 document.getElementById('player3').style.display = "block";
	 document.getElementById('player4').style.display = "block";
	 document.getElementById('player5').style.display = "block";
	 document.getElementById('player6').style.display = "block";
	var life = document.getElementById('life').value;
	var token = document.getElementById('token').value;
	 document.getElementById('1').value = life;
	 document.getElementById('2').value = life;
	 document.getElementById('3').value = life;
	 document.getElementById('4').value = life;
	 document.getElementById('5').value = life;
	 document.getElementById('6').value = life;
	 document.getElementById('1c').value = token;
	 document.getElementById('2c').value = token;
	 document.getElementById('3c').value = token;
	 document.getElementById('4c').value = token;
	 document.getElementById('5c').value = token;
	 document.getElementById('6c').value = token;
	 hide();
}

function startDice() {
	var dice = document.getElementById('dice').value;
	if (dice == 6) {
	 document.getElementById('dice1').style.display = "block";
	 document.getElementById('dice2').style.display = "block";
	 document.getElementById('dice3').style.display = "block";
	 document.getElementById('dice4').style.display = "block";
	 document.getElementById('dice5').style.display = "block";
	 document.getElementById('dice6').style.display = "block";
	}
	if (dice == 5) {
	 document.getElementById('dice1').style.display = "block";
	 document.getElementById('dice2').style.display = "block";
	 document.getElementById('dice3').style.display = "block";
	 document.getElementById('dice4').style.display = "block";
	 document.getElementById('dice5').style.display = "block";
	 document.getElementById('dice6').style.display = "none";
	}
	if (dice == 4) {
	 document.getElementById('dice1').style.display = "block";
	 document.getElementById('dice2').style.display = "block";
	 document.getElementById('dice3').style.display = "block";
	 document.getElementById('dice4').style.display = "block";
	 document.getElementById('dice5').style.display = "none";
	 document.getElementById('dice6').style.display = "none";	
	}
	if (dice == 3) {
	 document.getElementById('dice1').style.display = "block";
	 document.getElementById('dice2').style.display = "block";
	 document.getElementById('dice3').style.display = "block";
	 document.getElementById('dice4').style.display = "none";
	 document.getElementById('dice5').style.display = "none";
	 document.getElementById('dice6').style.display = "none";	
	}
	if (dice == 2) {
	 document.getElementById('dice1').style.display = "block";
	 document.getElementById('dice2').style.display = "block";
	 document.getElementById('dice3').style.display = "none";
	 document.getElementById('dice4').style.display = "none";
	 document.getElementById('dice5').style.display = "none";
	 document.getElementById('dice6').style.display = "none";	
	}
	if (dice == 1) {
	 document.getElementById('dice1').style.display = "block";
	 document.getElementById('dice2').style.display = "none";
	 document.getElementById('dice3').style.display = "none";
	 document.getElementById('dice4').style.display = "none";
	 document.getElementById('dice5').style.display = "none";
	 document.getElementById('dice6').style.display = "none";	
	}
}

// calculation functions
function s(v, player) { document.getElementById(player).value = v }
function a(v, player) { s(eval(document.getElementById(player).value += v), player) }
// token calculation functions
function t(v, playerC) { document.getElementById(playerC).value = v }
function aT(v, playerC) { t(eval(document.getElementById(playerC).value += v), playerC) }

// hides players not in use
function hide() {
	var players = document.getElementById('players').value;
	if (players == 1) {
	 document.getElementById('player1').style.display = "block";
	 document.getElementById('player2').style.display = "none";
	 document.getElementById('player3').style.display = "none";
	 document.getElementById('player4').style.display = "none";
	 document.getElementById('player5').style.display = "none";
	 document.getElementById('player6').style.display = "none";
	}
	if (players == 2) {
	 document.getElementById('player1').style.display = "block";
	 document.getElementById('player2').style.display = "block";
	 document.getElementById('player3').style.display = "none";
	 document.getElementById('player4').style.display = "none";
	 document.getElementById('player5').style.display = "none";
	 document.getElementById('player6').style.display = "none";
	}
	if (players == 3) {
	 document.getElementById('player1').style.display = "block";
	 document.getElementById('player2').style.display = "block";
	 document.getElementById('player3').style.display = "block";
	 document.getElementById('player4').style.display = "none";
	 document.getElementById('player5').style.display = "none";
	 document.getElementById('player6').style.display = "none";
	}
	if (players == 4) {
	 document.getElementById('player1').style.display = "block";
	 document.getElementById('player2').style.display = "block";
	 document.getElementById('player3').style.display = "block";
	 document.getElementById('player4').style.display = "block";
	 document.getElementById('player5').style.display = "none";
	 document.getElementById('player6').style.display = "none";
	}
	if (players == 5) {
	 document.getElementById('player1').style.display = "block";
	 document.getElementById('player2').style.display = "block";
	 document.getElementById('player3').style.display = "block";
	 document.getElementById('player4').style.display = "block";
	 document.getElementById('player5').style.display = "block";
	 document.getElementById('player6').style.display = "none";
	}
	if (players == 6) {
	 document.getElementById('player1').style.display = "block";
	 document.getElementById('player2').style.display = "block";
	 document.getElementById('player3').style.display = "block";
	 document.getElementById('player4').style.display = "block";
	 document.getElementById('player5').style.display = "block";
	 document.getElementById('player6').style.display = "block";
	}
}

// removing players
function remove(player) {
	setTimeout(function() {
	player.style.display = "none"}, 500);
}

// showing players
function show(player) {player.style.display = "block"}

// allows players to hide specific players
function displayChange(player) {
	playerButtonAnimation(player);
	var player = document.getElementById(player);
	if (player.style.display == "none") {
		playerTabRevealAnimation(player);
		setTimeout(function() {
		player.style.display = "block";}, 500);
	}
	else{
		playerTabRemoveAnimation(player);
		setTimeout(function() {
		player.style.display = "none";}, 500);
	}
}

//*dice function*
//pre-load the six images first
var face0=new Image()
face0.src="img/roll1.svg"
var face1=new Image()
face1.src="img/roll2.svg"
var face2=new Image()
face2.src="img/roll3.svg"
var face3=new Image()
face3.src="img/roll4.svg"
var face4=new Image()
face4.src="img/roll5.svg"
var face5=new Image()
face5.src="img/roll6.svg"

//rolls all dice
function rollAll() {
	diceAnimation();
	setTimeout(function() {
	rolldice1();
	rolldice2();
	rolldice3();
	rolldice4();
	rolldice5();
	rolldice6();
	}, 700);
	setTimeout(function() {
	$('#dice1').removeClass('vertFlipAnimation');
	$('#dice2').removeClass('vertFlipAnimation');
	$('#dice3').removeClass('vertFlipAnimation');
	$('#dice4').removeClass('vertFlipAnimation');
	$('#dice5').removeClass('vertFlipAnimation');
	$('#dice6').removeClass('vertFlipAnimation');
	}, 1000);
}

//roll dice 1
function rolldice1(){
	//create a random integer between 0 and 5
	var randomdice=Math.round(Math.random()*5);
	document.images["dice1"].src=eval("face"+randomdice+".src");
}

//roll dice 2
function rolldice2(){
	//create a random integer between 0 and 5
	var randomdice=Math.round(Math.random()*5);
	document.images["dice2"].src=eval("face"+randomdice+".src");
}

//roll dice 3
function rolldice3(){
//create a random integer between 0 and 5
var randomdice=Math.round(Math.random()*5)
document.images["dice3"].src=eval("face"+randomdice+".src")
}

//roll dice 4
function rolldice4(){
//create a random integer between 0 and 5
var randomdice=Math.round(Math.random()*5)
document.images["dice4"].src=eval("face"+randomdice+".src")
}

//roll dice 5
function rolldice5(){
//create a random integer between 0 and 5
var randomdice=Math.round(Math.random()*5)
document.images["dice5"].src=eval("face"+randomdice+".src")
}

//roll dice 6
function rolldice6(){
//create a random integer between 0 and 5
var randomdice=Math.round(Math.random()*5)
document.images["dice6"].src=eval("face"+randomdice+".src")
}

//shows additional dice
function addDice(){
	if (document.getElementById('dice5').style.display == "block" && document.getElementById('dice6').style.display == "none") {
		document.getElementById('dice6').style.display = "block";	
	}	
	if (document.getElementById('dice4').style.display == "block" && document.getElementById('dice5').style.display == "none") {
		document.getElementById('dice5').style.display = "block";	
	}	
	if (document.getElementById('dice3').style.display == "block" && document.getElementById('dice4').style.display == "none") {
		document.getElementById('dice4').style.display = "block";	
	}	
	if (document.getElementById('dice2').style.display == "block" && document.getElementById('dice3').style.display == "none") {
		document.getElementById('dice3').style.display = "block";	
	}	
	if (document.getElementById('dice1').style.display == "block" && document.getElementById('dice2').style.display == "none") {
		document.getElementById('dice2').style.display = "block";
	}	
}

//hides additional dice
function subDice(){
	if (document.getElementById('dice3').style.display == "none" && document.getElementById('dice2').style.display == "block") {
		document.getElementById('dice2').style.display = "none";	
	}	
	if (document.getElementById('dice4').style.display == "none" && document.getElementById('dice3').style.display == "block") {
		document.getElementById('dice3').style.display = "none";	
	}	
	if (document.getElementById('dice5').style.display == "none" && document.getElementById('dice4').style.display == "block") {
		document.getElementById('dice4').style.display = "none";	
	}	
	if (document.getElementById('dice6').style.display == "none" && document.getElementById('dice5').style.display == "block") {
		document.getElementById('dice5').style.display = "none";	
	}	
	if (document.getElementById('dice6').style.display == "block") {
		document.getElementById('dice6').style.display = "none";	
	}
}

/*animation*/
function playerButtonAnimation(player){
	if (player == 'player1') {
		$('#p1button').addClass('playerButtonAnimation');
		var button = document.getElementById('p1button');
		document.getElementById('p1button').style.webkitAnimation = 'none';
	}
	if (player == 'player2') {
		$('#p2button').addClass('playerButtonAnimation');
		var button = document.getElementById('p2button');
		document.getElementById('p2button').style.webkitAnimation = 'none';
		}
	if (player == 'player3') {
		$('#p3button').addClass('playerButtonAnimation');
		var button = document.getElementById('p3button');
		document.getElementById('p3button').style.webkitAnimation = 'none';
	}
	if (player == 'player4') {
		$('#p4button').addClass('playerButtonAnimation');
		var button = document.getElementById('p4button');
		document.getElementById('p4button').style.webkitAnimation = 'none';
	}
	if (player == 'player5') {
		$('#p5button').addClass('playerButtonAnimation');
		var button = document.getElementById('p5button');
		document.getElementById('p5button').style.webkitAnimation = 'none';	
	}
	if (player == 'player6') {
		$('#p6button').addClass('playerButtonAnimation');
		var button = document.getElementById('p6button');
		document.getElementById('p6button').style.webkitAnimation = 'none';	
	}
	setTimeout(function() {button.style.webkitAnimation = '';}, 100);
}

function buttonAnimation(button){
	$(button).addClass('buttonAnimation');
	var button = button;
	button.style.webkitAnimation = 'none';
	setTimeout(function() {button.style.webkitAnimation = '';}, 10);	
	setTimeout(function() {$(button).removeClass('buttonAnimation')}, 500);
}

function playerTabAnimationLeft(player){
	$(player).addClass('playerTabAnimationLeft');
	var player = player;
	player.style.webkitAnimation = 'none';
	setTimeout(function() {player.style.webkitAnimation = '';}, 10);	
	setTimeout(function() {$(player).removeClass('playerTabAnimationLeft');}, 1000);
}

function playerTabAnimationRight(player){
	$(player).addClass('playerTabAnimationRight');
	var player = player;
	player.style.webkitAnimation = 'none';
	setTimeout(function() {player.style.webkitAnimation = '';}, 10);	
	setTimeout(function() {$(player).removeClass('playerTabAnimationRight');}, 1000);
}

function playerTabRemoveAnimation(player){
	$(player).addClass('playerTabRemoveAnimation');
	var player = player;
	player.style.webkitAnimation = 'none';
	setTimeout(function() {player.style.webkitAnimation = '';}, 10);	
	setTimeout(function() {$(player).removeClass('playerTabRemoveAnimation');}, 1000);
}

function playerTabRevealAnimation(player){
	$(player).addClass('playerTabRevealAnimation');
	var player = player;
	player.style.webkitAnimation = 'none';
	setTimeout(function() {player.style.webkitAnimation = '';}, 10);	
	setTimeout(function() {$(player).removeClass('playerTabRevealAnimation');}, 1000);
}

function diceAnimation(){
	$('#dice1').addClass('vertFlipAnimation');
	$('#dice2').addClass('vertFlipAnimation');
	$('#dice3').addClass('vertFlipAnimation');
	$('#dice4').addClass('vertFlipAnimation');
	$('#dice5').addClass('vertFlipAnimation');
	$('#dice6').addClass('vertFlipAnimation');
	var dice1 = document.getElementById('dice1');
	var dice2 = document.getElementById('dice2');
	var dice3 = document.getElementById('dice3');
	var dice4 = document.getElementById('dice4');
	var dice5 = document.getElementById('dice5');
	var dice6 = document.getElementById('dice6');
	document.getElementById('dice1').style.webkitAnimation = 'none';
	setTimeout(function() {dice1.style.webkitAnimation = '';}, 100);
	document.getElementById('dice2').style.webkitAnimation = 'none';
	setTimeout(function() {dice2.style.webkitAnimation = '';}, 100);
	document.getElementById('dice3').style.webkitAnimation = 'none';
	setTimeout(function() {dice3.style.webkitAnimation = '';}, 100);
	document.getElementById('dice4').style.webkitAnimation = 'none';
	setTimeout(function() {dice4.style.webkitAnimation = '';}, 100);
	document.getElementById('dice5').style.webkitAnimation = 'none';
	setTimeout(function() {dice5.style.webkitAnimation = '';}, 100);
	document.getElementById('dice6').style.webkitAnimation = 'none';
	setTimeout(function() {dice6.style.webkitAnimation = '';}, 100);
}

/*shake gesture*/
var shakeDice = new Shake({
    threshold: 20, 
    timeout: 1000 
});

//function to call when shake occurs
function shakeEventDidOccur () {
	rollAll();
	console.log('rolled');
}
