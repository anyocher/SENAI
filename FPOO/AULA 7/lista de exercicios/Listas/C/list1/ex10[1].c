#include <stdio.h>

int main(){
	
	float eleitores; 
	float votos;
	
	printf("Quantos eleitores tem na cidade?: ");
	scanf("%d", &eleitores);
	
	printf("Quantidade de votos que foram apurados?: ");
	scanf("%d", &votos);
	
	votos = (votos / eleitores) * 100;
	
	printf("Porcentagem (%%) de participacao dos eleitores: %.0f%%", votos);
	return 0;
}
