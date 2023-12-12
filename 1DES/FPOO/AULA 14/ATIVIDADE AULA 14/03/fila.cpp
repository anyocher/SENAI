#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

struct Lista{
    int dado;
    struct Lista *prox;
};
struct Lista *inicio = NULL;
struct Lista *fim = NULL;
struct Lista *aux = NULL;

void mostraLista(){
	int i = 0;
    aux = inicio;
    printf("Lista:\n");
    while(aux != NULL){
        printf("[%d] %d\n", i, aux->dado);
        i++;
        aux = aux->prox;
    }
}

int push(int dado){
    aux = (struct Lista*) malloc(sizeof(struct Lista));
    if(aux == NULL) return 0;
    aux->dado = dado;
    aux->prox = NULL;
    if(inicio == NULL){
        inicio = aux;
        fim = aux;
    }else{
        fim->prox = aux;
        fim = aux;
    }
    return 1;
}

int pop(){
    if(inicio != NULL){
        aux = inicio;
        inicio = inicio->prox;
        free(aux);
        return 1;
    }else
        return 0;
}

int slice(int index){
    int i;
    aux = inicio;
    if(index == 0){
        inicio = inicio->prox;
        free(aux);
        return 1;
    }else{
        for(i = 0; i < index-1; i++){
            aux = aux->prox;
        }
        struct Lista *aux2 = aux->prox;
        aux->prox = aux2->prox;
        free(aux2);
        return 1;
    }
    return 0;
}

int main(){
    setlocale(LC_ALL, "");

    int opcao, num;

    while(1){

        printf("Digite 1 para inserir um número\nDigite 2 para remover um número\nDigite 3 para remover um número especifico\nDigite 0 para encerrar\n");
        scanf("%d", &opcao);

        printf("------------------------------------------\n");

        if(opcao == 1){
            printf("\nDigite um número:");
            scanf("%d", &num);
            printf("\n");
            push(num);
            mostraLista();
            printf("\n");
        }else if(opcao == 2){
            pop();
            mostraLista();
            printf("\n");
        }else if(opcao == 3){
        	printf("\nDigite a posição index do número desejado:");
            scanf("%d", &num);
            printf("\n");
            slice(num);
            mostraLista();
            printf("\n");
		}else{
            printf("\nPrograma encerrado!");
            break;
        }
    }
    return 0;
}
