	function validateForm(){
		var spans = document.getElementsByClassName('error');
		while(spans.length > 0)	{
		/*el metodo de la variable span en su declaracion arrojara un arreglo 
		con .length nos referimos al numero de elementosque hay dentro del arreglo
		Mientras el numero de elementos del arreglo sea mayor a 0 entonces
		del elemento padre spans[0] remueve a su hijo.*/	
			spans[0].parentElement.removeChild(spans[0]);
		}

		var name, lastname, pass, mail, select;
		name = document.getElementById('name').value;
		lastname = document.getElementById('lastname').value;
		pass = document.getElementById('input-password').value;
		mail = document.getElementById('input-email').value;
		select = document.getElementsByTagName('select')[0].value;

		function validar(value,mensaje,div_index,validation){
/*esta funcion mostrara los mensajes correspondientes de validacion para cada input y ademas 
aplicara su REGEX gracias a la condicion que perimite mostrar o eliminar los mensajes cuando el valor del input
sea el adecuado a la REGEX mediante el index que resulta de buscar a los divs que anidaran a los span(mensajes)*/
				if (validation){
					var span = document.createElement('span');
						span.innerHTML = mensaje;
						span.className = 'error';
						document.getElementsByTagName('div')[div_index].appendChild(span);
					/*appendChild incrusta el elemento span en el div directamente en el html. 
					pero solo mientras la funcion de ejecuta, osea que sera temporal*/
					return false;
				}
			return true;
		}
		if (name  !==''){
			validar(name,'La primera letra debe ser mayúscula',1,!(/^[A-Z][a-z]*$/).test (name));

		}
		if (lastname !=='') {
			validar(lastname,'La primera letra debe ser mayúscula',2,!(/^[A-Z][a-z]*$/).test (lastname));
		}
		if (mail !=='') {
			validar(mail,'Ingrese un e-mail válido',3,!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test (mail));
		}
		if (pass !=='') {
			validar(pass,'Elija otra contraseña',4,pass.length < 6 || pass  == 'password' || /^\d{6}$/.test(pass));
		}
/*Estas condiciones permiten validar que el valor ingresado sea el correcto siempre y cuando exista un valor dentro del campo*/

		validar(name,'Campo requerido',1,name=='');
		validar(lastname,'Campo requerido',2,lastname=='');
		validar(mail,'Campo requerido',3,mail=='');
		validar(pass,'Campo requerido',4,pass=='');
		validar(select,'Debes elegir una opcion',5,select=='0');
//Aqui la validacion es que el campo este completado, es la misma para todos
}



