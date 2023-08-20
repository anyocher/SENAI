#include <stdio.h>

int main(void){
	float a;
	
	printf("Insira seu salario: R$");
	scanf("%f", &a);
	
	if(a <= 1212.00){
		a = a * 0.925;
		printf("Seu salario com desconto de 7,5%% do INSS e de: R$%.2f", a);
	}else if(a >= 1212.01 && a <= 2427.35){
		a = a * 0.91;
		printf("Seu salario com desconto de 9%% do INSS e de: R$%.2f", a);
	}else if(a >= 2427.36 && a <= 3641.03){
		a = a * 0.88;
		printf("Seu salario com desconto de 12%% do INSS e de: R$%.2f", a);
	}else if(a >= 3641.04 && a <= 7087.22){
		a = a * 0.86;
		printf("Seu salario com desconto de 14%% do INSS e de: R$%.2f", a);
	}else{
		a = a * 0.86;
		printf("Seu salario com desconto de 14%% do INSS e de: R$%.2f", a);
	}
	
	return 0;
}