#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL,"");
    int vetor[10];
    int somaPares = 0, somaImpares = 0, totalPares = 0, totalImpares = 0;
    
    for(int i = 0; i < 10; i++) {
        printf("Digite o número %d: ", i + 1);
        scanf("%d", &vetor[i]);

        if(vetor[i] % 2 == 0) {
        	totalPares++;
            somaPares += vetor[i];
        }else{
        	totalImpares++;
            somaImpares += vetor[i];
        }
    }

    float mediaPares = totalPares > 0 ? (float)somaPares / totalPares : 0;
    float mediaImpares = totalImpares > 0 ? (float)somaImpares / totalImpares : 0;

	printf("\n\n");
    printf("Soma dos números pares: %d\n", somaPares);
    printf("Média dos números pares: %.2f\n", mediaPares);
    printf("Total de números pares: %d\n", totalPares);
    printf("\n");
    printf("Soma dos números ímpares: %d\n", somaImpares);
    printf("Média dos números ímpares: %.2f\n", mediaImpares);
    printf("Total de números ímpares: %d\n", totalImpares);

    return 0;
}
