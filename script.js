function encrypt() {
    let text = document.getElementById('inputText').value.toLowerCase();
    let encryptedText = text.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;
}

function decrypt() {
    let text = document.getElementById('inputText').value.toLowerCase();
    let decryptedText = text.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;
}

document.getElementById('encryptBtn').addEventListener('click', encrypt);
document.getElementById('decryptBtn').addEventListener('click', decrypt);

function copyText() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado!');
}

document.getElementById('copyBtn').addEventListener('click', copyText);

