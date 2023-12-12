#include <stdio.h> //Entrada e Saída padrão
#include <locale.h> //Configurações de Localização
#include <string.h> //Strings são vetores de caracteres

int main(){
	setlocale(LC_ALL,"");//Configurações
	float n1, n2, n3, n4, n5;//Declaração de variáveis
	float media;
	char nome[20];
	//Entrada
	printf("Digite o nome do aluno: ");
	scanf("%s",&nome);
	printf("Digite as 5 notas do aluno: ");
	scanf("%f %f %f %f %f", &n1, &n2, &n3, &n4, &n5);
	//Processamento
	media = (n1 + n2 + n3 + n4 + n5) / 5;
	//Saída
	printf("Notas: %.1f %.1f %.1f %.1f %.1f\n", n1, n2, n3, n4, n5);
	printf("%s sua média é %.1f", nome, media);
		
	return 0;
}
- solucao2.c com validação de dados na entrada
```c
#include <stdio.h> //Entrada e Saída padrão
#include <locale.h> //Configurações de Localização
#include <string.h> //Strings são vetores de caracteres

int main(){
	setlocale(LC_ALL,"");//Configurações
	float n1, n2, n3, n4, n5;//Declaração de variáveis
	float media;
	char nome[20];
	//Entrada
	printf("Digite o nome do aluno: ");
	scanf("%s",&nome);
	do{
		printf("Digite a 1ª nota entre 0 e 10: ");
		scanf("%f", &n1);
	}while(n1 < 0 || n1 > 10);
	do{
		printf("Digite a 2ª nota entre 0 e 10: ");
		scanf("%f", &n2);
	}while(n2 < 0 || n2 > 10);
	do{
		printf("Digite a 3ª nota entre 0 e 10: ");
		scanf("%f", &n3);
	}while(n3 < 0 || n3 > 10);
	do{
		printf("Digite a 4ª nota entre 0 e 10: ");
		scanf("%f", &n4);
	}while(n4 < 0 || n4 > 10);
	do{
		printf("Digite a 5ª nota entre 0 e 10: ");
		scanf("%f", &n5);
	}while(n5 < 0 || n5 > 10);
		
	//Processamento
	media = (n1 + n2 + n3 + n4 + n5) / 5;
	//Saída
	printf("Notas: %.1f %.1f %.1f %.1f %.1f\n", n1, n2, n3, n4, n5);
	printf("%s sua média é %.1f", nome, media);
		
	return 0;
}
