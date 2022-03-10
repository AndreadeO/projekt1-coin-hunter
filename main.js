// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program


let hunter, hunterX, hunterY, hunterWidth, hunterHeight;
let coin, coinX, coinY, coinWidth, coinHeight;

hunter = document.querySelector('#panacek');
coin = document.querySelector('#mince');

let getTheHeight = window.innerHeight;
let getTheWidth = window.innerWidth;

hunterX = getTheHeight / 2;
hunterY = getTheWidth / 2;

const imgCoin = document.getElementById('mince');
coinWidth = imgCoin.clientWidth;
coinHeight = imgCoin.clientHeight;

const imgHunter = document.getElementById('panacek');
hunterWidth = imgHunter.clientWidth;
hunterHeight = imgHunter.clientHeight;
//console.log(hunterWidth)
//console.log(hunterHeight)

//console.log(hunterX)
//console.log(hunterY)

function byLoadingThePage() {

	placeTheHunter();
	newCoin();
	
}

function placeTheHunter() {
	hunter.style.left = hunterY + "px";
	hunter.style.top = hunterX + "px";
	console.log("umistime panacek")
}

function newCoin() {
	coin.style.left = (Math.random() * getTheHeight) + "px";
	coin.style.top = (Math.random() * getTheWidth) + "px";
	console.log("umistime minci")
}

function byClickingTheKey(event) {

	if (event.key === "ArrowLeft") { 
		hunterY -= 10;
		hunter.style.left = hunterY + "px";
		console.log("doleva");

	} else if (event.key === "ArrowRight") { 
		hunterY += 10;
		hunter.style.left = hunterY + "px";
		console.log("doprava");

	} else if (event.key === "ArrowUp") { 
		hunterX = hunterX - 10;
		hunter.style.top = hunterX + "px";
		console.log("nahoru");

	} else if (event.key === "ArrowDown") {  
		hunterX = hunterX + 10;
		hunter.style.top = hunterX + "px";
		console.log("dolu");

	}
}

function testTheCollision() {
	if (!( hunterX + hunterWidth < coinX || coinX + coinWidth < hunterX || hunterY + hunterHeight < coinY || coinY + coinHeight < hunterY)) {
		// panacek a mince se prekryvaji
		let score = document.querySelector('#score');
		score = 0;
		score = score + 1;
		console.log(score);

	}
}