#include <stdio.h>
int main(){
	char nome [10];
	int doador, idade, sexo, dias;
	int apto, inapto;
	int sm, sf;//////sexo feminino e masculino/////
	
	printf("Total de doadores: ");
	scanf("%d", &doador);
	
	printf("DIGITE O NOME DO DOADOR: ");
	scanf("%s", &nome);
	
	printf("Agora, mencione sua idade: ");
	scanf("%d", &idade);
	
	
	printf("Qual seu sexo: (M ou F)");
	scanf("%d %d", &sm, &sf);
	
	
	
	
	 printf("Seus dados: %s %d %d %d %d  \n",nome, doador, idade, sexo, dias);
	 
	 
	 
	
	return 0;
}
