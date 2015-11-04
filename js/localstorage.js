function comenzar(){

	var boton = document.getElementById("guardar");
	boton.addEventListener("click",itemnuevo,false);
}

function itemnuevo(){
	var nombre= document.getElementById("nombre").value;
	var comentario =document.getElementById("comentario").value;

	//sessionStorage[nombre]=comentario;
	localStorage.setItem(nombre,comentario);

	leer(nombre);
	document.getElementById("nombre").value="";
	var comentario =document.getElementById("comentario").value="";


}

function leer(nombre){

	var datosAl= document.getElementById("datos_Alacenados");
	
	//var valores=sessionStorage[nombre];

	datosAl.innerHTML='<div><button onclick="eliminar()">Eliminar todo</button></div>';

	
	for(i=0;i<localStorage.length;i++){
		var nombre=localStorage.key(i);
		var comentario=localStorage.getItem(nombre)

		datosAl.innerHTML +="<div>" + nombre + "--" + comentario + "</div>";

	}
}

function eliminar(){
	if(confirm("Se borran todos los datos guardados")){

		localStorage.clear();
		leer();
	}
}







window.addEventListener("load",comenzar,false);