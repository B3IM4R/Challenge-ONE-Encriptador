const inputText = document.querySelector('.input-text');
const contMessage = document.querySelector('.cont-2');
const message = document.querySelector('.encrypted-text');
const notFound = document.querySelector('.not-found');
const copyBtn = document.querySelector('.copy-btn');

function textValidator(){
    const regex = /^[a-zA-ZñÑ,. ]*$/;
    let writtenText = document.querySelector(".input-text").value;

    if(writtenText.length === 0){
        alert("El texto NO puede estar vacío")
        location.reload();
        return true;
    }

    else if(!regex.test(writtenText)) {
        alert("Únicamente se permiten letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function btnEncrypt(){
    if (!textValidator()){
        const encryptText = encrypt(inputText.value);
        message.value = encryptText;

        contMessage.style.backgroundImage = "none";
        notFound.style.display = "none";

        inputText.value = "";
        copyBtn.style.display = "block";
    }
}

function btnDecrypt(){
    let writtenText = document.querySelector(".input-text").value;
    if (writtenText.length === 0){
        alert("Ingrese el texto encriptado primero")
        location.reload();
    }
    const encryptText = decrypt(inputText.value);
    
    contMessage.style.backgroundImage = "none";
    notFound.style.display = "none";
    
    message.value = encryptText;
    inputText.value = "";

    copyBtn.style.display = "block";
}

function encrypt(stringEncrypted){
    
    let codeMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypted = stringEncrypted.toLowerCase();

    for (let i = 0; i < codeMatrix.length; i++){
        if (stringEncrypted.includes(codeMatrix[i][0])){
            stringEncrypted = stringEncrypted.replaceAll(codeMatrix[i][0], codeMatrix[i][1]);
        }
    }
    return stringEncrypted;
}

function decrypt(stringDecrypt){
    let codeMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypt = stringDecrypt.toLowerCase();

    for(let i = 0; i < codeMatrix.length; i++){
        if(stringDecrypt.includes(codeMatrix[i][1])){
            stringDecrypt = stringDecrypt.replaceAll(codeMatrix[i][1] , codeMatrix[i][0]);
        }
    }
    return stringDecrypt
}

function copier(){
    let encryptText = document.querySelector(".encrypted-text").value; 
    if (encryptText.length === 0){
        alert("No hay nada que copiar");
        location.reload();
    }
    else {
        navigator.clipboard.writeText(message.value);
        alert("Texto Copiado!");
    }
}