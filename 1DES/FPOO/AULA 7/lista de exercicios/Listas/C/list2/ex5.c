#include <stdio.h>

int main(void){
	float a;
	char b[10];
	
	printf("Insira a mercadoria que deseja: ");
	scanf("%s", &b);
	
	printf("Insira o preco da %s: R$", b);
	scanf("%f", &a);
	
	if(a < 1000){
		a = a * 1.05;
		printf("O preco total da %s com aumento de 5%% e de R$%.2f ", b, a);
	} else {
		a = a * 1.07;
		printf("O preco total da %s com aumento de 7%% e de R$%.2f ", b, a);
	}
	
	
	return 0;
}