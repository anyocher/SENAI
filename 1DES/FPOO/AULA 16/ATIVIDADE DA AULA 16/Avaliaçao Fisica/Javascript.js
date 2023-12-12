
class paciente{
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    imc(){
        return this.nome = this.peso / (this.altura * this.altura);
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
            return 3051.65;
           
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


showHTML(){
    let str = `<label></label><label> ${this.nome}</label>`;
    str += `<hr>`
    str += `<div class="espaco">`
    str += `<label>Sálario </label><label> ${this.peso}</label>`;
    str += `</div>`
    str += `<div class="espaco">`
    str += `<label>INSS </label><label> ${this.altura}</label>`;
    str += `</div>`
    str += `<div class="espaco">`
    str += `<label>IRRF </label><label> ${this.imc().toFixed(2)}</label>`;
    str += `</div>`
    str += `<label>Sálario Líquido</label><label> ${this.inss()}</label>`;
   
    
    return str;
    }
}

const lista = [];
lista.push(new paciente(`CatNoir `, 8044, 234));
lista.push(new paciente(`LadyBug`, 1049, 984));
lista.push(new paciente(`Marinette`,7890, 485));
lista.push(new paciente(`Adrien`,1890, 15));
lista.push(new paciente(`Tikki`,4890, 185));
lista.push(new paciente(`Alya`,2890, 85));

console.table(lista);

const main = document.getElementById('paciente');
lista.forEach(lista => {
    const div = document.createElement('div');
    div.innerHTML = lista.showHTML();
    main.appendChild(div);
});