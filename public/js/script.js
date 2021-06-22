// script page

const form= document.querySelector('#enviar')

form.addEventListener('submit', ()=>{
    const names= document.querySelector('#name')
    const emails= document.querySelector('#email')
    let name= names.value
    let email= emails.value
    if (name.length && email.length ){
        alert('Cadastro efetuado com sucesso!')
    }else{
        alert('Tente novamente!')
    }
})