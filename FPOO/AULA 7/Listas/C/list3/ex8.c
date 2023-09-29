#include <stdio.h>
int main(){
	int i, fatorial;
	printf("digite um numero: ");
	scanf("%d", &i);
	
	if(i <= 0){
		printf("Digite um numero maior que 0. ");
		return 0;
		
	}else{
		for(fatorial =1; i > 1; i= i - 1 ){ //for para cada
			fatorial = fatorial * i;
		
		}
	}
	printf("%d", fatorial);
	return 0;
}
