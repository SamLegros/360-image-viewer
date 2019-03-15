// define variables ===========================================================================
// html
let contentDiv = document.getElementById('content-div');
let panoramaContainerDiv = document.getElementById('panorama-container-div');
let panoramaDiv = document.getElementById('panorama');
let panoramaWidthRatio = 2;
let panoramaHeightRatio = 1;
let grid201903Container = document.getElementById('grid-2019-03-container').firstElementChild;
let grid201902Container = document.getElementById('grid-2019-02-container').firstElementChild;
let grid201901Container = document.getElementById('grid-2019-01-container').firstElementChild;

// images
let image = {'2019': {}};
image['2019']['01_january'] = 1;
image['2019']['02_february'] = 14;
image['2019']['03_march'] = 12;


// define event listeners =====================================================================
for (let i = 0; i < grid201903Container.children.length; i++) {
	grid201903Container.children[i].addEventListener('click', handleClick);
}

for (let i = 0; i < grid201902Container.children.length; i++) {
	grid201902Container.children[i].addEventListener('click', handleClick);
}

for (let i = 0; i < grid201901Container.children.length; i++) {
	grid201901Container.children[i].addEventListener('click', handleClick);
}

window.addEventListener('resize', handleResize);


// define event listener functions ============================================================
function handleResize() {
	let cssBodyMaxWidth = 1000;
	let cssBodyPadding = 20;
	let newWidth;
	if (window.innerWidth <= cssBodyMaxWidth) {
		newWidth = (window.innerWidth-(cssBodyPadding*2));
	} else {
		newWidth = (cssBodyMaxWidth-(cssBodyPadding*2));
	}
	newHeight = (panoramaHeightRatio / panoramaWidthRatio) * (newWidth);

	panoramaDiv.style.width = `${newWidth}px`;
	panoramaDiv.style.height = `${newHeight}px`;
}

function handleClick() {
	let thumnailData = {
		year: this.id.substring(4, 8),
		month: this.id.substring(9, 11),
		image: this.id.slice(12)
	};
	let imageUrl = `images/${thumnailData.year}/${thumnailData.month}/${thumnailData.image}.jpg`;
	updatePannellum(imageUrl);
	updateThumbnail(thumnailData);
}


// define functions ===========================================================================
function init() {
	console.log(`Take 1`);
	handleResize();
	grid201903Container.children[11].click();
}

function updateThumbnail(data) {
	let idInt = parseInt(data.image)-1;

	for (let i = 0; i < grid201903Container.children.length; i++) {
		grid201903Container.children[i].classList.remove('thumbnail-active');
	}

	for (let i = 0; i < grid201902Container.children.length; i++) {
		grid201902Container.children[i].classList.remove('thumbnail-active');
	}

	for (let i = 0; i < grid201901Container.children.length; i++) {
		grid201901Container.children[i].classList.remove('thumbnail-active');
	}

	if (data.month == '01') {
		grid201901Container.children[idInt].classList.add('thumbnail-active');
	} else if (data.month == '02') {
		grid201902Container.children[idInt].classList.add('thumbnail-active');
	} else if (data.month == '03') {
		grid201903Container.children[idInt].classList.add('thumbnail-active');
	}
}

function updatePannellum(imageUrl) {
	panoramaDiv.innerHTML = '';
	pannellum.viewer('panorama', {
		'autoLoad': true,
		"autoRotate": -5,
		'compass': false,
		'panorama': imageUrl,
		'type': 'equirectangular',
	});
}


// run functions ==============================================================================
init();
