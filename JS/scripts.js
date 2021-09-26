let form = document.getElementById('formulário de registro');
let submit = document.getElementById('btn-submit');

// evento de envio do formulário, que valida os inputs
submit.addEventListener('clique', função(e){

    e.preventDefault();

    console.log('funcionou');

});