// Variaveis de controle
let id = 0
let num = 0
let registros = []

function enviar(){ //Envia o numero selecionado para a array '' e mostra em 'tabela'  
    let input_number = document.getElementById('input')
    let resultado = document.getElementById('inferior-direito')
    if(!inlist(input_number.value) && isnum(input_number.value)){       
        registros.push(Number(input_number.value))
        criar_select() //cria uma select
        let select = document.getElementById('tabela')
        let option = document.createElement('option')
        option.text = `Numero ${input_number.value} Adicionado`
        option.id = `option${id}`
        select.appendChild(option)
        id ++    
        input_number.focus()
        resultado.innerHTML =""
        resultado.style.backgroundColor = 'white'
    }
    else{
        alert('[ERR] Valor Invalido ou Repetido')    
    }
    input_number.value = ''  
}
function limpar(){
    // limpa toda area da div 'inferior'
    let div_inferior = document.getElementById('inferior-esquerdo')
    let div_inferior2 = document.getElementById('inferior-direito')
    div_inferior.innerText = ''
    div_inferior2.innerHTML = ''
    div_inferior.style.backgroundColor = 'white'
    div_inferior2.style.backgroundColor = 'white'
    registros = []
    num = 0
}
function criar_select(){
    //Cria uma select caso não exista nenhuma
    let div_inferior = document.getElementById('inferior-esquerdo')
    let create_select = document.createElement('select')
    if( num == 0){
        create_select.id = `tabela`
        create_select.size = 10
        div_inferior.appendChild(create_select) 
        num ++
    }
    div_inferior.style.backgroundColor = '#64ed82'
    
}
function finalizar(){
    if(num == 1){
        let resultado = document.getElementById('inferior-direito')
        if(registros.length != 0){
            resultado.style.backgroundColor = '#64ed82'
        }
        let maior = registros[0]
        let menor = registros[0]
        let soma = 0
        for(let pos in registros){
            soma += registros[pos]
            if(registros[pos] > maior)
                maior = registros[pos]
            if(registros[pos] < menor)
                menor = registros[pos]
        }   
        let media = soma / registros.length
        resultado.innerHTML = (`<p>Total de itens = ${registros.length}</p> `)
        resultado.innerHTML += (`<p>A soma dos valores é = ${soma}`)
        resultado.innerHTML += (`<p>O maior numero é = ${maior}</p>`)
        resultado.innerHTML += (`<p>O menor numero é = ${menor}</p>`)
        resultado.innerHTML += (`<p>A media dos numeros é = ${media.toFixed(2)}</p>`)
        
    }
    else{
        alert('Adicione Valores Primeiro')

    }   
}
function inlist(n){
    if(registros.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}
function isnum(n){
    if(n == 0 || n > 100){
        return false
    }
    else{
        return true
    }
}
