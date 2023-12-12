#include <stdio.h>

int main(void){
	int a, b, c, media;
	
	printf("Insira suas 3 notas: ");
	scanf("%d" "%d" "%d", &a, &b, &c);
	
	media = (a + b + c) / 3;
	
	if(media >= 6){
		printf("Aprovado");
		return 0;
	}else if(media < 6 && media >= 4){
		printf("Recuperacao");
		return 0;
	}else{
		printf("Reprovado");
		return 0;
	}
	
	return 0;
}