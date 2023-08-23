#include <stdio.h>
#include <string.h>

int main(void){
	char a[10];
	float b;
	
	printf("Produtos com promocao: \ncamisa \nbermuda \ncalca\n\n");
	printf("Insira a peca que deseja: ");
	scanf("%s", &a);
	
	printf("Insira o preco da %s: R$", a);
	scanf("%f", &b);
	
	if(strcmp(a, "camisa") == 0){
		b = b * 0.80;
		printf("O preco da camisa com 20%% de desconto e R$%.2f", b);
	}else if(strcmp(a, "bermuda") == 0){
		b = b * 0.90;
		printf("O preco da camisa com 10%% de desconto e R$%.2f", b);
	}else if(strcmp(a, "calca") == 0){
		b = b * 0.85;
		printf("O preco da camisa com 15%% de desconto e R$%.2f", b);
	}else{
		printf("O produto inserido nao esta na lista.");
	}
	return 0;
}