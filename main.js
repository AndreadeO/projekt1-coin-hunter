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

console.log(hunterX)
console.log(hunterY)

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
	coin.style.left = 100 +"px";
	coin.style.top = 100 + "px";
	console.log("umistime minci")
}

function byClickingTheKey(event) {

	if (event.key === "ArrowLeft") { //nechodi
		hunterY -= 10;
		hunter.style.left = hunterY - "px";
		console.log("doleva");

	} else if (event.key === "ArrowRight") { //chodi
		hunterY += 10;
		hunter.style.left = hunterY + "px";
		console.log("doprava");

	} else if (event.key === "ArrowUp") { //nechodi
		hunterX = hunterX - 10;
		hunter.style.top = hunterX - "px";

		console.log("nahoru");

	} else if (event.key === "ArrowDown") {  //chodi
		hunterX = hunterX + 10;
		hunter.style.top = hunterX + "px";
		console.log("dolu");

	}
}

function testTheColision() {

}