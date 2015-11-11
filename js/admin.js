 	$(document).ready(function() {
        if (typeof(localStorage) === 'undefined' ) {
            alert('Your browser does not support HTML5 localStorage. Try upgrading.');
        } else {
					//load the items
            getItems(); 
        }
    });
	
var getItems = function() {
	
				var timeLog, logLength, i;				
        i = 0;
        logLength = localStorage.length-1; // SE DEFINE CUANTOS ITEMS HAY EN LA BD EMPEZANDO DE CERO
				timeLog = '';

        //AHORA SE ITERA ATRAVES DE CADA ITEM DE DATOS ALMACENADOS
        for (i = 0; i <= logLength; i++) {
						var itemKey, value, values, firstname, lastname, email, phone;
            //lets setup some variables for the key and values
            itemKey = localStorage.key(i);
						
            value = localStorage.getItem(itemKey);
						values = JSON.parse(value);
            firstname = values.fname;
            lastname = values.lname;
            email = values.email;
						phone = values.phone;
						job = values.job;
						primeuse = values.primeuse;
						cd_catalogue = values.cd;
						paper_catalogue = values.paper;
						price_deals = values.priceDeals;
						industry_info = values.industryInfo;

            //CUANDO SE OBTIENE EL ELEMENTO, SE AGREGA A LA TABLA 
            timeLog += '<tr id="'+itemKey+'" class="tableRow"><td>'+firstname+'</td><td>'+lastname+'</td><td>'+email+'</td><td>'+phone;
        }

        $("#theLog").append(timeLog); //ACTUALIZA LA TABLA CON LA LISTA DE ITEMS.-
				
				$(".tableRow").mouseenter(function() {
								$(this).children().children(".delete").show();
					});
				$(".tableRow").mouseleave(function() {
								$(this).children().children(".delete").hide();
					});
				
				$("#reset_list").click(function() {
								//alert("clicked");
								localStorage.clear();
								getItems(); 
					});
				
			$(".delete").click(function() {
								var itemId = $(this).parent().parent().attr('id');								
								//alert(itemId);
								localStorage.removeItem(itemId);
								getItems(); 
					});
    }