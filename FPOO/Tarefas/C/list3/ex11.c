#include <stdio.h>
int main(){
	int a1, a2, a3, a4, a5, ana, temp;
	printf("Digite 5 numbers: ");
	scanf("%d %d %d %d %d", &a1, &a2, &a3, &a4, &a5);
	
	for(ana = 0; ana < 5; ana++){ // ana é igual a 0, enquanto ana for menor q 5 vai almentar ana em 1(ate 6) 
		if(a1 > a2){ // > maior q numero 1  pq eu quero o 1 menor, ordem crescente
			temp = a1;
			a1 = a2;
			a2 = temp;
		}
		if(a2 > a3){
			temp = a2;
			a2 = a3;
			a3 = temp;
		}
		if(a3 > a4){
			temp = a3;
			a3 = a4;
			a4 = temp;
		}
		if(a4 > a5){
			temp = a4;
			a4 = a5;
			a5 = temp;
		}
		
		
		// ANA CLARA ORTIZ OCHNER 1 des
		
			
		
	}
	printf("A ordem e: %d %d %d %d %d", a1, a2, a3, a4, a5);
	return 0;
}
