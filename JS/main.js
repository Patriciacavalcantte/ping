const msg = 'Wait, are you kidding me? Invalid email address, Dude';
const form = document.querySelector('form');
const button = form.querySelector('[type="submit"]');

const error = document.createElement('p');
error.classList.add('error_text');
error.textContent = msg;

function checkEmail (e) {
	e.preventDefault();
	const email = e.target.querySelector('[type="email"]').value;
	if (!validateEmail(email)) {
		form.classList.add('error');
		form.insertBefore(error, button);
	} else {
		form.removeChild(error);
		form.classList.remove('error');
	}
}

function validateEmail (email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
form.addEventListener('submit', checkEmail);

//Animação do Título//

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}
const titulo = document.querySelector('h2');
typeWriter(titulo);



