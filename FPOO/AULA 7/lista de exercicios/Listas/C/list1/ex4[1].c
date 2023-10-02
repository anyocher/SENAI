#include <stdio.h>

int main(){
	char time[20];
	int vitorias; 
	int empates;

	printf("Insira o nome do time: "); 
	scanf("%s", &time);
	
	printf("Insite o total de vitorias do time: ");
	scanf("%d", &vitorias);
	
	printf("Insite o total de empates do time: ");
	scanf("%d", &empates);
	
	vitorias = vitorias*3;
	empates = empates;
	
	vitorias = vitorias + empates; 
	
	printf("O time %s tem um total de %d pontos", time, vitorias);
	return 0;
}
