const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email') ;
const data_nasc = document.getElementById('data_nasc');
const estado_civil = document.getElementById('estado_civil');

form.addEventListener("submit", (e) => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value;
	const emailValue = email.value;
	const data_nascValue = data_nasc.value;
	const estado_civil = estado_civil.value;
	
	if (usernameValue.length < 15){
		setErrorFor(username, "O nome de usuário precisa ter no mínimo 15 caracteres.");
	} else {
		setSuccessFor(username);
	}
	
	 if (emailValue === "") {
		setErrorFor(email, "O email é obrigatório.");
	} else if (!checkEmail(emailValue)) {
		setErrorFor(email, "Por favor, insira um email válido.");
	} else if (emailValue.length < 10){
		setErrorFor(email,"O email precisa ter no mínimo 10 caracteres.");
	} else {
		setSuccessFor(email);
	}
	
	if (data_nascValue === ""){
		setErrorFor(data_nasc, "A data de nascimento deve está preenchida.");
	} else {
		setSuccessFor(data_nasc);
	}
	
	if (estado_civil === "solteiro") { 
	}
	
	const formControls = form.querySelectorAll(".form-control");
		
	const formIsValid = [...formControls].every((formControl) => {
		return formControl.className === "form-control success";
	});
		
	if (formIsValid) {
		window.alert('O formulário está 100% válido!');
	}
	
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	
	//Adicionar a menssagem de erro
	small.innerText = message;
	
	//Adicionar  a classe de erro
	formControl.className = "form-control error"
}

function setSuccessFor(input, message) {
	const formControl = input.parentElement;
	
	// Adicionar a classe de sucesso
	formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email
  );
}