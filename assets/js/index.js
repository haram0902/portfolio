let browserLanguage = navigator.language || navigator.userLanguage;

const defaultLanguage = browserLanguage === 'ko' ? 'ko' : 'en'

function setLanguage(language) {
	const koEls = document.getElementsByClassName('ko');
	const enEls = document.getElementsByClassName('en');
	
	if (language === 'ko') {
		document.getElementById('lang-en').classList.remove('active');
		document.getElementById('lang-ko').classList.add('active');
		document.documentElement.lang = 'ko';
	}
	else {
		document.getElementById('lang-en').classList.add('active');
		document.getElementById('lang-ko').classList.remove('active');
		document.documentElement.lang = 'en';
	}
	
	for (el of koEls) {
		if (language === 'ko') {
			el.style.display = '';
		}
		else {
			el.style.display = 'none';
		}
	}
	
	for (el of enEls) {
		if (language === 'en') {
			el.style.display = '';
		}
		else {
			el.style.display = 'none';
		}
	}
}

window.onload = () => {
	if (defaultLanguage === 'ko') {
		document.getElementById('lang-ko').classList.add('active');
	}
	else {
		document.getElementById('lang-en').classList.add('active');
	}
	setLanguage(defaultLanguage);
};