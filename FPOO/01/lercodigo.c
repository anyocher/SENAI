#include <stdio.h>
int main ()
{
	FILE *arquivo;
	char c;
	
	arquivo = fopen ("Arquivo.txt", "r");
	if(arquivo == NULL)
	printf("Erro encontrado, repita novamente: ");
	else{
		while((c=fgetc(arquivo)) != EOF)
		putchar(c);
	}
	fclose(arquivo);
	
	
	return 0; 
}
