var myHeading = document.querySelector('h1');
i = 0;
document.querySelector('h1').onclick = function() {
	if (i === 0) {
		myHeading.textContent = 'ТЫ ЧЕ ПАДЛА САЙТ ПАЛАМАЛ?!1';
		i = 1;
	} else {
		myHeading.textContent = 'НУ ВСЕ ПАДЛА ТЫ ПАПАЛ!';
	}
}
