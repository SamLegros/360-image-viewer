console.log(`Ready.`);

// define variables ===========================================================================
// html
let contentDiv = document.getElementById('content-div');
let panoramaDiv = document.getElementById('panorama');
let grid201902Container = document.getElementById('grid-2019-02-container').firstElementChild;

// images
let image = {'2019': {}};
image['2019']['01_january'] = 1;
image['2019']['02_february'] = 14;

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

	pannellum.viewer('panorama', {
		'autoLoad': true,
		"autoRotate": -5,
		'compass': false,
		'panorama': `/images/${year}/${month}/${image}.jpg`,
		'type': 'equirectangular',
	});
}

// define functions ===========================================================================
function init() {
	grid201902Container.children[13].click();
}


// run functions ==============================================================================
init();
