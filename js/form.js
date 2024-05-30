//Buescamos id
const formulario = document.getElementById("formulario");
const email = document.getElementById("email");
const btnSubmit = document.getElementById("btnSumit");
const servicios = document.getElementById("select");
const nombre = document.getElementById("usuario");
const telefono = document.getElementById("numero");
const mensaje = document.getElementById("mensaje");


const expresionRegular = /\S+@\S+\.\S+/;

let datosIngresados = [];


btnSubmit.addEventListener("click", (evento) => {

    //Validar nombre

    if (nombre.value === "") {

        Swal.fire({
            title: "User Name",
            text: "Please enter your name.",
            icon: "warning",
            confirmButtonColor: "#FF3131",
            confirmButtonText: "Okay"
            })
    
        return 
        
    }
    

//validar email

    if (expresionRegular.test(email.value)) { 

    }else{
        
        Swal.fire({
            title: "Email",
            text: "Please enter your email",
            icon: "warning",
            confirmButtonColor: "#FF3131",
            confirmButtonText: "Okay"
            })

        return;
    };

    //validar numero telefonico

    if (telefono.value === "") { 

        Swal.fire({
            title: "telefono",
            text: "Please enter your phone number",
            icon: "warning",
            confirmButtonColor: "#FF3131",
            confirmButtonText: "Okay"
            })

            return;
    };

        // validacion de que la opcion 1 no sea aceptada para enviar el formlario
    if(servicios.value == "1"){

        Swal.fire({
            title: "Select Topic",
            text: "Service unavailable, please try other option",
            icon: "warning",
            confirmButtonColor: "#FF3131",
            confirmButtonText: "Okay"
        })

        return 
    }


    //validar mensaje
    if (mensaje.value === "") { 

        Swal.fire({
            title: "message",
            text: "please enter a message",
            icon: "warning",
            confirmButtonColor: "#FF3131",
            confirmButtonText: "Okay"
            })

            return;
    };


    // si la opcion es 6 guadamos los elementos
    if (servicios.value === "6") {
        let elementosForm = Array.from(formulario.elements);

        //agragamos al array vacio
        elementosForm.forEach((elemento) => {
            if (elemento.type !== "button") {
                datosIngresados.push({ [elemento.name]: elemento.value });
            }
        });

        
        //convertimos en jsno
        let datosJson = JSON.stringify(datosIngresados);
        console.log(datosJson);
        datosIngresados = [];

        Swal.fire({
            title: "Message",
            text: "Thank you for your opinion",
            icon: "success",
            });

        formulario.reset()
        return 
        

        
        

        // validacion de que la opcion 1 no sea aceptada para enviar el formlario
    }if(servicios.value == "1"){

        Swal.fire({
            title: "Select Topic",
            text: "Service unavailable, please try other option",
            icon: "warning",
            confirmButtonColor: "#FF3131",
            confirmButtonText: "Okay"
        })

        return 
    }



    formulario.submit();
    formulario.reset();

})







