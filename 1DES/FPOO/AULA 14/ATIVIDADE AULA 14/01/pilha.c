#include <stdio.h>
#include <locale.h>
#define SIZE 10

int pilha[SIZE];
int ponteiro = 0;
int i;

void mostraPilha(){
	printf("Pilha:\n");
	for(i = 0; i < ponteiro; i++)
		printf("%d\n", pilha[i]);
}

int push(int dado){
	if(ponteiro < SIZE){
		pilha[ponteiro] = dado;
		ponteiro++;
		return 1;
	} 
	else return 0;
}

int pop(){
	if(ponteiro >= 0){
		ponteiro--;
		return 1;
	}else
		return 0;
}

int main(){
	
	setlocale(LC_ALL, "");
	
	int opcao, num;
	
	while(1){
		
		printf("Digite 1 para inserir um número\nDigite 2 para remover um número\nDigite 0 para encerrar\n");
		scanf("%d", &opcao);
		
		printf("------------------------------------------");
		
		if(opcao == 1){
			printf("\nDigite um número: ");
			scanf("%d", &num);
			printf("\n");
			push(num);
			mostraPilha();
			printf("\n");
		}else if(opcao == 2){
			pop();
			mostraPilha();
			printf("\n");
		}else{
			printf("\nPrograma encerrado!");
			break;
		}	
				printf("------------------------------------------");
	}
	
	return 0;
}
