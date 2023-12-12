class Pagamento{
    constructor(nome, salario){
        this.nome = nome
        this.salario = salario
        this.salarioBase = (this.salario - this.inss()).toFixed(2)
        this.salarioLiquido = (this.salarioBase - this.irrf()).toFixed(2)
    }

    inss() {
        if (this.salario < 1320.01)
            return this.salario * 7.5 / 100;
        else if (this.salario < 2571.30)
            return this.salario * 9 / 100;
        else if (this.salario < 3856.95)
            return this.salario * 12 / 100;
        else if (this.salario < 7507.49)
            return this.salario * 14 / 100;
        else
            return 1051.05;
    }

    irrf() {
        if (this.salario < 1903.99)
            return 0;
        else if (this.salario < 2826.66)
            return this.salario * 7.5 / 100 - 142.8;
        else if (this.salario < 3751.06)
            return this.salario * 15 / 100 - 354.8;
        else if (this.salario < 4664.69)
            return this.salario * 22.5 / 100 - 636.13;
        else
            return this.salario * 27.5 / 100 - 869.36;
    }
    
}

const cardgrid = document.querySelector(".card-grid")
const inputName = document.getElementById("inputName")
const inputIncome = document.getElementById("inputIncome")

function toTable(obj){
    let div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <h2 id="objNome">${obj.nome}</h2>
    <h3 id="objSalario">${obj.salario}</h3>
    <h3 id="objInss">${obj.inss().toFixed(2)}</h3>
    <h3 id="objSalBase">${obj.salarioBase}</h3>
    <h3 id="objIrrf">${obj.irrf().toFixed(2)}</h3>
    <h3 id="objSalLiquido">${obj.salarioLiquido}</h3>
    <div class="card-buttons">
        <button id="editButton">Editar</button>
        <button id="removeButton">Remover</button>
    </div>`
    cardgrid.appendChild(div)

    div.querySelector('#editButton').addEventListener('click', function(){
        let editar = document.getElementById('message')
        let buttons = document.getElementById('buttons')
        document.getElementById('messageTitle').innerHTML = `Deseja editar o funcionário '${obj.nome}'?`

        let buttonEdit = document.createElement('button')
        buttonEdit.innerHTML = 'Editar'
        buttonEdit.setAttribute('id','exclude');
        buttonEdit.addEventListener('click', function(){
            document.getElementById('exclude').remove()
            document.getElementById('cancel').remove()
            message.style.display = 'none'

            let nameInput = document.createElement('input')
            let salaryInput = document.createElement('input')
            salaryInput.setAttribute('type','number');

            let exButtons = div.querySelector('.card-buttons')

            let buttonDone = document.createElement('button')
            buttonDone.classList.add('button-done')
            buttonDone.innerHTML = 'Done'

            buttonDone.addEventListener('click', function(){
                obj.nome = nameInput.value
                obj.salario = salaryInput.value
                div.querySelector('#objInss').innerHTML = obj.inss(obj.salario)
                div.querySelector('#objIrrf').innerHTML = obj.irrf(obj.salario)
                obj.salarioBase = (salaryInput.value - obj.inss()).toFixed(2)
                obj.salarioLiquido = (obj.salarioBase - obj.irrf()).toFixed(2)

                console.log(obj.nome)
                div.querySelector("#objNome").innerHTML = nameInput.value
                div.querySelector("#objSalario").innerHTML = salaryInput.value
                div.querySelector("#objSalBase").innerHTML = obj.salarioBase
                div.querySelector("#objSalLiquido").innerHTML = obj.salarioLiquido
                nameInput.remove()

                buttonDone.style.display = 'none'
                exButtons.querySelector('#editButton').style.display = 'block'
                exButtons.querySelector('#removeButton').style.display = 'block'

                console.log(obj)
            })

            exButtons.querySelector('#editButton').style.display = 'none'
            exButtons.querySelector('#removeButton').style.display = 'none'
            exButtons.appendChild(buttonDone)

            div.querySelector("#objNome").innerHTML = ''
            div.querySelector("#objSalario").innerHTML = ''
            div.querySelector("#objNome").appendChild(nameInput)
            div.querySelector("#objSalario").appendChild(salaryInput)
            
        })
        buttons.appendChild(buttonEdit)

        let buttonCancel = document.createElement('button')
        buttonCancel.innerHTML = 'Cancelar'
        buttonCancel.setAttribute('id','cancel');
        buttonCancel.setAttribute('onclick','excludeCancel()');
        buttons.appendChild(buttonCancel)
        editar.style.display = 'flex'
    })

    div.querySelector('#removeButton').addEventListener('click', function(){
        let remover = document.getElementById('message')
        let buttons = document.getElementById('buttons')
        document.getElementById('messageTitle').innerHTML = `Deseja remover o funcionário '${obj.nome}'?`

        let buttonExclude = document.createElement('button')
        buttonExclude.innerHTML = 'Remover'
        buttonExclude.setAttribute('id','exclude');
        buttonExclude.addEventListener('click', function(){
            div.remove()
            document.getElementById('exclude').remove()
            document.getElementById('cancel').remove()
            remover.style.display = 'none'
        })
        buttons.appendChild(buttonExclude)

        let buttonCancel = document.createElement('button')
        buttonCancel.innerHTML = 'Cancelar'
        buttonCancel.setAttribute('id','cancel');
        buttonCancel.setAttribute('onclick','excludeCancel()');
        buttons.appendChild(buttonCancel)
        remover.style.display = 'flex'
    })
}

function excludeCancel(){
    message.style.display = 'none'

    document.getElementById('exclude').remove()
    document.getElementById('cancel').remove()
}

function insert(){
    if(inputName.value == '' && inputIncome.value == ''){
        inputName.classList.add('alert')
        inputIncome.classList.add('alert')
    }else if(inputName.value == ''){
        inputName.classList.add('alert')
    }else if(inputIncome.value == ''){
        inputIncome.classList.add('alert')
    }else{
        const pessoa = new Pagamento(inputName.value, Number(inputIncome.value))
        inputName.value = ''
        inputIncome.value = ''
        toTable(pessoa)
    }

    setTimeout(() => {
        inputName.classList.remove('alert')
        inputIncome.classList.remove('alert')
    }, 1000);
}