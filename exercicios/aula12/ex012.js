/*const data = new Date(); // momento atual 
const horas = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();

const hhmmmss = [horas, minutos, segundos].join(':');
console.log(hhmmmss);*/

//var atual = new Date()
//const data = new Date();
const atual = new Date()
var hora = atual.getHours() // pega a hora atual
//var hora = 11

if (hora <= 12) {
    //console.log(`Bom Dia, são ${hora} Horas, ainda é de manhã`)  
    console.log(`Bom Dia são ${atual.toLocaleTimeString('pt-BR')} Horas, ainda é de manhã`)  
} else if (hora < 18) {
    console.log(`Boa Tarde, são ${atual.toLocaleTimeString('pt-BR')} Horas, já é a tarde`)
} else {
    console.log(`Boa Noite, são ${atual.toLocaleTimeString('pt-BR')} Horas, já anoiteceu!`)
}