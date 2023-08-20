#include <stdio.h>
int main(){
	int num, ana;
	printf("Coloque um numero da tabuada: ");
	scanf("%d", &num);
	// enquanto for <10 vai rodar, e c for >9 n vai rodar
	for(ana = 0; ana <= 10; ana++){
		printf("%dx%d = %d\n", num, ana, num * ana);
	}
	return 0;
}
