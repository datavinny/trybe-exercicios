let body = document.getElementsByTagName('body')[0];
//muda cor da tela de fundo
let selectBgColor = document.getElementById('bgcolor');

selectBgColor.addEventListener('change', changeBgColor);
function changeBgColor(){
    body.style.backgroundColor = selectBgColor.value;
}
//muda cor da fonte
let selectTextColor = document.getElementById('textcolor');

selectTextColor.addEventListener('change', changeTextCOlor);
function changeTextCOlor(){
    body.style.color = selectTextColor.value;    
}
// Tamanho da fonte;
let selectFontSize = document.getElementById('fontsize');

selectFontSize.addEventListener('change', changeFontSize);
function changeFontSize() {
    body.style.fontSize = selectFontSize.value;
}
// Tipo da fonte ( Font family ).
let selectFontFamily = document.getElementById('fontfamily');

selectFontFamily.addEventListener('change', changeFontFamily);
function changeFontFamily() {
    body.style.fontFamily = selectFontFamily.value;
}
// Espaçamento entre as linhas do texto;
// let selectFontWeight = document.getElementById('fontweight');

// selectFontWeight.addEventListener('change', changeFontWeight);
// function changeFontWeight() {
//     body.style.fontWeight = selectFontWeight.value;
// }