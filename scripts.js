const Modal = {
    open(){
        //open modal and add class active in modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close(){
        //close modal, remove active modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
} 

function gravarDados(dados) {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let escritorio = document.getElementById('escritorio').value;
    let data = document.getElementById('data').value;
    console.log(escritorio);

    return  dados = { 
        "nome": nome,
        "email": email,
        "escritorio":escritorio,
        "data": data
    };
    console.log(dados);
};