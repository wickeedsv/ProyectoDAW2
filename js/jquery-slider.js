var i = 0;
		$(document).on("ready", main);

		function main(){
			var control = setInterval(cambiarSlider, 4000);
			$("#slider .ocultar").hide();
		}

		function cambiarSlider(){
			i++;
			if(i == $("#slider img").size()){
				i = 0;
			}
			$("#slider img").hide();
			$("#slider img").eq(i).fadeIn("medium");
		}//fin del slider

		$(document).ready(function () {

		    $("#boton").click(function () {
		        $("#registrar").modal({ backdrop: "static" });
		    });
		});