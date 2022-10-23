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
    

