
let amigo =   //{} A Variável amigo vai ser um Objeto
{
  nome: 'Tércio', sobrenome: 'Langer', sexo: 'M', peso: 110,
  emagrecer(p=0) { // emagrecer será uma Função dentro do Objeto
    console.log('Emagreceu')
    this.peso -= p
  }
}
amigo.emagrecer(3)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

//console.log(typeof amigo)