#include <stdio.h>

int main(){
	int alqueires;
	int caminhoes;
	int resultado;
	
	printf("Alqueires: ");
	scanf("%d", &alqueires);
	
	printf("Caminhoes: ");
	scanf("%d", &caminhoes);
	
	if (caminhoes > 0){
		alqueires = alqueires * 250; 
		resultado = (alqueires / 18) / caminhoes;
	} else { 
		printf("Precisa-se de ao menos um caminhao");
		return 0;
	}
	
	printf("O numero total de viagens e: %d", resultado);
	
	return 0;
}
