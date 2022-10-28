//Funcion Formulario
const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDeFault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:{
            'Accept': 'application/json'    }
    })

    if(response.ok){
        this.reset()
        swal({
            title: "Mensaje enviado",
            text: "Gracias por tu consulta, responderemos a la brevedad",
            icon: "Success",
        });

    }
}
    
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





