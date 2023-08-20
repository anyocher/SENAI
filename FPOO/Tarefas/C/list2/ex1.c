#include <stdio.h>

int main(){
	
	
	printf("Entre o preco do produto: R$");
	scanf("%f", &preco);
	
	if(preco > 1000){
		preco = preco * 0.92;
		printf("O preco com desconto de 8%% e de R$%.2f", preco);
	} else{
		printf("O preco ficara igual");
	}
	return 0;
}