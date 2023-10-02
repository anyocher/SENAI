#include <stdio.h>
#include <locale.h>

int main() 
{
setlocale(LC_ALL,"");
    char direcao = 'N'; 

    int n, quantidade;
  
       
	printf("\nIndique a quantidade de comandos ao sargento:\n");
	scanf("%d", &quantidade);

    printf("\nQual foi a diraçao do sargento apos os comandos:\n");
      scanf("%d", &n); 

    while (n--) {
        char comando;
        scanf(" %c", &comando);  
   

        if (comando == 'E') {
 
            if (direcao == 'N') {
                direcao = 'L';
            } else if (direcao == 'L') {
                direcao = 'L';
            } else if (direcao == 'S') {
                direcao = 'L';
            } else if (direcao == 'O') {
                direcao = 'S';
            }
        } else if (comando == 'D') {
           
            if (direcao == 'N') {
                direcao = 'S';
            } else if (direcao == 'L') {
                direcao = 'S';
            } else if (direcao == 'S') {
                direcao = 'O';
            } else if (direcao == 'O') {
                direcao = 'L';
            }
        }
    }

    //direção final
    printf("%c\n", direcao);

    return 0;
}

