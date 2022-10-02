function renderizarLi(array){
    const ul = document.querySelector("ul")
    ul.innerHTML = ""
    array.forEach((elemento) =>{
        const card = criarLi(elemento)
        ul.append(card)
    })
    somarValoresArray(valoresInseridos)
    filtrarValores()
}

function criarLi(objeto){
    const li = document.createElement("li")
    const p = document.createElement("p")
    const div = document.createElement("div")
    const p2 = document.createElement("p")
    const button = document.createElement("button")
    const img = document.createElement("img")

    p.className = "valor"
    p.innerText = `R$ ${objeto.value.toFixed(2)}`
    
    p2.className = "tipoValor"

    categoriasValores.forEach((elemento,index)=>{
        if(index === objeto.categoryID){
            p2.innerText = elemento
        }
    })

    button.className = "botaoBase"
    img.src = "/assets/img/lixeira.png"
    img.alt = "lixeira"

    button.addEventListener("click", (event)=>{
        event.preventDefault()
        excluirValorArray(objeto)
    })
    
    li.append(p, div)
    div.append(p2, button)
    button.append(img)

    return li
}

function inserirValorArray(){
    const novoObjeto = {}

    const modal = document.querySelector(".coberturaModal")
    const inputValor = document.querySelector(".inputValor")
    const botaoEntrada = document.querySelector(".botaoEntrada")
    const botaoSaida = document.querySelector(".botaoSaida")
    const botaoInserir = document.querySelector(".botaoInserir")

    botaoEntrada.addEventListener("click", (event) =>{
        botaoEntrada.classList.add("botaoRoxoFixo")
        event.preventDefault()
        botaoInserir.addEventListener("click", (event)=>{
            event.preventDefault()
            const campoValor = inputValor.value
            novoObjeto.id = valoresInseridos.length +1 
            novoObjeto.value = parseInt(campoValor)
            novoObjeto.categoryID = 0

            valoresInseridos.push(novoObjeto)
            renderizarLi(valoresInseridos)
            modal.remove()
            mensagemPadrao()
        })
    })

    botaoSaida.addEventListener("click", (event) =>{
        botaoSaida.classList.add("botaoRoxoFixo")
        event.preventDefault()
        botaoInserir.addEventListener("click", (event)=>{
            event.preventDefault()
            const campoValor = inputValor.value
            novoObjeto.id = valoresInseridos.length +1 
            novoObjeto.value = parseInt(campoValor)
            novoObjeto.categoryID = 1

            valoresInseridos.push(novoObjeto)
            renderizarLi(valoresInseridos)
            modal.remove()
            mensagemPadrao()
        })   
    })  
}

function excluirValorArray(objeto){
    const index = valoresInseridos.indexOf(objeto)
    valoresInseridos.splice(index,1)
    renderizarLi(valoresInseridos)
    mensagemPadrao()
}

function somarValoresArray(array){
    const valorTotal = document.querySelector(".valorSoma")
    const listaValores = array.map((elemento) =>{
        return elemento.value
    })
    const total = listaValores.reduce((acumulador, atual) =>{
        return acumulador + atual
    },0) 
    valorTotal.innerText = `R$ ${total.toFixed(2)}`
} 

function filtrarValores(){ 
    const todos = document.querySelector(".botaoTodos")
    const entradas = document.querySelector(".botaoEntradas")
    const saidas = document.querySelector(".botaoSaidas")

    todos.addEventListener("click", ()=>{
        renderizarLi(valoresInseridos)
    })

    entradas.addEventListener("click", ()=>{
        const filtroEntradas = valoresInseridos.filter(elemento =>{
            if(elemento.categoryID === 0){
                return elemento
            }
        })
        renderizarLi(filtroEntradas)
        somarValoresArray(filtroEntradas)
    })

    saidas.addEventListener("click", ()=>{
        const filtroSaidas = valoresInseridos.filter(elemento =>{
            if(elemento.categoryID === 1){
                return elemento
            }
        })
        renderizarLi(filtroSaidas)
        somarValoresArray(filtroSaidas)
    })
}

function mensagemPadrao(){
    if(document.querySelector("li") == null){
        document.querySelector("main").insertAdjacentHTML("beforeend", `
        <section class="mensagemPadrao">
            <h2>Nenhum valor cadastrado</h2>
            <p>Registrar novo valor</p>
        </section>
    `)
    }else{
        const mensagem = document.querySelector(".mensagemPadrao")
        mensagem.remove()
    }   
}
mensagemPadrao()