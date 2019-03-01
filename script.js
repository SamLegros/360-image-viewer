// define variables ===========================================================================
let developing = true;

// html
let contentDiv = document.getElementById('content-div');
let panoramaDiv = document.getElementById('panorama');
let grid201902Container = document.getElementById('grid-2019-02-container').firstElementChild;

// images
let image = {'2019': {}};
image['2019']['01_january'] = 1;
image['2019']['02_february'] = 14;

let liveBaseUrl = 'https://github.com/SamLegros/curate-360-images/blob/master/';

console.log(grid201902Container.children.length);


// define event listeners =====================================================================
window.addEventListener('resize', handleResize);

for (let i = 0; i < grid201902Container.children.length; i++) {
	grid201902Container.children[i].addEventListener('click', handleClick);
}


// define event listener functions ============================================================
function handleResize() {
	console.log('resize');
}

function handleClick() {
	let year = this.alt.substring(0, 4);
	let month = this.alt.substring(5, 7);
	let image = this.alt.slice(8);
	let imageUrl = `images/${year}/${month}/${image}.jpg`;

	if (!developing) {
		imageUrl = liveBaseUrl + imageUrl;
		console.log(imageUrl);
	}

	pannellum.viewer('panorama', {
		'autoLoad': true,
		"autoRotate": -5,
		'compass': false,
		'panorama': imageUrl,
		'type': 'equirectangular',
	});
}

// define functions ===========================================================================
function init() {
	console.log(`Take 1`);
	grid201902Container.children[13].click();
}


// run functions ==============================================================================
init();
