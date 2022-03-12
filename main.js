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

hunterX = getTheWidth / 2;
hunterY = getTheHeight / 2;

const imgCoin = document.getElementById('mince');
coinWidth = imgCoin.width;
coinHeight = imgCoin.height;

coinX = Math.random() * window.innerWidth;  //osa X je horizontalni - sirka
coinY = Math.random() * window.innerHeight;  //osa Y je vertikalni - vyska

hunterWidth = hunter.width;
hunterHeight = hunter.height;

function byLoadingThePage() {

	placeTheHunter();
	newCoin();
	
}

function placeTheHunter() {
	hunter.style.left = hunterX + "px";
	hunter.style.top = hunterY + "px";
}

function newCoin() {
	coinX = (Math.random() * getTheWidth);
	coinY = (Math.random() * getTheHeight);
	coin.style.left = coinX + "px";
	coin.style.top = coinY + "px";
}

function byClickingTheKey(event) {

	if (event.key === "ArrowLeft") {    //osa X je horizontalni - sirka, osa Y je vertikalni - vyska;
		hunterX -= 10;      // doprava, doleva je hunterX a coinX
		if (hunterX < 0) {
			hunterX = 0;
		}
		hunter.style.left = hunterX + "px";

	} else if (event.key === "ArrowRight") { 
		hunterX += 10;
		if (hunterX + hunterWidth > window.innerWidth) {
			hunterX = window.innerWidth - hunterWidth;
		}
		hunter.style.left = hunterX + "px";

	} else if (event.key === "ArrowUp") { 
		hunterY = hunterY - 10;
		if (hunterY < 0) {
			hunterY = 0;
		}
		hunter.style.top = hunterY + "px";

	} else if (event.key === "ArrowDown") {  
		hunterY = hunterY + 10;
		if (hunterY + hunterHeight > window.innerHeight) {
			hunterY = window.innerHeight - hunterHeight;
		}
		hunter.style.top = hunterY + "px";

	}
	testTheCollision();

}

let score = document.getElementById('score');
scoreCounter = 0
score.innerHTML = scoreCounter;

function testTheCollision() {
	if (
		!(
		  ((hunterX + hunterWidth) < coinX) ||
		  ((coinX + coinWidth) < hunterX) ||
		  ((hunterY + hunterHeight) < coinY) ||
		  ((coinY + coinHeight) < hunterY)
		)
	  ) {
		// panacek a mince se prekryvaji
		scoreCounter = scoreCounter + 1;
		score.innerHTML = scoreCounter;

		newCoin();

		if (scoreCounter > 5) {
			alert("You win!!!");
		}
	} 

}

