#include <stdio.h>

int main(){
	
	int velocidade;
	int distancia;
	
	printf("Digite a velocidade do veiculo (km/h): ");
	scanf("%d", &velocidade);
	
	printf("Digite a distancia a ser percorrida (km): "); 
	scanf("%d", &distancia);
	
	printf("Sera necessario percorrer por %d horas para chegar ao destino", distancia / velocidade);
	return 0;
}
