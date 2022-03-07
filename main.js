// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program
/*
let coinHunter = document.querySelector('#panacek');

coinHunter.style.top = '50%';
coinHunter.style.left = '50%';
	



window.addEventListener('keydown', moveTheHunter);


function moveTheHunter(event) {
	let x = 
	let y = 

	if (event.key === 38) {
		x = x + 100   //up

	} else if (event.key === 40) { 
		x = x - 1 //down

	} else if (event.key === 37) {
		y = y + 1

	} else if (event.key === 39) {
		y = y - 1

	}
	

}
*/


let getTheHeight = window.innerHeight;
let getTheWidth = window.innerWidth;

let initialHeight = getTheHeight / 2;
let initialWidth = getTheWidth / 2;


function placeTheHunter() {
	let coinHunter = document.querySelector('#panacek');

	coinHunter.style.left = initialWidth + 'px';
	coinHunter.style.top = initialHeight + 'px';
}

window.addEventListener("keydown", onkeydown);

function moveTheHunter(event) {
	if (event.key === 38) {
		initialHeight = (initialHeight + 1) + 'px';   //up

	} else if (event.key === 40) { 
		initialHeight = (initialHeight - 1) + 'px';
		//down

	} else if (event.key === 37) {
		initialWidth = (initialWidth + 1) + 'px';   


	} else if (event.key === 39) {
		initialWidth = (initialWidth - 1) + 'px';   


	}
}






