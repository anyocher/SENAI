#include <stdio.h>

int main (){
	char nome[15];
	float mediasis;
	float mediadia;
	float sis;
	float dia;
	int dias;
	int i;
	int decisao = 1;
	
	while(decisao){
		mediasis = 0;
		mediadia = 0;
		printf("\nDigite seu nome: ");
		scanf("%s", &nome);
		
		printf("Quantos dias deseja registrar? ");
		scanf("%d", &dias);
		
		for(i = 0; i<dias; i++){
		printf("digite a pressao: ");
		scanf("%f %f", &sis, &dia);
		
		mediasis += sis;
		mediadia += dia;
		}
		mediasis/=dias;
		mediadia/=dias;
	
		printf("\n%s", nome);
		printf("\n%.2f %.2f", mediasis, mediadia);
		
		printf("\n\nPara encerrar digite 0, para continuar digite 1: ");
		scanf("%d", &decisao);
		printf("\n--------------------------------------------------");
	}
	
	return 0;
}