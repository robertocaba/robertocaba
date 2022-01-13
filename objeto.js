
    //creamos el objeto
    const test =
    [{numPreg:"1- Según el nuevo Reglamento europeo, el consentimiento debe ser:",
    resp1:"Libre, tácito, informado.",
    resp2:"Libre, específico, informado e inequívoco.",
    resp3:"Libre y específico valiendo las casillas preseleccionadas.",
    resp4:"Ninguna de las anteriores.",
    acierto:2},
    {numPreg:"2- El principio de minimización se refiere expresamente a:",
    resp1:"La cantidad limitada de los datos recogidos.",
    resp2:"El número de personas que acceden a los mismos.",
    resp3:"El periodo del tratamiento.", 
    resp4:"Las tres anteriores.",
    acierto:4},
    {numPreg:"3- Los prestadores de servicios de cloud tienen la consideración de:",
    resp1:"Responsables del tratamiento.",
    resp2:"Encargados del tratamiento.",
    resp3:"Subencargados del tratamiento.",
    resp4:"Titulares de datos personales.",
    acierto:2},
    {numPreg:"4- El derecho al olvido es el derecho:",
    resp1:"Que supone la posibilidad de que el titular de dichos datos obtenga la modificación de sus datos personales inexactos o incompletos.",
    resp2:"Que tiene por objeto la eliminación de los datos persona.",
    resp3:"De supresión.",
    resp4:"Las dos anteriores.",
    acierto:4},
    {numPreg:"5- Las casillas premarcadas:",
    resp1:"Constituyen un consentimiento válido.",
    resp2:"No constituye un consentimiento válido.",
    resp3:"Depende",
    resp4:"Ninguna de las anteriores.",
    acierto:2},
    {numPreg:"6- ¿Cuál de las siguientes entidades necesitan un DPO?",
    resp1:"Entidades que exploten redes y presten servicios de telecomunicaciones.",
    resp2:"Operadores de juego a través de canales telemáticos.",
    resp3:"Colegios profesionales, hospitales y colegios.",
    resp4:"Todas son correctas.",
    acierto:4},
    {numPreg:"7- ¿Cuál de las siguientes afirmaciones no es una excepción frente a la regla general para el envío de comunicaciones comerciales por medios electrónicos?",
    resp1:"Se pueden enviar comunicaciones comerciales si existe una relación comercial previa.",
    resp2:"Se han obtenido los datos lícitamente.",
    resp3:"La comunicación es relativa a los mismos productos y servicios contratados.",
    resp4:"Los datos estaban disponibles en Internet.",
    acierto:4},
    {numPreg:"8- ¿Cuál de las siguientes afirmaciones es correcta conforme a la normativa que regula la firma electrónica?",
    resp1:"La firma electrónica puede ser utilizada como un medio de identificación del firmante.",
    resp2:"La firma electrónica no se puede utilizar para identificar a un firmante sin su consentimiento pues sería una infracción de la normativa de protección de datos.",
    resp3:"La firma electrónica siempre incluye una firma manual escaneada.",
    resp4:"Ninguna de las anteriores es correcta.",
    acierto:1},
    {numPreg:"9- ¿Cuál de las siguientes afirmaciones es correcta?",
    resp1:"El derecho de reproducir un software equivale a darle al «play» para que funcione.",
    resp2:"El derecho de transformación incluye la capacidad de hacer nuevas versiones del software.",
    resp3:"El software solo se protege a través de patentes.",
    resp4:"El software no se puede proteger en ningún caso pues afectaría a la capacidad de innovación.",
    acierto:2},
    {numPreg:"10- La suplantación de identidad en Internet que persigue apropiarse de datos confidenciales de los usuarios para menoscabar patrimonios ajenos se denomina:",
    resp1:"Phising.",
    resp2:"Suplantación de identidad.",
    resp3:"Pharming.",
    resp4:"Ciberfraude.",
    acierto:1}];   

    let button = document.getElementById("myButton");
    let marker = document.getElementById("mymarker");
    let click=0;
    let bien=0;
    let i = 0;
    let resultados = [];
    
   
    // mostramos el objeto
       
    button.onclick = function(){
        console.log(this.id+": Clicked!");
        if (click <10){    
            document.getElementById("demo").innerHTML= 
                `<div>
                    <h2>${test[i].numPreg}</h2
                        <form name=vRespuesta>
                    <ul style="list-style-type:none;">
                        <li><input type="radio" id = "${test[i].resp1}" name = "respuesta" value=1> <label for = "resp[11]"> ${test[i].resp1}</label> </li>
                        <li><input type="radio" id = "${test[i].resp2}" name = "respuesta" value=2> <label for = "resp[11]">${test[i].resp2}</label> </li>
                        <li><input type="radio" id = "${test[i].resp3}" name = "respuesta" value=3> <label for = "resp[11]">${test[i].resp3}</label> </li>
                        <li><input type="radio" id = "${test[i].resp4}" name = "respuesta" value=4> <label for = "resp[11]">${test[i].resp4}</label> </li>
                    </ul>
                    </form>
                </div>`
            
            click ++;
            i =click;
          //crea variable referencia que selecciona del input name del formulario.
          const referencia = document.querySelectorAll('input[name = "respuesta"]');
            //   console.log(referencia);
            //Muestra NodeList(4) [input#11, input#12, input#13, input#14]
          referencia.forEach(elemento => {
                elemento.addEventListener("click", () => {
             console.log(elemento.value);
            // del input seleccionado nos muestra el valor
            console.log(test[i-1].acierto);
            console.log(elemento.value);
                if (elemento.checked){
                    if (elemento.value == test[i-1].acierto) {
                        
                        bien++;
                        console.log(bien);
                    }
                }
                })
            })   
            
        }
        else 
        if (click = 10){
            document.getElementById("demo").innerHTML= `${"el resultado es:"} ${bien} ${"de 10"} ${"salir"}`
            //click = 0;

        }
        update_marker();
    }
       
        function update_marker(){
           
            marker.innerHTML = "Click: "+ click + " ";
            marker.innerHTML += "bien: "+ bien + " ";
            
        }
        
   