function renderizarModal(){
    const body = document.querySelector("body")
    const botaoRegistrar = document.querySelector(".botaoRegistrar")
    botaoRegistrar.addEventListener("click", () =>{
        const modal = criarModal()
        body.append(modal)
        fecharModal()
        inserirValorArray()
        
    })
}
renderizarModal()

function criarModal(){
    const div = document.createElement("div")
    const form= document.createElement("form")
    const div2 = document.createElement("div")
    const h2 = document.createElement("h2")
    const button = document.createElement("button")
    const p = document.createElement("p")
    const label = document.createElement("label")
    const input = document.createElement("input")
    const divBotoesDesk = document.createElement("div")
    const p2 = document.createElement("p")
    const div3 = document.createElement("div")
    const button2 = document.createElement("button")
    const button3 = document.createElement("button")
    const div4 = document.createElement("div")
    const button4 = document.createElement("button")
    const button5 = document.createElement("button")

    div.className = "coberturaModal"
    form.className = "modal"
    div2.className = "cabecalhoModal"
    h2.innerText = "Registro de Valor"
    button.className = "botaoFecharModal botaoCinza botaoBase"
    button.innerText = "X"

    button.addEventListener("click", ()=>{
        div.remove()
    })

    p.innerText = "Digite o valor e em seguida aperte no botão referente ao tipo do valor"
    label.innerText = "Valor"
    input.type = "number"
    input.name = "valor"
    input.className = "inputValor"
    input.placeholder = "R$ 0,00"
    divBotoesDesk.className = "botoesDesktop"
    p2.innerText = "Tipo de Valor"
    div3.className = "botoesTipoValor"
    button2.className = "botaoEntrada botaoBranco botaoBase"
    button2.innerText = "Entrada"
    button3.className = "botaoSaida botaoBranco botaoBase"
    button3.innerText = "Saída"
    div4.className = "botoesCancelarInserir"
    button4.className = "botaoCancelar botaoCinza botaoBase"
    button4.innerText = "Cancelar"

    button4.addEventListener("click", (event)=>{
        div.remove()
    })

    button5.className = "botaoInserir botaoRoxo botaoBase"
    button5.innerText = "Inserir Valor"

    div.append(form)
    form.append(div2, p, label, input, divBotoesDesk, div4)
    divBotoesDesk.append(p2, div3)
    div2.append(h2, button)
    div3.append(button2, button3)
    div4.append(button4, button5)

    return div
}

function fecharModal(){
    const divModal = document.querySelector(".coberturaModal")
    const botaoFechar = document.querySelector(".botaoFecharModal")

    botaoFechar.addEventListener("click", ()=>{
        divModal.remove()
    })
}

