$(document).ready(function() {
	var $email = $('#email'), $nameInput = $('#nameInput'), $password = $('#password'),$checkBox =$('#checkBox'), $doneBtn = $('#done-btn'), $CODE_TO_VALIDATE_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, $smile_accounts = JSON.parse(localStorage.getItem('users')), inputs = document.getElementsByClassName('formulario__input'), $user, $email_account, $password_account, $login_redirect =$('#login-redirect');

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
      if (this.value.length >= 1) {
        this.nextElementSibling.classList.add('fijar');
      } else {
        this.nextElementSibling.classList.remove('fijar');
      }
    });
  }
	$email.on('input', validateEmail);
	$password.on('input', validatePassword);
	$nameInput.on('input', validateName);
	$checkBox.on('click', agreeWithTerms);
	$doneBtn.click(enableDisable);
	$login_redirect.click(go_to_login);
	function go_to_login(){
		window.location.replace("view/login.html");
	}

	function validateName() {
		console.log($nameInput.val());
		$user = $nameInput.val();
		return ($nameInput.val().length >= 3);
	};

	function validateEmail() {
		console.log($email.val());
		$email_account = $email.val();
    return ($CODE_TO_VALIDATE_EMAIL.test($email.val()));
  };

	function validatePassword() {
		console.log($password.val());
		$password_account = $password.val();
		return ($password.val().length >= 8);
	}

	function agreeWithTerms() {
		console.log($checkBox.prop("checked"));
		return ($checkBox.prop("checked"));
	};

	function finalValidation(){
	 return validateEmail() && validateName() && validatePassword() && agreeWithTerms();
  };

	function enableDisable(e) {
		debugger;
		e.preventDefault();
		if(finalValidation()) {
			var config = {
		    apiKey: 'AIzaSyApZ1KLdWqYhreGGncB-WjiZ3PVa6mf_tw',
		    authDomain: 'drag-an-drop.firebaseapp.com',
		    databaseURL: 'https://drag-an-drop.firebaseio.com',
		    projectId: 'drag-an-drop',
		    storageBucket: 'drag-an-drop.appspot.com',
		    messagingSenderId: '259125372032'
		  };
		  firebase.initializeApp(config);
			//Get elements

			$smile_accounts.unshift({name:$user, email:$email_account, password: $password_account});
		  localStorage.setItem('users', JSON.stringify($smile_accounts));
			window.location.replace('view/login.html');

			//Get email and pass
				const fire_email = document.getElementById('email').value;
				const fire_pass = document.getElementById('password').value;
				const auth = firebase.auth();
				//Sign in
				const promise = auth.createUserWithEmailAndPassword(fire_email, fire_pass);


			//Add a realtime listener
			firebase.auth().onAuthStateChanged(firebaseUser => {
				if(firebaseUser) {

				} else {
					console.log('not logged in');
				}
			})

			;
		}
	}
});
