 
let resp = document.querySelector("#resp")
let aviso = document.querySelector("#idAviso")
let textoArea = document.querySelector("#inputText")
let imagem = document.querySelector("#idImg")
let btnCopia = document.querySelector("#btnCopia")

let armazenar = [];

function btnEncrypt() {
    const texto = textoArea.value;
    if (validacao(texto)) {
        armazenar.push(texto);
        const encrypt = texto.split('').sort(() => 0.5 - Math.random()).join('');
        resp.innerText = encrypt;
        aviso.innerText = "";
        textoArea.value = "";
        imagem.style.display = 'none'
        btnCopia.style.display = 'inline-block'
    }
}


function btnDecrypt() {
    if (!armazenar.length == 0) {
        const ultimoTexto = armazenar.pop()
        resp.innerText = ultimoTexto;
        aviso.innerText = ""
        btnCopia.style.display = 'inline-block'
    }
    else{
        resp.innerText = "Nenhuma mensagem encontrada";
        aviso.innerText = "Digite um texto que você deseja criptografar ou descriptografar.";
    }

}

function copiar() {
    let textoCopiado = resp.innerText;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        console.log('Texto copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}



function validacao(texto) {
    if (texto == "") {
        resp.innerText = "Nenhuma mensagem encontrada";
        aviso.innerText = "Digite um texto que você deseja criptografar ou descriptografar.";
        imagem.style.display = 'inline-block'
        verificaTamanhoTela()
        btnCopia.style.display = 'none'

        return false;
    } 
    else if (texto.match(/[A-Z]/)) {
        resp.innerText = "O texto só pode conter letras minúsculas sem acento.";
        aviso.innerText = "Corrija o texto e tente novamente.";
        imagem.style.display = 'inline-block'
        verificaTamanhoTela()
        btnCopia.style.display = 'none'

        return false;
    }
    else if(texto.match(/[áàâãéèêíïóôõöúçñ]/)){
        resp.innerText = "O texto só pode conter letras minúsculas sem acento.";
        aviso.innerText = "Corrija o texto e tente novamente.";
        imagem.style.display = 'inline-block'
        verificaTamanhoTela()
        btnCopia.style.display = 'none'

        return false;
    }
    else{
        return true;
    }
}


function verificaTamanhoTela() {
    const larguraTela = window.innerWidth;

    if (larguraTela < 850) {
        imagem.style.display = 'none';
    } 
}