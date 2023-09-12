//VAR 

/*EXPLICÇÃO: Funciona globalmente, ou seja, eu posso declarar a variavel em qualquer parte do meu codigo*/

var exemplo2 = 15

console.log(exemplo2)

console.log(typeof exemplo2)

var exemplo2

/*----------------------------------------------------------------*/

//LET

let exemplo3 
exemplo3 = 30

console.log(exemplo3)

console.log(typeof exemplo3)

/*----------------------------------------------------------------*/

//CONST

/* EXPLICAÇÃO: As declarações const não podem ser retribuidas após a atribuição inicial e deve ser inicializada na mesma linha que foi declarada*/
const status = "Aluno Aprovado!"
const nota1 = 7
const nota2 = 4
let aprovacao 

if(status === "Aluno Aprovado!") {
    aprovacao = nota1+nota2
    console.log("Parabéns você foi aprovado!")
}



