
const photo = document.getElementById('teamPhoto');
const areas = document.querySelectorAll('map[name="teamMap"] area');

// Keep the original (natural-size) coordinates so every resize scales from them.
areas.forEach((area) => {
	area.dataset.originalCoords = area.getAttribute('coords');
});

function scaleAreas() {
	const scale = photo.clientWidth / photo.naturalWidth;
	if (!scale) {
		return;
	}
	areas.forEach((area) => {
		const scaled = area.dataset.originalCoords
			.split(',')
			.map((value) => Math.round(Number(value) * scale));
		area.setAttribute('coords', scaled.join(','));
	});
}

function setActive(member, isActive) {
	const card = document.querySelector(`.member[data-member="${member}"]`);
	if (card) {
		card.classList.toggle('is-active', isActive);
	}
}

areas.forEach((area) => {
	const member = area.dataset.member;
	area.addEventListener('mouseenter', () => setActive(member, true));
	area.addEventListener('mouseleave', () => setActive(member, false));
	area.addEventListener('focus', () => setActive(member, true));
	area.addEventListener('blur', () => setActive(member, false));
});

if (photo.complete) {
	scaleAreas();
} else {
	photo.addEventListener('load', scaleAreas);
}
window.addEventListener('resize', scaleAreas);
