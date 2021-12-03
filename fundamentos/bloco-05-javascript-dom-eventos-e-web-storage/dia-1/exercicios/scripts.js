    /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        */
       function makeText(p) {
 let a = document.getElementsByTagName('P');
 let b = a[1].innerText = p;
 return b
       }    
       function changeColorYellow() {
let a = document.getElementsByClassName('main-content');
let b = a[0].style.backgroundColor = 'rgb(76,164,109)';
       }
       function changeColorRed(cor) {
 let a = document.getElementsByClassName("center-content");
 let b = a[0].style.backgroundColor = cor;
 return b
}
       function correctText() {
let a = document.getElementsByTagName('H1');
let b = a[0].innerText = 'Exercício 5.1 - JavaScript';
return b
       }
       function showP() {
        let a = document.getElementsByTagName('P');
        for (let index of a) {
            console.log(index.innerText)
        }
    }
       function strongP() {
        let a = document.getElementsByTagName('P');
        for(let index = 0; index < a.length; index += 1){
        a[index].style.textTransform = 'uppercase';
        }

    }


