	function validateForm(){
		var spans = document.getElementsByClassName('error');
		while(spans.length > 0)	{
			spans[0].parentElement.removeChild(spans[0]);
		}

		var name, lastname, pass, mail, select;
		name = document.getElementById('name').value;
		lastname = document.getElementById('lastname').value;
		pass = document.getElementById('input-password').value;
		mail = document.getElementById('input-email').value;
		select = document.getElementsByTagName('select')[0].value;

		function validar(value,mensaje,div_index,validation){
				if (validation){
					var span = document.createElement('span');
					span.innerHTML = mensaje;
					span.className = 'error';
					document.getElementsByTagName('div')[div_index].appendChild(span);
					return false;
				}
			return true;
		}
		if (name ==''){
			validar(name,'La primera letra debe ser mayúscula',1,!(/^[A-Z][a-z]*$/).test (name))
		}
		if (lastname=='') {
			validar(lastname,'La primera letra debe ser mayúscula',2,!(/^[A-Z][a-z]*$/).test (lastname));
		}
		if (mail=='') {
			validar(mail,'Ingrese un e-mail válido',3,!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test (mail));
		}
		if (pass=='') {
			validar(pass,'Elija otra contraseña',4,pass.length < 6 || pass  == 'password' || /^\d{6}$/.test(pass));
		}
		
		validar(name,'Campo requerido',1,name=='');
		validar(lastname,'Campo requerido',2,lastname=='');
		validar(mail,'Campo requerido',3,mail=='');
		validar(pass,'Campo requerido',4,pass=='');
		validar(select,'Debes elegir una opcion',5,select=='0');
		
			
	}



