#include <stdio.h>
#include <string.h>
#include <locale.h>

int main() {
	setlocale(LC_ALL, "");
    int numDoadores;
    int i;
    char nome[100];
    char sexo;
    int idade, diasDesdeUltimaDoacao;


    printf("Digite o número total de doadores: ");
    scanf("%d", &numDoadores);

    
    printf("\n");
    
    ///////ENTRADA DO PROGRAMA/////

    for ( i = 0; i < numDoadores; i++) {
        printf("Digite o nome do doador: ");
        scanf("%s", nome);
        
        printf("\n");


        printf("Digite a idade do doador: ");
        scanf("%d", &idade);

		printf("\n");

        printf("Digite o sexo do doador (M/F): ");
        scanf(" %s", &sexo);
        
        printf("\n");

        printf("Digite o número de dias desde a última doação: ");
        scanf("%d", &diasDesdeUltimaDoacao);
		
		system("cls");
		printf("----------------------------------------------\n");
	printf("\n");
	
        if ((sexo == 'M' && diasDesdeUltimaDoacao >= 60) || (sexo == 'F' && diasDesdeUltimaDoacao >= 90)) {
            printf("%s está apto a doar sangue novamente.\n", nome);
        } else { //////REPETIÇAO
            printf("%s está inapto para doar sangue novamente.\n", nome);
        }
    printf("\n");
	printf("----------------------------------------------\n");
       
    }

    return 0;
}
