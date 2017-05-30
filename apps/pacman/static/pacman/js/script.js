$(document).ready(function() {

	var world = [
		[44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44],
		[44,44,01,02,02,02,02,02,02,02,02,02,02,02,02,02,03,02,02,02,03,02,02,02,03,02,02,02,02,02,02,02,02,02,02,02,02,02,06,44,44],
		[44,44,04,22,22,22,22,22,22,22,22,22,22,22,22,22,04,22,22,22,04,22,22,22,04,22,22,22,22,22,22,22,22,22,22,22,22,22,04,44,44],
		[44,44,04,22,01,02,02,02,11,22,22,12,02,02,06,22,05,22,10,22,05,22,10,22,05,22,01,02,02,11,22,22,12,02,02,02,06,22,04,44,44],
		[44,44,04,22,04,22,22,22,22,22,22,22,22,22,04,22,22,22,04,22,33,22,04,22,22,22,04,22,22,22,22,22,22,22,22,22,04,22,04,44,44],
		[44,44,04,22,04,22,01,02,02,02,02,11,33,22,04,22,12,02,09,02,02,02,09,02,11,22,04,33,22,12,02,02,02,02,06,22,04,22,04,44,44],
		[44,44,04,22,04,22,04,22,22,22,22,22,22,22,04,22,22,22,22,22,22,22,22,22,22,22,04,22,22,22,22,22,22,22,04,22,04,22,04,44,44],
		[44,44,04,22,04,22,05,22,22,22,22,22,22,22,05,22,22,22,22,22,22,22,22,22,22,22,05,22,22,22,22,22,22,22,04,22,05,22,04,44,44],
		[02,02,08,22,05,22,22,22,01,02,02,06,22,22,22,22,22,01,02,11,44,12,02,06,22,22,22,22,22,01,02,02,06,22,05,22,22,22,07,02,02],
		[44,44,44,22,22,22,22,22,04,44,44,13,02,02,02,11,22,04,44,44,44,44,44,04,22,12,02,02,02,14,44,44,04,22,22,22,22,22,44,44,44],
		[02,02,06,22,22,22,10,22,07,02,02,08,22,22,22,22,22,07,02,02,02,02,02,08,22,22,22,22,22,07,02,02,08,22,22,22,10,22,01,02,02],
		[44,44,04,22,10,22,04,22,22,22,22,22,22,22,01,11,22,22,22,22,22,22,22,22,22,12,06,22,22,22,22,22,22,22,10,22,04,22,04,44,44],
		[44,44,04,22,04,22,04,22,22,22,22,22,22,22,04,22,22,22,22,22,44,22,22,22,22,22,04,22,22,22,22,22,22,22,04,22,04,22,04,44,44],
		[44,44,04,22,04,22,07,02,02,02,02,11,22,22,04,22,01,02,02,02,03,02,02,02,06,22,04,22,22,12,02,02,02,02,08,22,04,22,04,44,44],
		[44,44,04,33,04,22,22,22,22,22,22,22,22,22,04,22,04,22,22,22,04,22,22,22,04,22,04,22,22,22,22,22,22,22,22,22,04,33,04,44,44],
		[44,44,04,22,07,02,02,02,11,22,22,12,02,02,08,22,05,22,10,22,05,22,10,22,05,22,07,02,02,11,22,22,12,02,02,02,08,22,04,44,44],
		[44,44,04,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,04,22,33,22,04,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,04,44,44],
		[44,44,07,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,09,02,02,02,09,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,08,44,44],
		[44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44]
	];

	var world2 = [
		[44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44],
		[44,44,01,02,02,02,02,02,02,02,02,02,02,02,02,02,03,02,02,02,03,02,02,02,03,02,02,02,02,02,02,02,02,02,02,02,02,02,06,44,44],
		[44,44,04,22,22,22,22,22,22,22,22,22,22,22,22,22,04,22,22,22,04,22,22,22,04,22,22,22,22,22,22,22,22,22,22,22,22,22,04,44,44],
		[44,44,04,22,01,02,02,02,11,22,22,12,02,02,06,22,05,22,10,22,05,22,10,22,05,22,01,02,02,11,22,22,12,02,02,02,06,22,04,44,44],
		[44,44,04,22,04,22,22,22,22,22,22,22,22,22,04,22,22,22,04,22,33,22,04,22,22,22,04,22,22,22,22,22,22,22,22,22,04,22,04,44,44],
		[44,44,04,22,04,22,01,02,02,02,02,11,33,22,04,22,12,02,09,02,02,02,09,02,11,22,04,33,22,12,02,02,02,02,06,22,04,22,04,44,44],
		[44,44,04,22,04,22,04,22,22,22,22,22,22,22,04,22,22,22,22,22,22,22,22,22,22,22,04,22,22,22,22,22,22,22,04,22,04,22,04,44,44],
		[44,44,04,22,04,22,05,22,22,22,22,22,22,22,05,22,22,22,22,22,22,22,22,22,22,22,05,22,22,22,22,22,22,22,04,22,05,22,04,44,44],
		[02,02,08,22,05,22,22,22,01,02,02,06,22,22,22,22,22,01,02,11,44,12,02,06,22,22,22,22,22,01,02,02,06,22,05,22,22,22,07,02,02],
		[44,44,44,22,22,22,22,22,04,44,44,13,02,02,02,11,22,04,44,44,44,44,44,04,22,12,02,02,02,14,44,44,04,22,22,22,22,22,44,44,44],
		[02,02,06,22,22,22,10,22,07,02,02,08,22,22,22,22,22,07,02,02,02,02,02,08,22,22,22,22,22,07,02,02,08,22,22,22,10,22,01,02,02],
		[44,44,04,22,10,22,04,22,22,22,22,22,22,22,01,11,22,22,22,22,22,22,22,22,22,12,06,22,22,22,22,22,22,22,10,22,04,22,04,44,44],
		[44,44,04,22,04,22,04,22,22,22,22,22,22,22,04,22,22,22,22,22,44,22,22,22,22,22,04,22,22,22,22,22,22,22,04,22,04,22,04,44,44],
		[44,44,04,22,04,22,07,02,02,02,02,11,22,22,04,22,01,02,02,02,03,02,02,02,06,22,04,22,22,12,02,02,02,02,08,22,04,22,04,44,44],
		[44,44,04,33,04,22,22,22,22,22,22,22,22,22,04,22,04,22,22,22,04,22,22,22,04,22,04,22,22,22,22,22,22,22,22,22,04,33,04,44,44],
		[44,44,04,22,07,02,02,02,11,22,22,12,02,02,08,22,05,22,10,22,05,22,10,22,05,22,07,02,02,11,22,22,12,02,02,02,08,22,04,44,44],
		[44,44,04,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,04,22,33,22,04,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,04,44,44],
		[44,44,07,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,09,02,02,02,09,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,08,44,44],
		[44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44]
	];

	var score = 0;
	var	active = true;
	var highest = 0;
	var pacman = {
		lives: 3,
		x: 20,
		y: 12
	};
	var ghost1 = {
		x: 18,
		y: 9
	};
	var ghost2 = {
		x: 19,
		y: 9
	};
	var ghost3 = {
		x: 21,
		y: 9
	};
	var ghost4 = {
		x: 22,
		y: 9
	};
	var score = 0;

	function displayWorld(){
		var output = "";
		for(var i = 0; i < world.length; i++) {
			output += "\n<div class='row'>\n";
			for(var j = 0; j < world[i].length; j++){
				if(world[i][j] == 1)
					output += "<div class='brick1'></div>";
				else if(world[i][j] == 2)
					output += "<div class='brick2'></div>";
				else if(world[i][j] == 3)
					output += "<div class='brick3'></div>";
				else if(world[i][j] == 4)
					output += "<div class='brick4'></div>";
				else if(world[i][j] == 5)
					output += "<div class='brick5'></div>";
				else if(world[i][j] == 6)
					output += "<div class='brick6'></div>";
				else if(world[i][j] == 7)
					output += "<div class='brick7'></div>";
				else if(world[i][j] == 8)
					output += "<div class='brick8'></div>";
				else if(world[i][j] == 9)
					output += "<div class='brick9'></div>";
				else if(world[i][j] == 10)
					output += "<div class='brick10'></div>";
				else if(world[i][j] == 11)
					output += "<div class='brick11'></div>";
				else if(world[i][j] == 12)
					output += "<div class='brick12'></div>";
				else if(world[i][j] == 13)
					output += "<div class='brick13'></div>";
				else if(world[i][j] == 14)
					output += "<div class='brick14'></div>";
				else if(world[i][j] == 22)
					output += "<div class='coin'></div>";
				else if(world[i][j] == 33)
					output += "<div class='cherry'></div>";
				else if(world[i][j] == 44)
					output += "<div class='empty'></div>";
			}
			output += "\n</div>";
		}
		document.getElementById("world").innerHTML = output;
	}
	function displayGhost1() {
		document.getElementById('ghost1').style.top = ghost1.y * 20 +"px";
		document.getElementById('ghost1').style.left = ghost1.x * 20 +"px";
	}
	function displayGhost2() {
		document.getElementById('ghost2').style.top = ghost2.y * 20 +"px";
		document.getElementById('ghost2').style.left = ghost2.x * 20 +"px";
	}
	function displayGhost3() {
		document.getElementById('ghost3').style.top = ghost3.y * 20 +"px";
		document.getElementById('ghost3').style.left = ghost3.x * 20 +"px";
	}
	function displayGhost4() {
		document.getElementById('ghost4').style.top = ghost4.y * 20 +"px";
		document.getElementById('ghost4').style.left = ghost4.x * 20 +"px";
	}
	function displayPacman() {
		document.getElementById('pacman').style.top = pacman.y * 20 +"px";
		document.getElementById('pacman').style.left = pacman.x * 20 +"px";
	};
	function displayScore() {
		$('#scoreText').text(pad(score, 8));
		$('#livesText').text(pacman['lives']);
	};
	function pad(num, size) {
	    var s = "00000000" + num;
	    return s.substr(s.length-size);
	}
	function displayHighest(){
		if(score > highest){
			highest = score
		}
		$('#highest').text(highest);
	}


	// This section regulates PacMan movement
	document.onkeydown = function(e){
		if(active){
			if(e.keyCode == 37) {
				if(pacman.y == 9 && pacman.x == 0){
					pacman.x = 40;
				}
				else if(world[pacman.y][pacman.x-1] > 14){
					pacman.x --;
					$('#pacman').css('transform', 'rotate(180deg)');
				}
				$('#pacman').css('transform', 'rotate(180deg)');
			}
			else if (e.keyCode == 39) {
				if(pacman.y == 9 && pacman.x == 39){
					pacman.x = 0;
				}
				else if(world[pacman.y][pacman.x+1] > 14){
					pacman.x ++;
					$('#pacman').css('transform', 'rotate(0deg)');
				}
				$('#pacman').css('transform', 'rotate(0deg)');
			}
			else if (e.keyCode == 38) {
				if(world[pacman.y-1][pacman.x] > 14){
					pacman.y --;
					$('#pacman').css('transform', 'rotate(270deg)');
				}
				$('#pacman').css('transform', 'rotate(270deg)');
			}
			else if (e.keyCode == 40) {
				if(world[pacman.y+1][pacman.x] > 14){
					pacman.y ++;
					$('#pacman').css('transform', 'rotate(90deg)');
				}
				$('#pacman').css('transform', 'rotate(90deg)');
			}
			if(world[pacman.y][pacman.x] === 22){
				score += 100;
				world[pacman.y][pacman.x] = 44;
			}
			else if(world[pacman.y][pacman.x] === 33){
				score += 500;
				world[pacman.y][pacman.x] = 44;
			}
			displayScore();
			displayPacman();
			displayWorld();
		}
	}

	//This section regulates ghost 4 movement
	function ghost1Class(){
		var classN1 = ["ghost1U","ghost1R","ghost1D","ghost1L"]
		var num1 = Math.floor(Math.random() * 5);
		return classN1[num1];
		};

	function ghost2Class(){
		var classN2 = ["ghost2U","ghost2R","ghost2D","ghost2L"]
		var num2 = Math.floor(Math.random() * 5);
		return classN2[num2];
		};

	function ghost3Class(){
		var classN3 = ["ghost3U","ghost3R","ghost3D","ghost3L"]
		var num3 = Math.floor(Math.random() * 5);
		return classN3[num3];
		};

	function ghost4Class(){
		var classN4 = ["ghost4U","ghost4R","ghost4D","ghost4L"]
		var num4 = Math.floor(Math.random() * 5);
		return classN4[num4];
		};



		var moveGhost1 = setInterval(function() {
			if(active){
				if(ghost1.x == 19 && ghost1.y == 9){
					$("#ghost1").attr('class') == 'ghost1L';
					ghost1.y = 7;
				}
				else if($("#ghost1").attr('class') == 'ghost1L'){
					if(world[ghost1.y][ghost1.x-1] > 12){
						ghost1.x --;
					}
						else {$('#ghost1').attr('class', ghost1Class())}
				}
					else if($("#ghost1").attr('class') == 'ghost1U'){
						if (world[ghost1.y-1][ghost1.x] > 12){
							ghost1.y --;
						}
						else {$('#ghost1').attr('class', ghost1Class())}
					}
					else if($("#ghost1").attr('class') == 'ghost1D'){
						if (world[ghost1.y+1][ghost1.x] > 12){
							ghost1.y ++;
						}
						else {$('#ghost1').attr('class', ghost1Class())}
					}
					else if($("#ghost1").attr('class') == 'ghost1R'){
						if(world[ghost1.y][ghost1.x+1] > 12){
							ghost1.x ++;
						}
						else {$('#ghost1').attr('class', ghost1Class())};
					}
				if(pacman.x == ghost1.x && pacman.y == ghost1.y){
					$("#pacman").attr('class', 'pacmanhit');
					pacman['lives'] -= 1
					pacman['x'] = 20
					pacman['y'] = 12
					setTimeout(function() {
						displayScore();
						displayPacman();
						$("#pacman").attr('class', 'pacman');
						$('#pacman').css('transform', 'rotate(0deg)');
						 }, 1750);
				}
				if(pacman['lives'] === 0){
					active = false;
					displayHighest();
					$('#gameover').show()
				}
				displayGhost1();
				displayWorld();
			}
		}, 300);

		var moveGhost2 = setInterval(function() {
			if(active){
				if(ghost2.x == 19 && ghost2.y == 9){
					$("#ghost2").attr('class') == 'ghost2L';
					ghost2.y = 7;
				}
				else if($("#ghost2").attr('class') == 'ghost2L'){
					if(world[ghost2.y][ghost2.x-1] > 12){
						ghost2.x --;
					}
						else {$('#ghost2').attr('class', ghost2Class())}
				}
					else if($("#ghost2").attr('class') == 'ghost2U'){
						if (world[ghost2.y-1][ghost2.x] > 12){
							ghost2.y --;
						}
						else {$('#ghost2').attr('class', ghost2Class())}
					}
					else if($("#ghost2").attr('class') == 'ghost2D'){
						if (world[ghost2.y+1][ghost2.x] > 12){
							ghost2.y ++;
						}
						else {$('#ghost2').attr('class', ghost2Class())}
					}
					else if($("#ghost2").attr('class') == 'ghost2R'){
						if(world[ghost2.y][ghost2.x+1] > 12){
							ghost2.x ++;
						}
						else {$('#ghost2').attr('class', ghost2Class())};
					}
				displayGhost2();
				if(pacman.x == ghost2.x && pacman.y == ghost2.y){
					$("#pacman").attr('class', 'pacmanhit');
					pacman['lives'] -= 1
					pacman['x'] = 20
					pacman['y'] = 12
					setTimeout(function() {
						displayPacman();
						displayScore();
						$("#pacman").attr('class', 'pacman');
						$('#pacman').css('transform', 'rotate(0deg)');
					}, 1750);
				}
				if(pacman['lives'] === 0){
					active = false;
					displayHighest();
					$('#gameover').show()
				}
				displayGhost2();
				displayWorld();
			}
		}, 300);

		var moveGhost3 = setInterval(function() {
			if(active){
				if(ghost3.x == 19 && ghost3.y == 9){
					$("#ghost3").attr('class') == 'ghost3L';
					ghost3.y = 7;
				}
				else if($("#ghost3").attr('class') == 'ghost3L'){
					if(world[ghost3.y][ghost3.x-1] > 12){
						ghost3.x --;
					}
						else {$('#ghost3').attr('class', ghost3Class())}
				}
					else if($("#ghost3").attr('class') == 'ghost3U'){
						if (world[ghost3.y-1][ghost3.x] > 12){
							ghost3.y --;
						}
						else {$('#ghost3').attr('class', ghost3Class())}
					}
					else if($("#ghost3").attr('class') == 'ghost3D'){
						if (world[ghost3.y+1][ghost3.x] > 12){
							ghost3.y ++;
						}
						else {$('#ghost3').attr('class', ghost3Class())}
					}
					else if($("#ghost3").attr('class') == 'ghost3R'){
						if(world[ghost3.y][ghost3.x+1] > 12){
							ghost3.x ++;
						}
						else {$('#ghost3').attr('class', ghost3Class())};
					}
					console.log()
				displayGhost3();
				if(pacman.x == ghost3.x && pacman.y == ghost3.y){
					$("#pacman").attr('class', 'pacmanhit');
					pacman['lives'] -= 1
					pacman['x'] = 20
					pacman['y'] = 12
					setTimeout(function() {
						displayPacman();
						displayScore();
						$("#pacman").attr('class', 'pacman');
						$('#pacman').css('transform', 'rotate(0deg)');
					}, 1750);
				}
				if(pacman['lives'] === 0){
					active = false;
					displayHighest();
					$('#gameover').show()
				}
				displayGhost3();
				displayWorld();
			}
		}, 300);

		var moveGhost4 = setInterval(function() {
			if(active){
				if(ghost4.x == 19 && ghost4.y == 9){
					$("#ghost4").attr('class') == 'ghost4L';
					ghost4.y = 7;
				}
				else if($("#ghost4").attr('class') == 'ghost4L'){
					if(world[ghost4.y][ghost4.x-1] > 12){
						ghost4.x --;
					}
						else {$('#ghost4').attr('class', ghost4Class())}
				}
					else if($("#ghost4").attr('class') == 'ghost4U'){
						if (world[ghost4.y-1][ghost4.x] > 12){
							ghost4.y --;
						}
						else {$('#ghost4').attr('class', ghost4Class())}
					}
					else if($("#ghost4").attr('class') == 'ghost4D'){
						if (world[ghost4.y+1][ghost4.x] > 12){
							ghost4.y ++;
						}
						else {$('#ghost4').attr('class', ghost4Class())}
					}
					else if($("#ghost4").attr('class') == 'ghost4R'){
						if(world[ghost4.y][ghost4.x+1] > 12){
							ghost4.x ++;
						}
						else {$('#ghost4').attr('class', ghost4Class())};
					}
				displayGhost4();
				if(pacman.x == ghost4.x && pacman.y == ghost4.y){
					$("#pacman").attr('class', 'pacmanhit');
					pacman['lives'] -= 1
					pacman['x'] = 20
					pacman['y'] = 12
					setTimeout(function() {
						displayPacman();
						displayScore();
						$("#pacman").attr('class', 'pacman');
						$('#pacman').css('transform', 'rotate(0deg)');
					}, 1750);
				}
				if(pacman['lives'] === 0){
					active = false;
					displayHighest();
					$('#gameover').show()
				}
				displayGhost4();
				displayWorld();
			}
		}, 300);


		displayWorld();
		displayPacman();
		displayGhost1();
		displayGhost2();
		displayGhost3();
		displayGhost4();
		displayScore();

	$('#gameover').hide()
	$('#gameover').on('click', 'button', function(){
		console.log("clicked");
		world = $.extend(true, [], world2)
		pacman = {
			lives: 3,
			x: 20,
			y: 12
		};
		ghost1 = {
			x: 18,
			y: 9
		};
		ghost2 = {
			x: 19,
			y: 9
		};
		ghost3 = {
			x: 21,
			y: 9
		};
		ghost4 = {
			x: 22,
			y: 9
		};
		score = 0
		active = true
		moveGhost1
		$("#pacman").css('transform', 'rotate(0deg)')
		displayWorld();
		displayPacman();
		displayGhost1();
		displayGhost2();
		displayGhost3();
		displayGhost4();
		displayScore();
		$('#gameover').hide()
	})
});
