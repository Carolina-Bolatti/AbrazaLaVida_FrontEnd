function valida_envia() {
  
    if (document.fvalida.firstname.value.length == 0){
        alert("Tiene que escribir su nombre");
        document.fvalida.firstname.focus()
        return 0;
    
    }else if (document.fvalida.lastname.value.length == 0){
      alert("Tiene que escribir su apellido");
      document.fvalida.lastname.focus()
      return 0;
     
    }else if (document.fvalida.lastname.value.length == 0){
        alert("Tiene que escribir su mail");
        document.fvalida.lastname.focus()
        return 0;  

    }else if (document.fvalida.lastname.value.length == 0){
        alert("Tiene que escribir su mensaje");
        document.fvalida.lastname.focus()
        return 0;     

    }else {
    alert("Gracias por enviar el formulario")
    document.fvalida.submit(); 
    }



    
}



function validarEntero(valor) {

valor = parseInt(valor)

if (isNaN(valor)) {
  
  return ""
} else {
  
  return valor
}

}




