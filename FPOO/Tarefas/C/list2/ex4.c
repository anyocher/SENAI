#include <stdio.h>

int main(void){
	int a, b, c;
	
	printf(" primeiro lado do triangulo: ");
	scanf("%d", &a);
	
	printf("segundo lado do triangulo: ");
	scanf("%d", &b);
	
	printf("terceiro lado do triangulo: ");
	scanf("%d", &c);
	
	if(a == b && a == c){
		printf("T equilatero");
	} else if(a == b || a == c) {
		printf("T isosceles");
	} else {
		printf("T escaleno");
	}
	return 0;
}