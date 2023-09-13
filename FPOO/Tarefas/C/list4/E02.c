#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(void){
	setlocale(LC_ALL,"");
	char time[20][5], temp2[20];
	int vitorias[20], empates[20], totalPontos[20], temp, i;
	
	for(i = 0; i < 5; i++){
		printf("\nNome do time: ");
		scanf("%s", &time[i]);
				
		printf("Vitórias do time %s: ", time[i]);
		scanf("%d", &vitorias[i]);
		
		printf("Empates do time %s: ", time[i]);
		scanf("%d", &empates[i]);
	}
	
	for(i = 0; i < 5; i++){
		vitorias[i] = vitorias[i] * 3;
		
		
		totalPontos[i] = vitorias[i] + empates[i];
		vitorias[i] + i;
		empates[i] + i;
		totalPontos[i] + i;
		
	}
	
	for(i = 0; i < 25; i++){
		if(totalPontos[0] < totalPontos[1]){
			strcpy(temp2, time[0]);
			strcpy(time[0], time[1]);
			strcpy(time[1], temp2);

			temp = totalPontos[0];
			totalPontos[0] = totalPontos[1];
			totalPontos[1] = temp;
		}
		
		if(totalPontos[1] < totalPontos[2]){
			strcpy(temp2, time[1]);
			strcpy(time[1], time[2]);
			strcpy(time[2], temp2);

			temp = totalPontos[1];
			totalPontos[1] = totalPontos[2];
			totalPontos[2] = temp;
		}
		
		if(totalPontos[2] < totalPontos[3]){
			strcpy(temp2, time[2]);
			strcpy(time[2], time[3]);
			strcpy(time[3], temp2);

			temp = totalPontos[2];
			totalPontos[2] = totalPontos[3];
			totalPontos[3] = temp;
		}
		
		if(totalPontos[3] < totalPontos[4]){
			strcpy(temp2, time[3]);
			strcpy(time[3], time[4]);
			strcpy(time[4], temp2);

			temp = totalPontos[3];
			totalPontos[3] = totalPontos[4];
			totalPontos[4] = temp;
		}
	}
	printf("\n");
	printf("\nTime: Pontos:\n");
	for(i = 0; i < 5; i++){
		printf("%s\t%d\n", time[i], totalPontos[i]);
	}
	
	return 0;
}
