#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL,"");
	char nome[20][20];
	int loop, i;
	float salario[20], indice, reajuste[20];
	
	printf("Quantos indices serão calculados: ");
	scanf("%d", &loop);
	
	for(i = 1; i <= loop; i++){
		printf("\nNome da pessoa %d: ", i);
		scanf("%s", &nome[i]);
		nome[i] + i;
		
		printf("Insira o salário do(a) %s: ", nome[i]);
		scanf("%f", &salario[i]);
		salario[i] + i;
	}
	
	printf("Insira o índice percentual(%%): ");
	scanf("%f", &indice);
	
	for(i = 1; i <= loop; i++){
		reajuste[i] = (salario[i]*(indice+100))/100;
		reajuste[i] + i;
		
		printf("\n%s R$%.0f", nome[i], reajuste[i]);
	}
	
	return 0;
}
