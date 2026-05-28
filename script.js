  const Nombre  = document.getElementById("nombre");
  const Edad  = parseInt(document.getElementById('edad').value);
  const Presupuesto   = parseInt(document.getElementById('presupuesto').value);
  const Seguro = document.getElementById("seguro");
  const   DestinoPreferido = document.getElementById("destinoPreferido");
  const  Temporada = document.getElementById("temporada");
  const divResultado = document.getElementById("resultado");
 
 
 
  function registrarViaje() {
 
    const Nombre = Nombre.value;
    const Edad = parseInt(Edad);
    const Presupuesto  = parseInt(Presupuesto.value);
    const Seguro  = Seguro.value;
    const DestinoPreferido = DestinoPreferido.value;
    const Temporada = Temporada.value;

 
    const errores = [];
    limpiarFeedbacks();
 

    if (nombre === "") {
      errores.push("El nombre del alumno es obligatorio.");
      mostrarError("fb-nombre", "Campo obligatorio");
    } else {
      mostrarOk("fb-nombre", "✓ OK");
    }
 

    if (Edad === "") {
      errores.push("La edad es obligatoria.");
      mostrarError("fb-edad", "Campo obligatorio");
    } else if ( Edad < 18 || Edad > 65) {
      errores.push("La edad tiene que ser entre 18 y 65 años.");
      mostrarError("fb-edad", "Edad inválida");
    } else {
      mostrarOk("fb-edad", "✓ OK");
    }
 

     if (Presupuesto === "") {
      errores.push("El presupuesto es obligatorio.");
      mostrarError("fb-presupuesto", "Campo obligatorio");
    } else if ( Presupuesto <= 500000) {
      errores.push("El presupuesto debe ser mayor a 500000.");
      mostrarError("fb-presupuesto", "Presupuesto inválido");
    } else {
      mostrarOk("fb-presupuesto", "✓ OK");
    }
 

    if (DestinoPreferido === "Bariloche" || DestinoPreferido ==="noPreferencia") {
      mostrarOk("fb-destino", "✓ OK");
    } else {
        errores.push("El destino seleccionado no corresponde a este paquete.");
      mostrarError("fb-destino", "El destino seleccionado no corresponde a este paquete.");
    }
 

    if (Temporada === "") {
      errores.push("Seleccioná la temporada.");
      mostrarError("fb-temporada", "Temporada requerida");
    } else {
      mostrarOk("fb-temporada", "✓ OK");
    }
    
    if (Seguro === "si") {
        mostrarOk("fb-seguro", "✓ OK");
    } else {
        errores.push("El paquete requiere que aceptes el seguro de viaje.");   
        mostrarError("fb-seguro", "Seguro requerido");
    }

    if (errores.length > 0) {
      divResultado.style.color  = "red";
      divResultado.style.border = "1px solid red";
      divResultado.style.padding = "8px";
      divResultado.innerHTML = "<strong>No se pudo registrar:</strong><br>"
                             + errores.join("<br>");
    } else {
      divResultado.style.color  = "green";
      divResultado.style.border = "1px solid green";
      divResultado.style.padding = "8px";
      divResultado.innerHTML = "<strong>Viaje registrado</strong><br>"
                             + "Nombre: " + Nombre + "<br>"
                             + "Edad: "  + Edad + "<br>"
                             + "Presupuesto: "   + Presupuesto + "<br>"
                             + "Seguro: "   + Seguro + "<br>"
                             + "Destino preferido: "   + DestinoPreferido + "<br>"
                             + "Temporada: "   + Temporada;
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
   fbTitulo.innerHTML = "";
   fbNombre.innerHTML = "";
   fbDias.innerHTML = "";
   fbEstado.innerHTML = "";
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