#include <stdio.h>
int total, i, j;

void mostrarPortas(int *portas){
	for(i = 0; i < total; i++){
		if(portas[i])
			printf("porta %d aberta\n", i + 1);
		else
			printf("porta %d fechada\n", i + 1);
	}
}

void formatarSaida(int *portas){
	for(i = 0; i < total; i++){
		if(portas[i])
			printf("%d ", i + 1);
	}
	printf("\n");
}

void solucao(int total){
	int portas[total];
	//Iniciei as portas
	for(i = 0; i < total; i++)
		portas[i] = 1;	
	//Alterar os status das portas
	for(i = 2; i <= total; i++)
		for(j = i; j <= total; j+=i)
			if(portas[j-1]) portas[j-1] = 0;
			else portas[j-1] = 1;
	//Mostrar na tela
	mostrarPortas(portas);
	formatarSaida(portas);
}

int main(){
	while(1){
		printf("Digite quantas portas e descendentes: ");
		scanf("%d", &total);
		solucao(total);
	}
	return 0;
}
