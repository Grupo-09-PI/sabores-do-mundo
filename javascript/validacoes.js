
const formulario = document.querySelector('.form form');
const inputsDadosPessoais = document.querySelectorAll('.dados-pessoais > div > input');
const inputCep = document.querySelectorAll('.dados-endereco > div > input');
const inputDadosRua = document.querySelectorAll('.dados-endereco > div.dados-rua > div > input');
const inputDadosRuaCompleto = document.querySelectorAll('.dados-endereco > div.dados-rua-completo > input');
const inputEmail = document.querySelectorAll('.dados-contato > div > input')
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmar-senha');
const strong =  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
const midium = / ((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/

formulario.addEventListener('submit', function (e){
    inputsDadosPessoais.forEach(input => {
        if(input.value == ''){
            e.preventDefault();
            document.querySelector('.err-'+input.id).classList.remove('invisible')
        } else {
            document.querySelector('.err-'+input.id).classList.add('invisible')
        }
    });
    inputCep.forEach(input => {
        if(input.value == ''){
            e.preventDefault();
            document.querySelector('.err-cep').classList.remove('invisible')
        }else {
            document.querySelector('.err-cep').classList.add('invisible')
        }
    });
    inputDadosRua.forEach(input => {
        if(input.value == ''){
            document.querySelector('.err-'+input.id).classList.remove('invisible')
            e.preventDefault();
        } else {
            document.querySelector('.err-'+input.id).classList.add('invisible')
        }
    });
    inputEmail.forEach(input => {
        if(input.value == ''){
            document.querySelector('.err-'+input.id).classList.remove('invisible')
            e.preventDefault();
        } else {
            document.querySelector('.err-'+input.id).classList.add('invisible')
        }
    });

    if(!senha.value.match(strong)){
        e.preventDefault();
        senha.focus();
    }
});

senha.oninput = function(){
    if(senha.value.match(strong)){
        senha.style.outline = '1px solid green'
    }else if (senha.value.match(midium)){
        senha.style.outline = '1px solid yellow'
    }else {
        senha.style.outline = '1px solid red'
    }
}


