
var cadena = [];
var arrayCombinaciones = [];
var grupo = 0;
var possibleWord = [];
function comb(alfabeto, n, resultados, resultado) {
    if(!resultado) {
        resultado = [];
    }
    for(var i=0; i<alfabeto.length; ++i) {
        var newResultado = resultado.slice();
        var newAlfabeto = alfabeto.slice();
        newResultado.push(alfabeto[i]);
        newAlfabeto.splice(i, 1);
        if(n>1) {
            comb(newAlfabeto, n-1, resultados, newResultado);
        } else {
            resultados.push(newResultado);
        }
    }
}
function mainProcess(){
    let inputText = document.getElementById('inputText').value;
    
    let NofWord='';
    for(let i=0;i<inputText.length;i++){
        NofWord+=i;
    }
    combinar(NofWord);
    fillPWords(inputText);
    showTable();
    palindromoComprobacion();
}
function fillPWords(text){
    let tempCharList=[];
    let tempWordList=[];
    let wordToString="";
    for(let i=0;i<arrayCombinaciones.length;i++){
        for(let j=0;j<arrayCombinaciones[i].length;j++){
            let numOfChar=arrayCombinaciones[i][j];
            let word = text[numOfChar];
            tempCharList.push(word);
        }
        tempWordList.push(tempCharList);
        tempCharList=[];
    }
        //llenado de lista de palabras en string
    for(let i=0;i<tempWordList.length;i++){
        for(let j = 0;j<tempWordList[i].length;j++){
           wordToString+=tempWordList[i][j];
        }
        possibleWord.push(wordToString)
        wordToString="";
    }
}
function combinar(valor){
    clean();
    for(let i=0;i<valor.length;i++)
    cadena.push(valor[i]);;
    grupo=valor.length;
    comb(cadena, grupo, arrayCombinaciones);
}
function clean(){
    cadena = [];
    arrayCombinaciones = [];
    grupo = 0;
    possibleWord = [];
}
function precalc(){
    let Text = document.getElementById('inputText').value;
    document.getElementById("caracteres").innerHTML=Text.length;
    let factorial = 1;
    for(let i = Text.length; i>0; i--){
    factorial *= i;
    }
    document.getElementById("combinaciones").innerHTML=factorial;
}
function showTable(){
    document.getElementById("bodyTable").innerHTML="";
    for(let i=0;i<arrayCombinaciones.length;i++){
        const codeWord = arrayCombinaciones[i];
        const combination = possibleWord[i];
    document.getElementById("bodyTable").innerHTML+=`<tr><td>${i}</td><td>${combination}</td><td>${codeWord}</td></tr>`
    }
}
function palindromoComprobacion(){
    const max = possibleWord.length-1;
    if(possibleWord[0]===possibleWord[max]){
        document.getElementById("palindromoAlert").innerHTML=`<div class="alert alert-dismissible alert-success">
        <h4 class="alert-heading">Es palíndromo!</h4>
        <p class="mb-0">Un palíndromo es una palabra o frase que se lee igual en un sentido que en otro.</a>.</p>
      </div>`;
    }else{
        document.getElementById("palindromoAlert").innerHTML=`<div class="alert alert-dismissible alert-primary">
        <h4 class="alert-heading">No es palíndromo =(</h4>
        <p class="mb-0">Un palíndromo es una palabra o frase que se lee igual en un sentido que en otro.</a>.</p>
      </div>`;
    }
}