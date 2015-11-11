



					   function elementos (){

										/*LISTA DESPLEGABLE PARA LA ZONA CENTRAL*/

					   		/*creando ele elemento LI que contiene la pagina para Chalatenango */
					   		var chal = document.createElement("li");
					   		var ancla1 = document.createElement("a");
					   		ancla1.setAttribute("href","Departamentos/Chalatenango/Chalatenango.html")
					   		var sp1 = document.createElement("span");
					   		sp1.innerHTML = "Chalatenango";

					   			/*uniendo elementos*/
					   		ancla1.appendChild(sp1);
					   		chal.appendChild(ancla1);
					   		/*var item1 = document.getElementsByClassName("dropdown-menu").[1];*/
					   		var item1 = document.getElementById("ListaCentral");
					   		item1.appendChild(chal);


					   			/*creando ele elemento LI que contiene la pagina para La Libertad */
					   		var lali = document.createElement("li");
					   		var ancla2 = document.createElement("a");
					   		ancla2.setAttribute("href","Departamentos/La libertad/LaLibertad.html");
					   		var sp2 = document.createElement("span");
					   		sp2.innerHTML = "La libertad";

					   			/*uniendo elementos*/
					   		ancla2.appendChild(sp2);
					   		lali.appendChild(ancla2);
					   		var item2 = document.getElementById("ListaCentral");
					   		item2.appendChild(lali);

					   		/*creando ele elemento LI que contiene la pagina para San Salvador */

					   		var ssal = document.createElement("li");
					   		var ancla3 = document.createElement("a");
					   		ancla3.setAttribute("href","Departamentos/San Salvador/San Salvador.html");
					   		var sp3 = document.createElement("span");
					   		sp3.innerHTML = "San Salvador";

					   		/*uniendo elementos*/

					   		ancla3.appendChild(sp3);
					   		ssal.appendChild(ancla3);
					   		var item3 = document.getElementById("ListaCentral");
					   		item3.appendChild(ssal);

					   		/*creando ele elemento LI que contiene la pagina para Cuscatlan */

					   		var cusc = document.createElement("li");
					   		var ancla4 = document.createElement("a");
					   		ancla4.setAttribute("href","Departamentos/Cuscatlan/Cuscatlan.html");
					   		var sp4 = document.createElement("span");
					   		sp4.innerHTML = "Cuscatlan";

					   		/*uniendo elementos*/

					   		ancla4.appendChild(sp4);
					   		cusc.appendChild(ancla4);
					   		var item4 = document.getElementById("ListaCentral");
					   		item4.appendChild(cusc);

					   		/*creando ele elemento LI que contiene la pagina para La Paz */

					   		var Lpz = document.createElement("li");
					   		var ancla5 = document.createElement("a");
					   		ancla5.setAttribute("href","Departamentos/La Paz/La Paz.html");
					   		var sp5 = document.createElement("span");
					   		sp5.innerHTML = "La Paz";

					   		/*uniendo elementos*/

					   		ancla5.appendChild(sp5);
					   		Lpz.appendChild(ancla5);
					   		var item5 = document.getElementById("ListaCentral");
					   		item5.appendChild(Lpz);

					   		/*creando ele elemento LI que contiene la pagina para Cabanas */

					   		var caba = document.createElement("li");
					   		var ancla6 = document.createElement("a");
					   		ancla6.setAttribute("href","Departamentos/Cabanas/Cabanas.html");
					   		var sp6 = document.createElement("span");
					   		sp6.innerHTML = "Cabanas";

					   		/*uniendo elementos*/

					   		ancla6.appendChild(sp6);
					   		caba.appendChild(ancla6);
					   		var item6 = document.getElementById("ListaCentral");
					   		item6.appendChild(caba);




					   				/*LISTA DESPLEGABLE PARA LA ZONA OCCIDENTAL*/

				          /*creando ele elemento LI que contiene la pagina para SANTA ANA */
					   		var sana = document.createElement("li");
					   		var ancla7 = document.createElement("a");
					   		ancla7.setAttribute("href","Departamentos/Ahuachapan/Ahuachapan.html")
					   		var sp7 = document.createElement("span");
					   		sp7.innerHTML = "Santa Ana";

					   			/*uniendo elementos*/
					   		ancla7.appendChild(sp7);
					   		sana.appendChild(ancla7);
					   		
					   		var item7 = document.getElementById("Listaoccidente");
					   		item7.appendChild(sana);

					   		 /*creando ele elemento LI que contiene la pagina para Ahuachapan */

					   		var ahuch = document.createElement("li");
					   		var ancla8 = document.createElement("a");
					   		ancla8.setAttribute("href","Departamentos/Ahuachapan/Ahuachapan.html")
					   		var sp8 = document.createElement("span");
					   		sp8.innerHTML = "Ahuachapán";

					   			/*uniendo elementos*/
					   		ancla8.appendChild(sp8);
					   		ahuch.appendChild(ancla8);
					   		
					   		var item8 = document.getElementById("Listaoccidente");
					   		item8.appendChild(ahuch);

					   		/*creando ele elemento LI que contiene la pagina para Sonsonate */

					   		var sonso = document.createElement("li");
					   		var ancla9 = document.createElement("a");
					   		ancla9.setAttribute("href","Departamentos/Sonsonate/Sonsonate.html")
					   		var sp9 = document.createElement("span");
					   		sp9.innerHTML = "Sonsonate";

					   			/*uniendo elementos*/
					   		ancla9.appendChild(sp9);
					   		ahuch.appendChild(ancla9);
					   		
					   		var item9 = document.getElementById("Listaoccidente");
					   		item9.appendChild(sonso);



					   		/*<li><a href='Departamentos/Usulutan/Usulutan.html'><span>Usulatán</span></a></li>
				                 <li><a href='Departamentos/San Miguel/SanMiguel.html'><span>San Miguel</span></a></li>
				                 <li><a href='Departamentos/Morazan/Morazan.html'><span>Morazán</span></a></li>
				                 <li><a href='Departamentos/La Union/La Union.html'><span>La Unión</span></a></li>*/


												/*LISTA DESPLEGABLE PARA LA ZONA ORIENTAL*/
				                 	
				                 	/*creando ele elemento LI que contiene la pagina para usulutan */

				            var usulu = document.createElement("li");
					   		var ancla10 = document.createElement("a");
					   		ancla10.setAttribute("href","Departamentos/Usulutan/Usulutan.html")
					   		var sp10 = document.createElement("span");
					   		sp10.innerHTML = "Usulutan";

					   			/*uniendo elementos*/
					   		ancla10.appendChild(sp10);
					   		usulu.appendChild(ancla10);
					   		
					   		var item10 = document.getElementById("Listaoriente");
					   		item10.appendChild(usulu);


					   				/*creando ele elemento LI que contiene la pagina para San Miguel */
					   		var sanmi= document.createElement("li");
					   		var ancla11 = document.createElement("a");
					   		ancla11.setAttribute("href","Departamentos/San Miguel/SanMiguel.html")
					   		var sp11 = document.createElement("span");
					   		sp11.innerHTML = "San Miguel";

					   			/*uniendo elementos*/
					   		ancla11.appendChild(sp11);
					   		usulu.appendChild(ancla11);
					   		
					   		var item11 = document.getElementById("Listaoriente");
					   		item11.appendChild(sanmi);

					   		/*creando ele elemento LI que contiene la pagina para Morazan */

					   		var moraz= document.createElement("li");
					   		var ancla12 = document.createElement("a");
					   		ancla12.setAttribute("href","Departamentos/Morazan/Morazan.html")
					   		var sp12 = document.createElement("span");
					   		sp12.innerHTML = "Morazan";

					   			/*uniendo elementos*/
					   		ancla12.appendChild(sp12);
					   		usulu.appendChild(ancla12);
					   		
					   		var item12 = document.getElementById("Listaoriente");
					   		item12.appendChild(moraz);

					   	/*creando ele elemento LI que contiene la pagina para La Union */

					   		var launi= document.createElement("li");
					   		var ancla13 = document.createElement("a");
					   		ancla13.setAttribute("href","Departamentos/La Union/La Union.html")
					   		var sp13 = document.createElement("span");
					   		sp13.innerHTML = "La Union";

					   			/*uniendo elementos*/
					   		ancla13.appendChild(sp13);
					   		usulu.appendChild(ancla13);
					   		
					   		var item13 = document.getElementById("Listaoriente");
					   		item13.appendChild(launi);


					   }

					   if(window.addEventListener){
							window.addEventListener("load",elementos,false);
								}
							else 
								if (window.attachEvent){
							window.attachEvent("onload",elementos);
							}
