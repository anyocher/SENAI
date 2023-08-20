#include <stdio.h>

int main(void){
	int a, b;
	
	printf("Insira dois numeros: ");
	scanf("%d" "%d", &a, &b);
	
	if(a > b){
		printf("O maior numero e %d e o menor %d", a, b);
	}else{
		printf("O maior numero e %d e o menor %d", b, a);
	}
	return 0;
}