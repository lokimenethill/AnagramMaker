let palabra = "loki";//unica configuracion palabra a procesar
var cadena = [];
var arrayCombinaciones = [];
var grupo = 0;
var possibleWord = [];
var fs = require('fs');


function makeFiles() {
    const data = possibleWord.join();
    try {
        fs.writeFileSync('./out/Words.txt', data);
    } catch (e) {
        console.log("error al crear archivo ", e);
    }
}

function comb(alfabeto, n, resultados, resultado) {
    if (!resultado) {
        resultado = [];
    }
    for (var i = 0; i < alfabeto.length; ++i) {
        var newResultado = resultado.slice();
        var newAlfabeto = alfabeto.slice();
        newResultado.push(alfabeto[i]);
        newAlfabeto.splice(i, 1);
        if (n > 1) {
            comb(newAlfabeto, n - 1, resultados, newResultado);
        } else {
            resultados.push(newResultado);
        }
    }
}
function mainProcess(inputText) {
    let NofWord = '';
    for (let i = 0; i < inputText.length; i++) {
        NofWord += i;
    }

    combinar(NofWord);
    fillPWords(inputText);
    showTable();
    precalc(inputText);
    palindromoComprobacion();
    makeFiles();
    end();
}
function fillPWords(text) {
    let tempCharList = [];
    let tempWordList = [];
    let wordToString = "";
    for (let i = 0; i < arrayCombinaciones.length; i++) {
        for (let j = 0; j < arrayCombinaciones[i].length; j++) {
            let numOfChar = arrayCombinaciones[i][j];
            let word = text[numOfChar];
            tempCharList.push(word);
        }
        tempWordList.push(tempCharList);
        tempCharList = [];
    }
    //llenado de lista de palabras en string
    for (let i = 0; i < tempWordList.length; i++) {
        for (let j = 0; j < tempWordList[i].length; j++) {
            wordToString += tempWordList[i][j];
        }
        possibleWord.push(wordToString)
        wordToString = "";
    }
}
function combinar(valor) {
    clean();
    for (let i = 0; i < valor.length; i++)
        cadena.push(valor[i]);;
    grupo = valor.length;
    comb(cadena, grupo, arrayCombinaciones);
}
function clean() {
    cadena = [];
    arrayCombinaciones = [];
    grupo = 0;
    possibleWord = [];
}
function precalc(Text) {
    let factorial = 1;

    for (let i = Text.length; i > 0; i--) {
        factorial *= i;
    }
    console.log('\x1b[40m\x1b[37m\x1b[4m', `Numero de combinaciones: ${factorial}, Numero de caracteres: ${Text.length}`);
}
function showTable() {
    for (let i = 0; i < arrayCombinaciones.length; i++) {
        const codeWord = arrayCombinaciones[i];
        const combination = possibleWord[i];
        console.log(`${i} - ${combination} - ${codeWord}`);
    }
}
function palindromoComprobacion() {
    const max = possibleWord.length - 1;
    if (possibleWord[0] === possibleWord[max]) {
        console.log('\x1b[4m\x1b[36m', `Es palíndromo!`);
    } else {
        console.log('\x1b[4m\x1b[31m', `No es palíndromo =(`);
    }
}
function end() {
    console.log("⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀bylokimenethill⠀⠀⢸⣿⣿");
    console.log("https://github.com/lokimenethill");
}
mainProcess(palabra);