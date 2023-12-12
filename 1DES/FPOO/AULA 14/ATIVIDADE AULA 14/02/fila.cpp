#include <stdio.h>
#include <locale.h>
#define SIZE 10

int fila[SIZE];
int inicio = 0;
int fim = 0;
int i;

void mostraFila(){
    printf("Fila:\n");
    for(i = inicio; i < fim; i++){
        printf("%d\n", fila[i]);
    }   
}

int push(int dado){
    if(fim < SIZE){
        fila[fim] = dado;
        fim++;
        return 1;
    }else{
        return 0;
    }
}

int pop(){
    if(inicio < fim){
        inicio++;
        return 1;
    }else{
        return 0;
    }   
}

int main(){

    setlocale(LC_ALL, "");

    int opcao, num;

    while(1){

        printf("Digite 1 para inserir um número\nDigite 2 para remover um número\nDigite 0 para encerrar\n");
        scanf("%d", &opcao);

        printf("------------------------------------------\n");

        if(opcao == 1){
            printf("\nDigite um número:");
            scanf("%d", &num);
            printf("\n");
            push(num);
            mostraFila();
            printf("\n");
        }else if(opcao == 2){
            pop();
            mostraFila();
            printf("\n");
        }else{
            printf("\nPrograma encerrado!");
            break;
        }

    }
    return 0;
}
