#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL,"");
    int vetor[10];
    int somaPares = 0, somaImpares = 0, totalPares = 0, totalImpares = 0;
    
    for(int i = 0; i < 10; i++) {
        printf("Digite o n�mero %d: ", i + 1);
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
    printf("Soma dos n�meros pares: %d\n", somaPares);
    printf("M�dia dos n�meros pares: %.2f\n", mediaPares);
    printf("Total de n�meros pares: %d\n", totalPares);
    printf("\n");
    printf("Soma dos n�meros �mpares: %d\n", somaImpares);
    printf("M�dia dos n�meros �mpares: %.2f\n", mediaImpares);
    printf("Total de n�meros �mpares: %d\n", totalImpares);

    return 0;
}
