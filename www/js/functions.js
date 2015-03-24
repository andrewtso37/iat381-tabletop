// initializing function
function start() {
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
}


// calculation functions
function s(v, player) { document.getElementById(player).value = v }
function a(v, player) { s(eval(document.getElementById(player).value += v), player) }

function t(v, playerC) { document.getElementById(playerC).value = v }
function aT(v, playerC) { t(eval(document.getElementById(playerC).value += v), playerC) }
