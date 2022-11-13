
const formulario = document.querySelector('.form form');
const inputsDadosPessoais = document.querySelectorAll('.dados-pessoais > div > input');
const senha = document.getElementById('senha');
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
    if(!senha.value.match(strong)){
        e.preventDefault();
        senha.focus();
    }
    
})

senha.oninput = function(){
    if(senha.value.match(strong)){
        senha.style.outline = '1px solid green'
    }else if (senha.value.match(midium)){
        senha.style.outline = '1px solid yellow'
    }else {
        senha.style.outline = '1px solid red'
    }
}


