const nombreInput = document.getElementById("nombre");
const edadInput = document.getElementById("edad");
const presupuestoInput = document.getElementById("presupuesto");
const seguroInput = document.getElementById("seguro");
const destinoInput = document.getElementById("destinoPreferido");
const temporadaInput = document.getElementById("temporada");
const resultadoDiv = document.getElementById("resultado");



function registrarViaje() {

    const nombre = nombreInput.value.trim();
    const edad = parseInt(edadInput.value.trim(), 10);
    const presupuesto = parseInt(presupuestoInput.value.trim(), 10);
    const seguro = seguroInput.value;
    const destinoPreferido = destinoInput.value;
    const temporada = temporadaInput.value;
    const errores = [];

    limpiarFeedbacks();

    if (nombre === "") {
      errores.push("El nombre del alumno es obligatorio.");
      mostrarError("fb-nombre", "Campo obligatorio");
    } else {
      mostrarOk("fb-nombre", "✓ OK");
    }

    if (edadInput.value.trim() === "" || isNaN(edad)) {
      errores.push("La edad es obligatoria.");
      mostrarError("fb-edad", "Campo obligatorio");
    } else if (edad < 18 || edad > 65) {
      errores.push("La edad tiene que ser entre 18 y 65 años.");
      mostrarError("fb-edad", "Edad inválida");
    } else {
      mostrarOk("fb-edad", "✓ OK");
    }

    if (presupuestoInput.value.trim() === "" || isNaN(presupuesto)) {
      errores.push("El presupuesto es obligatorio.");
      mostrarError("fb-presupuesto", "Campo obligatorio");
    } else if (presupuesto <= 500000) {
      errores.push("El presupuesto debe ser mayor a 500000.");
      mostrarError("fb-presupuesto", "Presupuesto inválido");
    } else {
      mostrarOk("fb-presupuesto", "✓ OK");
    }

    if (destinoPreferido !== "bariloche" && destinoPreferido !== "noPreferencia") {
      errores.push("El destino seleccionado no corresponde a este paquete.");
      mostrarError("fb-destino", "El destino seleccionado no corresponde a este paquete.");
    } else {
      mostrarOk("fb-destino", "✓ OK");
    }

    if (temporada === "") {
      errores.push("Seleccioná la temporada.");
      mostrarError("fb-temporada", "Temporada requerida");
    } else {
      mostrarOk("fb-temporada", "✓ OK");
    }

    if (seguro === "si") {
      mostrarOk("fb-seguro", "✓ OK");
    } else {
      errores.push("El paquete requiere que aceptes el seguro de viaje.");
      mostrarError("fb-seguro", "Seguro requerido");
    }

    if (errores.length > 0) {
      resultadoDiv.style.color = "red";
      resultadoDiv.style.border = "1px solid red";
      resultadoDiv.style.padding = "8px";
      resultadoDiv.innerHTML = "<strong>No se pudo registrar:</strong><br>" + errores.join("<br>");
    } else {
      resultadoDiv.style.color = "green";
      resultadoDiv.style.border = "1px solid green";
      resultadoDiv.style.padding = "8px";
      resultadoDiv.innerHTML = "<strong>Viaje registrado</strong><br>"
                             + "Nombre: " + nombre + "<br>"
                             + "Edad: "  + edad + "<br>"
                             + "Presupuesto: "   + presupuesto + "<br>"
                             + "Seguro: "   + seguro + "<br>"
                             + "Destino preferido: "   + destinoPreferido + "<br>"
                             + "Temporada: "   + temporada;
    }
  }
 

  function mostrarError(id, msg) {
    const el = document.getElementById(id);
    el.innerHTML = msg;
    el.style.color = "red";
  }
 
  function mostrarOk(id, msg) {
    const el = document.getElementById(id);
    el.innerHTML = msg;
    el.style.color = "green";
  }
 
  function limpiarFeedbacks() {
    document.getElementById("fb-nombre").innerHTML = "";
    document.getElementById("fb-edad").innerHTML = "";
    document.getElementById("fb-seguro").innerHTML = "";
    document.getElementById("fb-presupuesto").innerHTML = "";
    document.getElementById("fb-destino").innerHTML = "";
    document.getElementById("fb-temporada").innerHTML = "";
  }
 
  function limpiarFormulario() {
    Nombre.value  = "";
    Edad.value  = "";
    Presupuesto.value    = "";
    Seguro.value = "";
    DestinoPreferido.value = "";
    Temporada.value = "";
    divResultado.innerHTML     = "";
    limpiarFeedbacks();
  }