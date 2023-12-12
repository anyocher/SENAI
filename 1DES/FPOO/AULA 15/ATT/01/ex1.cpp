#include <stdio.h>
#include <locale.h>

FILE *entrada;
char arqEntrada[] = "entrada.cvs";

int main(){
	char linha[100];
	entrada = fopen(arqEntrada, "r");
	while(fgets(linha, 100, entrada)!= NULL){
		printf("s", linha);
	}
	fclose(entrada);
	return 0;
}
