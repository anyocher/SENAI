#include <stdio.h>
#include <locale.h>
int main(){
	int a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, ana, temp;
	setlocale(LC_ALL,"Portuguese");
	printf("Digite 10 numeros: ");
	scanf(" %d %d %d %d %d %d %d %d %d %d", &a1, &a2, &a3, &a4, &a5, &a6, &a7, &a8, &a9, &a10);
	
	for(ana = 0; ana <10; ana++){
		if(a1 < a2){
			temp = a1; 
			a1 = a2;
			a2 = temp;
		}
		if(a2 < a3){
			temp = a2;
			a2 = a3;
			a3 = temp;
		}
		if(a3 < a4){
			temp = a3;
			a3 = a4;
			a4 = temp;
		}
		if(a4 < a5){
			temp = a4;
			a4 = a5;
			a5 = temp;
		}
		if(a5 < a6){
			temp = a5;
			a5 = a6; 
			a6 = temp; 
		}
		if(a6 < a7){
			temp = a6;
			a6 = a7;
			a7 = temp;
		}
		if(a7 < a8){
			temp = a7;
			a7 = a8;
			a8 = temp;
		}
		if(a8 < a9){
			temp = a8; 
			a8 = a9;
			a9 = temp;
		}
		if(a9 < a10){
			temp = a9;
			a9 = a10;
			a10 = temp;
		}
	}
	printf("O maior numero é: %d ", a1 );
	
	return 0;
}
