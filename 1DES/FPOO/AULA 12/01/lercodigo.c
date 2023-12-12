#include <stdio.h>
int main ()
{
	FILE *arquivo;
	char c;
	
	arquivo = fopen ("Arquivo.txt", "r");
	if(arquivo == NULL)
	printf("Erro encontrado, repita novamente o arquivo : ");
	else{
		while((c=fgetc(arquivo)) != EOF)
		putchar(c);
}
 fscanf(file, "%s", c);  // ler apenas a linha 

	fclose(arquivo);
	return 0; 
}


// aprovados ou nao, criterios de media menor que 5 = reprovado
