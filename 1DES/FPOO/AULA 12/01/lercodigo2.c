#include <stdio.h>
int main(){
	
	FILE *arquivo;
	char str[80];
	char *nome;
	int n1, n2, n3;
	float media;
	
	arquivo = fopen ("Arquivo.txt", "r");
	if(arquivo == NULL)
		printf("Erro, n�o foi possivel abrir o arquivo\n");
	else{
		while((fgets(str, 80, arquivo)) != NULL){
			nome = strtok(str," ");
			n1 = atoi(strtok(NULL," "));
			n2 = atoi(strtok(NULL," "));
			n3 = atoi(strtok(NULL," "));
			media = (n1 + n2 + n3)/3.0;
			printf("%s %d %d %d %.1f\n", nome, n1, n2, n3, media);
		}
	}
	fclose(arquivo);
	return 0;
}
