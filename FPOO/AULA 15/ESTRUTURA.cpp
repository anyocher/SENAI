#include <stdio.h>

struct Registro {
	char nome[50];
	int idade;
};
	
int main(){
	FILE *arq;
	struct Registro r1;
	arq = fopen("dados.txt","r");
	if(arq == NULL){
		printf("Erro ao ler arquivo.");
	}else{
		while(fscanf(arq,"%s %d", r1.nome, &r1.idade) != EOF){
			printf("%s %d\n", r1.nome, r1.idade);
		}
	}
	fclose(arq);
}
