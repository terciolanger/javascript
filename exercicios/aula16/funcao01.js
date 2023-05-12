function parimp(n) {  // parâmetro
    if (n%2 == 0) {  // ação
        return 'par'
    } else {
        return 'impar'  //"Uma função em JavaScript só pode ter um retorno"
    }
}
//let res = parimp(11) // chamada
console.log(`${parimp(11)}`) 

