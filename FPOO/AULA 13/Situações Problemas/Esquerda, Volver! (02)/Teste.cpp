#include <stdio.h>
#include <locale.h>


	int  direcao, i, quantidade ;

int main ()
{
setlocale(LC_ALL,"");
	
	
	printf("\nIndique a quantidade de comandos:");
	scanf("%d", &quantidade);
	
	while(1){
		
		printf("\nQual foi a diraçao do sargento: ");
		scanf("%d", &direcao);
	
	
	

			//“E” (para “esquerda, volver!”) e “D” (para “direita, volver!”)
	if(direcao){
		printf("\nEsquerda, volver!");
	}
	
	else if(direcao){
		printf("\nDireita, volver!");
		
	}
	
		printf("\nO sargento vai para a direçao %d:");
	
	return 0;
}

}
