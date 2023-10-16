#include <stdio.h>
#include <stdlib.h>
#include <string.h>

enum Direcao { NORTE, LESTE, SUL, OESTE };

int main(void)
{
    FILE *entrada = fopen("esquerda.in", "r");
    FILE *saida = fopen("esquerda.out", "w");


    int N, i;
    char comandos[1001];

    while(1){
    
        fscanf(entrada, "%d", &N);
        if(N == 0){
        	printf("Programa finalizado!");
        	break;
		}
        fscanf(entrada, "%s", comandos);
        
        int direcaoAtual = NORTE;

        for(i = 0; i < N; i++){
            if (comandos[i] == 'E') {
                direcaoAtual = (direcaoAtual + 3) % 4;
            }else{
                
                direcaoAtual = (direcaoAtual + 1) % 4;
            }
        }

        char direcaoFinal;
        switch(direcaoAtual){
            case NORTE:
                direcaoFinal = 'N';
                break;
            case LESTE:
                direcaoFinal = 'L';
                break;
            case SUL:
                direcaoFinal = 'S';
                break;
            case OESTE:
                direcaoFinal = 'O';
                break;
        }

        fprintf(saida, "%c\n", direcaoFinal);
    }

    fclose(entrada);
    fclose(saida);

    return 0;
}

