class Triangulo{
    constructor(lado1, lado2, lado3){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    tipo(){
        if(this.lado1 === this.lado2 && this.lado2 === this.lado3){
            return "Equilátero";
        }else if(
                this.lado1 === this.lado2 ||
                this.lado1 === this.lado3 ||
                this.lado2 === this.lado3){
        return "Isóceles";
        } else {
        return "Escaleno";
        }
    }    

showHTML(){
    let str = `<label>LADO 1: ${this.lado1}</label><label>LADO 2: ${this.lado2}</label><label>LADO 3: ${this.lado3}</label><label>Tipo:${this.tipo()}</label>`;
    return str;}
}

const lista = [];
lista.push(new Triangulo( 10, 20, 30));
lista.push(new Triangulo( 10, 10, 30));
lista.push(new Triangulo( 10, 20, 10));
lista.push(new Triangulo( 30, 10, 10));
lista.push(new Triangulo( 20, 20, 20));

console.table(lista);

const main = document.getElementById('triangulo');
lista.forEach(lista => {
    const div = document.createElement('div');
    div.innerHTML = lista.showHTML();
    main.appendChild(div);
});