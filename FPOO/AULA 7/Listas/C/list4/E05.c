#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL,"");
	char cidade[5][20];
	float eleitores[5], votos[5], total[5];
	int i;
	
	for(i = 0; i < 5; i++){
		printf("\nInsira o nome da cidade %d: ", i + 1);
		scanf("%s", &cidade[i]);
		
		printf("Insira quantos eleitores a cidade %s tem: ", cidade[i]);
		scanf("%f", &eleitores[i]);
		
		printf("Insira quantos votos a cidade %s teve: ", cidade[i]);
		scanf("%f", &votos[i]);
		
		total[i] = (votos[i] / eleitores[i]) * 100;
	}
	
	for(i = 0; i < 5; i++){
		printf("\n%s %.1f%%\n", cidade[i], total[i]);
	}
	
	return 0;
}
