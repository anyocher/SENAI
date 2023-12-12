#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL,"");
	int num[5], temp, i;

	for(i = 0; i < 5; i++){
		printf("Insira o %d número: ", i + 1);
		scanf("%d", &num[i]);
	}
	
	for(i = 0; i < 5; i++){
		if(num[0] < num[1]){
			temp = num[0];
			num[0] = num[1];
			num[1] = temp;
		}
		if(num[1] < num[2]){
			temp = num[1];
			num[1] = num[2];
			num[2] = temp;
		}
		if(num[2] < num[3]){
			temp = num[2];
			num[2] = num[3];
			num[3] = temp;
		}
		if(num[3] < num[4]){
			temp = num[3];
			num[3] = num[4];
			num[4] = temp;
		}
		if(num[4] < num[5]){
			temp = num[4];
			num[4] = num[5];
			num[5] = temp;
		}
	}
	
	for(i = 0; i < 5; i++){
		printf("\n%d", num[i]);
	}
}
