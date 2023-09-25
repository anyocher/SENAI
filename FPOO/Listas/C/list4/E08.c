#include <stdio.h>
#include <locale.h>

int main(void){
	setlocale(LC_ALL,"");
    int vetor1[5], vetor2[5], resultado[5];
    
    for(int i = 0; i < 5; i++) {
        printf("Digite o valor %d do primeiro vetor: ", i + 1);
        scanf("%d", &vetor1[i]);
    }
    
    for(int i = 0; i < 5; i++) {
        printf("Digite o valor %d do segundo vetor: ", i + 1);
        scanf("%d", &vetor2[i]);
    }
    
    for(int i = 0; i < 5; i++) {
        resultado[i] = vetor1[i] + vetor2[4 - i];
    }
    
    printf("A soma do primeiro vetor com o inverso do segundo vetor é:\n");
    for(int i = 0; i < 5; i++) {
        printf("%d ", resultado[i]);
    }
    
    return 0;
}






