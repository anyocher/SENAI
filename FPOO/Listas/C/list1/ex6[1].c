#include <stdio.h>

int main(){
	
	
	int distancia; 
	float velocidade = 900;
	float horas;
	
	printf("Insira a distancia em km percorrida: ");
	scanf("%d", &distancia);
	
	horas = distancia / velocidade;
	
	printf("O tempo total de horas de voo e de = %.02f hora(s)", horas);
	return 0;
}
