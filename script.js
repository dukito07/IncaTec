/* =========================================
   INSTU - JAVASCRIPT
========================================= */


/* =========================================
   FORMULARIO DE REGISTRO
========================================= */

const formulario = document.getElementById("registroForm");

const mensaje = document.getElementById("mensaje");


formulario.addEventListener("submit", function(event) {

    // Evita que la página se recargue
    event.preventDefault();


    // Obtener los valores
    const nombre = document.getElementById("nombre").value.trim();

    const correo = document.getElementById("correo").value.trim();

    const telefono = document.getElementById("telefono").value.trim();

    const carrera = document.getElementById("carrera").value;

    const terminos = document.getElementById("terminos").checked;


    // Limpiar mensaje anterior
    mensaje.innerHTML = "";


    /* =====================================
       VALIDACIÓN DE CAMPOS
    ===================================== */

    if (nombre === "") {

        mostrarError("Por favor, ingresa tu nombre completo.");

        return;
    }


    if (correo === "") {

        mostrarError("Por favor, ingresa tu correo electrónico.");

        return;
    }


    if (!validarCorreo(correo)) {

        mostrarError("Ingresa un correo electrónico válido.");

        return;
    }


    if (telefono === "") {

        mostrarError("Por favor, ingresa tu número de teléfono.");

        return;
    }


    if (telefono.length < 9) {

        mostrarError("El número de teléfono debe tener 9 dígitos.");

        return;
    }


    if (carrera === "") {

        mostrarError("Selecciona una carrera de interés.");

        return;
    }


    if (!terminos) {

        mostrarError(
            "Debes aceptar el registro de tus datos."
        );

        return;
    }


    /* =====================================
       REGISTRO CORRECTO
    ===================================== */

    mensaje.innerHTML = `
        <div class="mensaje-exito">
            ¡Registro exitoso, ${nombre}!<br>
            Gracias por tu interés en IncaTec.
        </div>
    `;


    // Mostrar información en consola
    console.log("===== REGISTRO INCATEC =====");

    console.log("Nombre:", nombre);

    console.log("Correo:", correo);

    console.log("Teléfono:", telefono);

    console.log("Carrera:", carrera);

    console.log("==========================");


    // Limpiar formulario
    formulario.reset();

});


/* =========================================
   FUNCIÓN PARA VALIDAR CORREO
========================================= */

function validarCorreo(correo) {

    const expresion =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return expresion.test(correo);
}


/* =========================================
   MOSTRAR ERROR
========================================= */

function mostrarError(texto) {

    mensaje.innerHTML = `
        <div class="mensaje-error">
            ${texto}
        </div>
    `;

}