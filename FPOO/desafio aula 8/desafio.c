#include <stdio.h>
int main(){
	char nome[50];
	
	//variavel
	float v1, v2, v3, v4, v5; 
	float montante;
	int ana, i, comissoes;
	
	//digitar nome
	printf("digite seu nome: ");
		scanf("%s",&nome);
	
	//vendas	
	printf("Coloque o valor de suas vendas: ");
	scanf("%d %d %d %d %d" , &v1, &v2, &v3, &v4, &v5) ;
	
	montante = (v1 + v2 + v3 + v4 + v5);
	if(v1 > 4000){
		comissoes = montante *1,6;
	}else if (montante >4000){
		comissoes = montante *1,5
	}
			printf("Valor de vendas e comissoes");
			
	
	return 0;
	}
	
	
	
	


