let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOK = false
let assuntoOk =false
let mapa =document.querySelector('mapa')

nome.style.width = '100%'
email.style.width = '100%'

function ValidaNome () {
    if(nome.value.length < 3) {
        let txt =document.querySelector('#txtNome')
        txtNome.innerHTML ="Nome invalido"
        txtNome.style.color ="red"
    }
    else{
        txtNome.style.innerHTML="Nome Válido"
        txtNome.style.color="green"
        nomeOk= true
    }
}


function ValidaEmail(){
    let txtEmail =document.querySelector("#txtEmail")

    if(email.value.indexOF('@')==1 || email.value.indexOF('.')==1){
        txtEmail.innerHTML="E-mail inválido"
        txtEmail.style.color="red"
    }
    else{
        txtEmail.innerHTML="E-mail válido"
        txtEmail.style.color="green"
        emailOK=true
    }
}
function ValidaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >=100){
        txtAssunto.innerHTML = '<Texto muito grande, digite no máximo 100 caracteres>'
        txtAssunto.style.color="red"
        txtAssunto.style.display='block'
    }
    else{
        txtAssunto.style.display='none'
        assuntoOk=true
    }
}
function enviar(){
    if(nomeOk== true && emailOK==true && assuntoOk==true){
        alert('Formulário enviado com sucesso!')
    }
    else{
        alert('Preencha o formulário corretamente antes de enviar ')
    }
}
function mapaZoom(){
mapa.style.width='800px'
mapa.style.height='600px'
}
function mapaNormal(){
    mapa.style.width='400px'
    mapa.style.height='250px'

}