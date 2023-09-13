#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(void){
	setlocale(LC_ALL,"");
	char merc[5][20], maisCaroS[20], maisBaratoS[20];
	float preco[5], maisCaro = 0, maisBarato = 999999, media = 0;
	int i;
	
	for(i = 0; i < 5; i++){
		printf("\nInsira o nome da mercadoria: ");
		scanf("%s", &merc[i]);
		
		printf("Insira o preço da mercadoria %s: ", merc[i]);
		scanf("%f", &preco[i]);
		
		if(preco[i] > maisCaro){
			maisCaro = preco[i];
			strcpy(maisCaroS, merc[i]);
		}
		if(preco[i] < maisBarato){
			maisBarato = preco[i];
			strcpy(maisBaratoS, merc[i]);
		}
	}
	
	printf("\nO produto mais caro é: %s %.2f", maisCaroS, maisCaro);
	printf("\nO produto mais barato é: %s %.2f", maisBaratoS, maisBarato);
	
	return 0;
}
