#include <stdio.h>
#include <locale.h>

void comando(char comandos[], int N ){
		int direcao = 'N';
int i;

//“E” (para “esquerda, volver!”) e “D” (para “direita, volver!”)
	
		
	for (i = 0; i < N; i++){
		if (comandos[i] == 'E') {
            if (direcao == 'N') {
                direcao = 'O';
            } else if (direcao == 'O') {
                direcao = 'S';
            } else if (direcao == 'S') {
                direcao = 'L';
            } else if (direcao == 'L') {
                direcao = 'N';
            }
        } else if (comandos[i] == 'D') {
            if (direcao == 'N') {
                direcao = 'L';
            } else if (direcao == 'L') {
                direcao = 'S';
            } else if (direcao == 'S') {
                direcao = 'O';
            } else if (direcao == 'O') {
                direcao = 'N';
            }
        }
	}
	
	
		
}
int main() 
{
    int N, entrada, saida;
    char comandos[1001];

   
    if (entrada == NULL) {
        perror("Erro ao abrir o arquivo de entrada");
        return 0;
    }

  
    if (saida == NULL) {
        perror("!!!!ERRO!!!!");
       
        return 0;
    }

    while (1) {
        scanf(entrada, "%d", &N);
        if (N == 0) {
            break;
        }

        scanf(entrada, "%s", comandos);

        char direcaofinal = final(comandos, N);
        printf(saida, "%c\n", direcaofinal);
    }

  

    return 0;
}
//	printf("\n--------------------------------------\n");
