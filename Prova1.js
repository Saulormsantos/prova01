/*Crie um programa que solicite ao usuário 3 notas (valores numéricos) e calcule a média aritmética dessas notas. 
Se a média for maior ou igual a 7, exiba a mensagem "Aprovado"; caso contrário, exiba "Reprovado". */

let A = parseInt(0);
let B = parseInt(7);
let C = parseInt(7);


let soma = (A + B + C) / 3;

if (soma>=7){
    console.log("Aprovado!")
    
} if (soma<7){
    console.log("Reprovado!");

} 
