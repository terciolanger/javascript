/*
function soma (n1, n2){
    return n1 + n2
}
console.log(soma(2,5)) // soma é a chamada, 2 e 5 são parâmetros
*/
function soma (n1, n2=0){ // =0 quando não quer passar o parâmetro
    return n1 + n2
}
console.log(soma(2)) // 2 soma NaN