let prato;
let bebida;
let sobremesa;

function escolherfrango() {
    document.getElementById("frango").style.borderColor = "green";
    document.getElementById("carne").style.borderColor = "white"
    prato = "Frango"
    }

function escolhercarne() {
    document.getElementById("carne").style.borderColor="green";
    document.getElementById("frango").style.borderColor="white";
    prato = "carne"
}

function escolhercoca() {
    document.getElementById("coca").style.borderColor="green";
    document.getElementById("suco").style.borderColor="white";
    bebida = "coca"
}

function escolhersuco() {
    document.getElementById("suco").style.borderColor="green";
    document.getElementById("coca").style.borderColor="white";
    bebida = "suco"
}

function escolherpudim() {
    document.getElementById("pudim").style.borderColor="green";
    document.getElementById("brigadeiro").style.borderColor="white";
    sobremesa= "pudim"
}

function escolherbrigadeiro() {
    document.getElementById("brigadeiro").style.borderColor="green";
    document.getElementById("pudim").style.borderColor="white";
    sobremesa = "brigadeiro"
}

function finalizarpedido() {
    let mensagem 
    mensagem = 
    "Olá gostaria de realizar um pedido:"+
    prato +
    "," +
    bebida +
    " e " +
    sobremesa;
    window.open("https://wa.me/+5521999999999?text=" + mensagem);
}