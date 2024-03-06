document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("entrada").addEventListener("input", manejarEntrada);
  var salidaTextArea = document.getElementById("salida");
  salidaTextArea.addEventListener("input", manejarEntrada);
  // Bloquear el área de salida
  salidaTextArea.readOnly = true;
});

function manejarEntrada(evento) {
  var elementoInput = evento.target;
  var valorInput = elementoInput.value;
  // Eliminar letras mayúsculas y caracteres especiales (excepto 'enter', 'imes', 'ai', 'ober', 'ufat' en la función de descifrado)
  var valorSanitizado = valorInput.replace(/[^a-z\s]/g, "");
  elementoInput.value = valorSanitizado;
}


// funcion de encriptado
function encryptText() {
    var text = document.getElementById("entrada").value.toLowerCase();
    var result = encrypt(text);
    document.getElementById("salida").value = result;
}

// funcion de desencriptado
function decryptText() {
    var text = document.getElementById("entrada").value.toLowerCase();
    var result = decrypt(text);
    document.getElementById("salida").value = result;
}
  
    if (option === "encrypt") {
      // Llamada a la función de cifrado
      result = encrypt(text);
    } else if (option === "decrypt") {
      // Llamada a la función de descifrado
      result = decrypt(text);
    }
  
    document.getElementById("result").value = result;
  
  
  function encrypt(text) {
    // Aplicar el cifrado
    text = text.replaceAll("e", "enter");
    text = text.replaceAll("i", "imes");
    text = text.replaceAll("a", "ai");
    text = text.replaceAll("o", "ober");
    text = text.replaceAll("u", "ufat");
    return text;
  }
  
  function decrypt(text) {
    // Aplicar el descifrado
    text = text.replaceAll("enter", "e");
    text = text.replaceAll("imes", "i");
    text = text.replaceAll("ai", "a");
    text = text.replaceAll("ober", "o");
    text = text.replaceAll("ufat", "u");
    return text;
  }
  
  function copi() {
    var copyText = document.getElementById("salida");
    var inputText = document.getElementById("entrada");

    if (copyText.value.trim() === "") {
        // Muestra mensaje en el área de descifrado
        copyText.value = "No hay texto para copiar. Por favor, ingresa algún texto.";

        // Borra el mensaje después de 2 segundos
        setTimeout(function () {
            copyText.value = "";
        }, 2000); // 2000 milisegundos (2 segundos)
    } else {
        // Selecciona y copia
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");

        // Muestra un mensaje en el área de descifrado y borra el texto encriptado del área de entrada
        copyText.value += "\nTexto copiado: " + copyText.value;
        inputText.value = "";

        // Borra el mensaje después de 2 segundos
        setTimeout(function () {
            copyText.value = "";
        }, 2000); // 2000 milisegundos (2 segundos)
    }
}