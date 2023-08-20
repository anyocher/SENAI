#include <stdio.h>

int main(){
	
	char nome[20];
	float preco; 
	float valor;
	
	printf("Mercadoria: "); 
	scanf("%s", &nome);
	
	printf("Preco da mercadoria: R$");
	scanf("%f", &preco);
	
	valor = preco * 1.05;
	
	printf("Com 5%% de aumento o produto %s esta R$%.02f", nome, valor);
}
