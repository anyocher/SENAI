#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL,"");
	char produto[10][20];
	float custo[10], percentual, final[10];
	int i;
	
	for(i = 0; i < 1; i++){
		printf("\nInsira o produto %d: ", i+1);
		scanf("%s", &produto[i]);
		
		printf("Insira o preço do(a) %s: ", produto[i]);
		scanf("%f", &custo[i]);
	}
	
	printf("Insira o percentual(%%) de desconto: ");
	scanf("%f", &percentual);
	
	printf("\n");
	
	for(i = 0; i < 1; i++){
		final[i] = custo[i] - (custo[i] * percentual) / 100;
		printf("%s R$%.0f - %.0f%% = R$%.0f", produto[i], custo[i], percentual, final[i]);
	}
	
	return 0;
}
