#include <stdio.h> 
#include <locale.h> 
#include <string.h> 
int main()
{

	float nota[5];
	float media;
	char nome[20];
	int i; 
	
	
	
	printf("Digite o nome do aluno: ");
	scanf("%s",&nome);
	
	
	
	for(i = 0; i < 5; i++){
		do{
			printf("Digite a %dª nota entre 0 e 10: ", i + 1);
			scanf("%f", &nota[i]);
		}while(nota[i] < 0 || nota[i] > 10);
	}
	

	media = (nota[0] + nota[1] + nota[2] + nota[3] + nota[4]) / 5;
	
	
	
	printf("Notas: %.1f %.1f %.1f %.1f %.1f\n", nota[0], nota[1], nota[2], nota[3], nota[4]);
	printf("%s sua média é %.1f", nome, media);
		
	return 0;
}
