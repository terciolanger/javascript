/*
var idade = 65

if (idade < 16) {
  console.log('Ainda não pode Votar')    
} else {
    if (idade < 18 || idade > 65) {
      console.log('O Voto é opcional')
    } else {         
        console.log('Pode Votar')
    }
  }*/


function idade(n) {
  if (n <= 18) {
    return ('Criança ou Adolescente')
  } else {
    if (n > 18) {
      return ('Adulto')
    } else { 
      if (n >= 60) {      
        return ('Idodo(a)')
      }        
    }
  }
}
console.log(`${idade(61)}`)


