const estados = document.getElementById('estados');

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then(estadosApi => {
        return estadosApi.json();
    })
    .then(estadosJson => {

        for(i = 0; i < estadosJson.length; i++){
        console.log(estados.innerHTML += '<option ' + 'value="' + estadosJson[i].sigla + '">' + estadosJson[i].nome + '</option>')
        }
    })
    .catch(error => {
        console.log(error)
    });
        
    