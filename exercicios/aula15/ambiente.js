/*
let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O Vetor tem ${num.length} posições`)
console.log(num[0])*/

/*
let val = [8,1,7,4,2,9]
for (let i = 0; i < val.length; i++) {
  console.log(`O índice: ${[i]} Tem o elemento ${val[i]}`)
}*/

/*
let name = ['Tércio', 'Tércio', 'Simone', 'Jéssica']

for (let i = 0; i < name.length; i++) {
  if (name[i] == ['Tércio']) {
    console.log(`${name[i]} Está na posição: ${[i]} `);
  } else    
      console.log(`Não está na posição: ${[i]}`)     
  } */

  /*
//Esse é código mais usado Simplificado e Moderno find, para variáveis compostos e objetos
let val = [8,1,7,4,2,9]
for (let i in val) {
  console.log(`O índice: ${[i]} Tem o elemento ${val[i]}`)  
}*/

let num = [5,8,2,9,3]
/*num.push(1)
num.sort()*/
console.log(num)
console.log(`O Vetor tem ${num.length} posições`)
console.log(`O primeiro elemento do Vetor é ${num[0]}`)
let pos = num.indexOf(3)
if (pos == -1) {  
  console.log(`Índice(Chave):(${pos}) Elemento não encontrado!`)
} else {
  console.log(`Índice(Chave):(${pos}) Posição do Elemento: ${pos}`)
}








