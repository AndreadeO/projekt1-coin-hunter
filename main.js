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
//console.log(hunterWidth)
//console.log(hunterHeight)

//console.log(hunterX)
//console.log(hunterY)

function byLoadingThePage() {

	placeTheHunter();
	newCoin();
	
}

function placeTheHunter() {
	hunter.style.left = hunterX + "px";
	hunter.style.top = hunterY + "px";
	console.log("umistime panacek")
}

function newCoin() {
	coin.style.left = (Math.random() * getTheWidth) + "px";
	coin.style.top = (Math.random() * getTheHeight) + "px";
	console.log("umistime minci")
}

function byClickingTheKey(event) {

	if (event.key === "ArrowLeft") {    //osa X je horizontalni - sirka, osa Y je vertikalni - vyska;
		hunterX -= 10;      // doprava, doleva je hunterX a coinX
		if (hunterX < 0) {
			hunterX = 0;
		}
		hunter.style.left = hunterX + "px";

		console.log("doleva", hunter.style.left);

	} else if (event.key === "ArrowRight") { 
		hunterX += 10;
		if (hunterX + hunterWidth > window.innerWidth) {
			hunterX = window.innerWidth - hunterWidth;
		}
		hunter.style.left = hunterX + "px";

		console.log("doprava", hunter.style.left);

	} else if (event.key === "ArrowUp") { 
		hunterY = hunterY - 10;
		if (hunterY < 0) {
			hunterY = 0;
		}
		hunter.style.top = hunterY + "px";

		console.log("nahoru", hunter.style.top);

	} else if (event.key === "ArrowDown") {  
		hunterY = hunterY + 10;
		if (hunterY + hunterHeight > window.innerHeight) {
			hunterY = window.innerHeight - hunterHeight;
		}
		hunter.style.top = hunterY + "px";

		console.log("dolu", hunter.style.top);

	}
	testTheCollision();
	console.log("panacekX", hunterX);
	console.log("panacekY", hunterY);
	console.log("minceX", coinX);
	console.log("minceX", coinY);

}

function testTheCollision() {
	if (
		!(
		  hunterX + hunterWidth < coinX ||
		  coinX + coinWidth < hunterX ||
		  hunterY + hunterHeight < coinY ||
		  coinY + coinHeight < hunterY
		)
	  ) {
		// panacek a mince se prekryvaji
		console.log("doslo ke kolizi");
		//let score = document.getElementById('score');
		//score = 0;
		//score = score + 1;
		//console.log(score);
		newCoin();
	} else {
		console.log("nedoslo");
	}
}

