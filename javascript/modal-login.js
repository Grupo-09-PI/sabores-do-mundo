const modal = document.getElementById('modal-login');
const iconLogin = document.getElementById('btnMinhaConta');
const fecharModalIcon = document.querySelector('.fechar');

function iniciaModal(modalID) {
    modal.classList.add('mostrar')
}


iconLogin.addEventListener('click', function(){
    iniciaModal('modal-login')
})

function fechaModal(modalID){
    modal.classList.remove('mostrar')
}

fecharModalIcon.addEventListener('click', function(){
    fechaModal('modal-login')
})

modal.addEventListener('click', function(){
    fechaModal('modal-login')
})



