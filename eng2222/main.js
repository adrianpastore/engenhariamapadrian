const cidade = document.querySelector('#cidade');
const rua = document.querySelector('#rua');
const estado = document.querySelector('#estado');
const numero = document.querySelector('#numero');
const name = document.querySelector('#name');
const form = document.querySelector('form#informelugar');
const select = document.querySelector('select#start');
const select1 = document.querySelector('select#end');
form.addEventListener('submit', function(e) {
    e.preventDefault();
        const nome = name.value;
        const valor = rua.value + ", " + numero.value + " " + cidade.value + "," + estado.value;
        const adcs = `<option value="${valor}">${nome}</option>`;
        select.innerHTML += adcs;
        select1.innerHTML += adcs;
        Envio.adiciona('respostas', {
            nome: form.name.value,
            rua: form.rua.value,
            cidade: form.cidade.value,
            estado: form.estado.value,
            numero: form.numero.value
        });
        form.reset();
        e.preventDefault();
});