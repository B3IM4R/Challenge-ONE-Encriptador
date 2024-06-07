var translations = {
    en: {
        title: "Text Encryptor",
        placeholder: "Enter text here",
        alert: "Only lowercase letters and no accents",
        encrypt: "Encrypt",
        decrypt: "Decrypt",
        notFound: "No Message Was Found",
        validation: "Enter the text you want to encrypt or decrypt",
        copy: "Copy",
        paste: "Paste"
    },
    es: {
        title: "Encriptador de Texto",
        placeholder: "Ingrese el texto aquí",
        alert: "Sólo letras minúsculas y sin acentos",
        encrypt: "Encriptar",
        decrypt: "Desencriptar",
        notFound: "Ningún Mensaje Fue Encontrado",
        validation: "Ingresa el texto que desees encriptar o desencriptar",
        copy: "Copiar",
        paste: "Pegar"
    }
};

var languageButton = document.getElementById('languageButton');
var languageOptions = document.getElementById('languageOptions');

languageButton.addEventListener('click', function() {
    languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.language-option').forEach(function(option) {
    option.addEventListener('click', function() {
        // Remove the 'selected' class from all options
        document.querySelectorAll('.language-option').forEach(function(opt) {
            opt.classList.remove('selected');
        });

        // Add the 'selected' class to the clicked option
        this.classList.add('selected');

        var lang = this.getAttribute('data-value');
        var trans = translations[lang];
        var transKeys = Object.keys(trans);

        transKeys.forEach(function(key) {
            var elements = document.querySelectorAll('[data-translate="' + key + '"]');
            elements.forEach(function(element) {
                element.textContent = trans[key];
            });
        });

        languageOptions.style.display = 'none';

        // Save the user's language choice
        localStorage.setItem('language', lang);
    });
});

// Get the user's language choice from local storage, or default to English
var userLanguage = localStorage.getItem('language') || 'en';

// Trigger the click event on page load to set the initial language
window.onload = function() {
    document.querySelector('.language-option[data-value="' + userLanguage + '"]').click();
};

document.querySelector('.input-text').addEventListener('focus', function() {
    this.value = '';
});