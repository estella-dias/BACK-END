//OPERADOR TERNARIO 

const media = 7
const nota = 4

if(nota >= media){
    console.log("Aluno Aprovado")
}else{
    console.log("Aluno Reprovado")
}

//OPERADOR TERNARIO 
            //CONDIÇÃO          //TRUE         //FALSE
console.log(nota >= media ? "Aluno Aprovado" : "Aluno Reprovado")

/*-------------------------------------------------*/

//TEMPLATE STRING

const nome = "Estella"
const cargo = "Modelo"
const empresa = "Ford models"
const idade = 2023-2004


console.log("Me chamo ",{nome}, "atualmente sou ", {cargo}, "e atuo como ",{empresa}, ", tenho ", {idade}, " anos.")

console.log(`Me chamo ${nome} sou ${cargo} e atuo na ${empresa}, tenho ${idade} anos.`)

a = []
b = 20
c = true 
d = 0

if (d) {console.log('Verdade')} else {console.log('Falso')}