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

function remove(player) { player.style.display = "none"}

// calculation functions
function s(v, player) { document.getElementById(player).value = v }
function a(v, player) { s(eval(document.getElementById(player).value += v), player) }

function t(v, playerC) { document.getElementById(playerC).value = v }
function aT(v, playerC) { t(eval(document.getElementById(playerC).value += v), playerC) }
