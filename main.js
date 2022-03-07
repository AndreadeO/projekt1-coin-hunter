// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let getTheHeight = window.innerHeight;
let getTheWidth = window.innerWidth;

let initialHeight = getTheHeight / 2;
let initialWidth = getTheWidth / 2;

let moveBy = 10;

window.addEventListener("keydown", onkeydown);


function placeTheHunter() {
	let coinHunter = document.querySelector('#panacek');

	coinHunter.style.left = initialWidth + 'px';
	coinHunter.style.top = initialHeight + 'px';
/*
	function moveTheHunter(event) {


		if (event.key === 38) {
			coinHunter = window.getComputedStyle(coinHunter).getPropertyValue("top");

			coinHunter.style.top = parseInt(coinHunter.style.top) + moveBy + 'px';
	 
	
		} else if (event.key === 40) { 
			coinHunter = window.getComputedStyle(coinHunter).getPropertyValue("top");
			
			coinHunter.style.top = parseInt(coinHunter.style.top) - moveBy + 'px';

	
		} else if (event.key === 37) {
			coinHunter = window.getComputedStyle(coinHunter).getPropertyValue("left");
	
			coinHunter.style.left = parseInt(coinHunter.style.left) + moveBy + 'px';

	
		} else if (event.key === 39) {
			coinHunter = window.getComputedStyle(coinHunter).getPropertyValue("left");
			
			coinHunter.style.left = parseInt(coinHunter.style.left) - moveBy + 'px';

		}
	}
	*/
}

function moveTheHunter(event) {

	let coinHunter = document.querySelector('#panacek');

	coinHunter.style.top = parseInt(coinHunter.style.top) + moveBy + 'px';
	
}





