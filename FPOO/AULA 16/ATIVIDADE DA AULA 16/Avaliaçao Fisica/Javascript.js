
class paciente{
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    imc(){
        return this.nome = this.peso / (this.altura * this.altura);
    }
    diagnosticar(){
        if(this.imc() < 18.5){
            return "Abaixo do peso";
        }else if(this.imc() > 18.5 && this.imc() < 24.9){
            return "Peso normal";
        }else if(this.imc() > 25 && this.imc() < 29.9){
            return "Sobrepeso";
        }else if(this.imc() > 30 && this.imc() < 34.9){
            return "Obesidade grau 1";
        }else if(this.imc() > 35 && this.imc() < 39.9){
            return "Obesidade grau 2";
        }else {
            return "Obesidade grau 3";
        }
    }

showHTML(){
    let str = `<label></label><label> ${this.nome}</label>`;
    str += `<hr>`
    str += `<div class="espaco">`
    str += `<label>Peso: </label><label> ${this.peso}</label>`;
    str += `</div>`
    str += `<div class="espaco">`
    str += `<label>Altura: </label><label> ${this.altura}</label>`;
    str += `</div>`
    str += `<div class="espaco">`
    str += `<label>IMC: </label><label> ${this.imc().toFixed(2)}</label>`;
    str += `</div>`
    str += `<hr>`
    str += `<label>Diagnosticar: </label><label> ${this.diagnosticar()}</label>`;
    return str;
    }
}

const lista = [];
lista.push(new paciente(`André Mattos`, 80, 1.8));
lista.push(new paciente(`João da Silva`, 100, 1.7));
lista.push(new paciente(`Maria de Souza`, 60, 1.65));
lista.push(new paciente(`José Oliveira`, 90, 1.75));
lista.push(new paciente(`Silvia Andrade`, 60, 1.85));
lista.push(new paciente(`Sueli Oliveira`, 44, 1.65));
lista.push(new paciente(`Pedro de Souza`, 110, 1.85));

console.table(lista);

const main = document.getElementById('paciente');
lista.forEach(lista => {
    const div = document.createElement('div');
    div.innerHTML = lista.showHTML();
    main.appendChild(div);
});