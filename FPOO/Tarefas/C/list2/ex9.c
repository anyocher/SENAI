#include <stdio.h>

int main() {
    float salario, Salario2;
    
    printf("Digite o salario atual do funcionario: ");
    scanf("%f", &salario);

    if(1500 <= salario && salario < 1750){
        Salario2 = salario * 1.15;
    }else if(1750 <= salario && salario < 2000){
        Salario2 = salario * 1.12;
    }else if(2000 <= salario && salario < 3000){
        Salario2 = salario * 1.09;
    }else if(3000 <= salario){
        Salario2 = salario * 1.06;
    }else{
    	Salario2 = salario;
    }

    printf("Salario do funcionario: %.2f", Salario2);

    return 0;
}