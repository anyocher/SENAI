#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(void){
	setlocale(LC_ALL,"");
	char merc[5][20];
	float preco[5], precoNovo[5];
	int i;
	
	for(i = 0; i < 5; i++){
		printf("\nInsira a mercadoria que deseja: ");
		scanf("%s", &merc[i]);
		
		printf("Insira o preço da mercadoria %s: ", merc[i]);
		scanf("%f", &preco[i]);
		
		if(preco[i] < 1000){
			preco[i] = preco[i] * 1.05;
		}else{
			preco[i] = preco[i] * 1.07;
		}
	}
	printf("\n");
	for(i = 0; i < 5; i++){
		printf("%s %.2f\n", merc[i], preco[i]);
	}
	
	return 0;
}
