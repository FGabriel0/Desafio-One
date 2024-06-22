# Desafio de Criptografia - Alura ONE

Este é um projeto desenvolvido como parte do desafio da Alura ONE, onde foi criado um sistema para criptografar e descriptografar mensagens de texto.

## Funcionalidades

- **Criptografar**: Embaralha as letras de uma frase fornecida.
- **Descriptografar**: Desfaz a criptografia, retornando a frase original.
- **Copiar**: Copia o texto criptografado ou descriptografado para a área de transferência.

## Interface do Usuário

### Tela Inicial

![Tela Inicial](https://github.com/FGabriel0/Desafio-One/blob/main/src/img/views/tela%20inicial.png?raw=true)

### Mensagem Criptografada

![Mensagem Criptografada](https://github.com/FGabriel0/Desafio-One/blob/main/src/img/views/criptografar.png?raw=true)

### Mensagem Descriptografada

![Mensagem Descriptografada](https://github.com/FGabriel0/Desafio-One/blob/main/src/img/views/descriptografar.png?raw=true)

## Lógica do Código

A lógica do código é implementada em JavaScript e consiste nas seguintes funções principais:

### Função de Criptografia e Descriptar

```javascript
function btnEncrypt() {
    const texto = textoArea.value;
    if (validacao(texto)) {
        armazenar.push(texto);
        const encrypt = texto.split('').sort(() => 0.5 - Math.random()).join('');
        resp.innerText = encrypt;
        aviso.innerText = "";
        textoArea.value = "";
        imagem.style.display = "none";
        btnCopia.style.display = 'inline-block';
    }
}

function btnDecrypt() {
    if (!armazenar.length == 0) {
        const ultimoTexto = armazenar.pop();
        resp.innerText = ultimoTexto;
        aviso.innerText = "";
        btnCopia.style.display = 'inline-block';
    } else {
        resp.innerText = "Nenhuma mensagem encontrada";
        aviso.innerText = "Digite um texto que você deseja criptografar ou descriptografar.";
    }
}
```
### Responsividade
O projeto é responsivo e foi adaptado para funcionar em tablets e smartphones.

### Tela tablet

![Mensagem tablet](https://github.com/FGabriel0/Desafio-One/blob/main/src/img/views/tablet.png?raw=true)

### Tela Smathphone

![Mensagem smathphone](https://github.com/FGabriel0/Desafio-One/blob/main/src/img/views/mobile.png?raw=true)

### Tecnologias Utilizadas

-**HTML**
-**CSS**
-**JavaScript**

### Autor
Desenvolvido por [Fabio Gabriel]



