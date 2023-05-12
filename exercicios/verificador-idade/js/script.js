
function checkButton() {
    let atual = new Date().getFullYear()
    iidade = Number(atual) - Number(iano.value)
    let ano = document.getElementById('iano')
    document.getElementById("main").style.minHeight = '10%'

    if (ano.value === "") {        
        document.getElementById("imasc").disabled = true
        document.getElementById('ifem').disabled = true
        document.getElementById('submit').disabled = true
        document.getElementById("p-res").style.display = 'none'
        document.getElementById("disp").style.display = 'none'
        document.getElementById('img').style.display = 'none' 
        document.getElementById("main").style.minHeight = '10%'      
    }
    else if (ano.value != "") {
        document.getElementById("imasc").disabled = false
        document.getElementById('ifem').disabled = false
        document.getElementById('submit').disabled = false
        document.getElementById("p-res").style.display = 'block'
        document.getElementById("disp").style.display = 'block'
        document.getElementById('img').style.display = 'block'            
    }

    // --- Bebê menino           
    if ((iidade <= 3) && (document.getElementById('imasc').checked)) {
        document.getElementById("p-res").innerHTML = `Bebê de ${iidade} Ano(s)`       
        document.getElementById("disp").innerHTML
            = document.getElementById("imasc").value
            + " Pessoa Masculina selecionada!"
        document.getElementById('img').src = 'imagem/bebe-menino.jpg'
        document.getElementById("error").style.display = 'none'
        document.getElementById("main").style.minHeight = '90%' 
    }

    // --- Bebê menina
    if ((iidade <= 3) && (document.getElementById('ifem').checked)) {
        document.getElementById("p-res").innerHTML = `Bebê de ${iidade} ano(s)`
        document.getElementById("disp").innerHTML
            = document.getElementById("ifem").value
            + " Pessoa Feminina selecionada!"
        document.getElementById('img').src = 'imagem/bebe-menina.jpg'
        document.getElementById("error").style.display = 'none'  
        document.getElementById("main").style.minHeight = '90%'       
    }

    // --- Criança ou Adolescente Masculino
    if ((iidade > 3 && iidade <= 18) && (document.getElementById('imasc').checked)) {
        document.getElementById("p-res").innerHTML = `Criança ou Adolescente de ${iidade} anos`

        //if (document.getElementById('imasc').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("imasc").value
            + " Pessoa Masculina selecionada!"
        document.getElementById('img').src = 'imagem/menino.jpg'
        document.getElementById("error").style.display = 'none'   
        document.getElementById("main").style.minHeight = '90%'     
    }

    // --- Criança ou Adolescente Feminino
    if ((iidade > 3 && iidade <= 18) && (document.getElementById('ifem').checked)) {
        document.getElementById("p-res").innerHTML = `Criança ou Adolescente de ${iidade} anos`
        document.getElementById("disp").innerHTML
            = document.getElementById("ifem").value
            + " Pessoa Feminina selecionada!"
        document.getElementById('img').src = 'imagem/menina.jpg'
        document.getElementById("error").style.display = 'none' 
        document.getElementById("main").style.minHeight = '90%'        
    }

    // --- Jovem ou Adulto Masculino
    if ((iidade > 18 && iidade < 60) && (document.getElementById('imasc').checked)) {
        document.getElementById("p-res").innerHTML = `Jovem ou Adulto de ${iidade} anos`
        document.getElementById("disp").innerHTML
            = document.getElementById("imasc").value
            + " Pessoa Masculina selecionada!"
        document.getElementById('img').src = 'imagem/homem.jpg'
        document.getElementById("error").style.display = 'none' 
        document.getElementById("main").style.minHeight = '90%'        
    }

    // --- Jovem ou Adulto Feminino
    if ((iidade > 18 && iidade < 60) && (document.getElementById('ifem').checked)) {
        document.getElementById("p-res").innerHTML = `Jovem ou Adulto de ${iidade} anos`
        document.getElementById("disp").innerHTML
            = document.getElementById("ifem").value
            + " Pessoa Feminina selecionada!"
        document.getElementById('img').src = 'imagem/mulher.jpg'
        document.getElementById("error").style.display = 'none' 
        document.getElementById("main").style.minHeight = '90%'        
    }

    // --- Idodo(a) Feminino
    if ((iidade >= 60) && (document.getElementById('ifem').checked)) {
        document.getElementById("p-res").innerHTML = `Idoso(a) de ${iidade} anos`
        document.getElementById("disp").innerHTML
            = document.getElementById("ifem").value
            + " Pessoa Feminina selecionada!"
        document.getElementById('img').src = 'imagem/idosa.jpg'
        document.getElementById("error").style.display = 'none'  
        document.getElementById("main").style.minHeight = '90%'            
    }

    // --- Idodo(a) Masculino
    if ((iidade >= 60) && (document.getElementById('imasc').checked)) {
        document.getElementById("p-res").innerHTML = `Idoso(a) de ${iidade} anos`
        document.getElementById("disp").innerHTML
            = document.getElementById("imasc").value
            + " Pessoa Masculina selecionada!"
        document.getElementById('img').src = 'imagem/idoso.jpg'
        document.getElementById("error").style.display = 'none' 
        document.getElementById("main").style.minHeight = '90%'             
    }

    else {
        document.getElementById("error").innerHTML
            = "Por favor, selecione o Sexo!"                
    }
}
