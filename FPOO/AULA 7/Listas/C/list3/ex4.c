#include <stdio.h>

int main(){
	int numero, numeroo;
	
	printf("Digite dois numeros inteiros: ");
	    scanf("%d" "%d", &numero, &numeroo); //permitir leitura de tal variavel
	
	if(numero < numeroo){
		for(numeroo = numeroo; numeroo <= numero; numero++){
			printf("%d", numeroo);
		}
	}else if(numero < numeroo){    // else if serve para verdadeiro ou falso  true e false
 //if true e false 
		for(numero = numero; numero <= numeroo; numero++){
			printf("%d", numero);
		}
	}
	return 0;
}