#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#define SIZE 10

int fila[SIZE];
int inicioFila = 0;
int fimFila = 0;
int pilha[SIZE];
int ponteiroPilha = 0;
int i;

void mostraFila(){
    printf("Fila:\n");
    for(i = inicioFila; i < fimFila; i++)
        printf("%d\n", fila[i]);
}

int pushFila(int dado){
    if(fimFila < SIZE){
        fila[fimFila] = dado;
        fimFila++;
        return 1;
    } 
    else return 0;
}

int popFila(){
    if(inicioFila < fimFila){
        inicioFila++;
        return 1;
    }else
        return 0;
}



void mostraPilha(){
	printf("Pilha:\n");
	for(i = 0; i < ponteiroPilha; i++)
		printf("%d\n", pilha[i]);
}

int pushPilha(int dado){
	if(ponteiroPilha < SIZE){
		pilha[ponteiroPilha] = dado;
		ponteiroPilha++;
		return 1;
	} 
	else return 0;
}

int popPilha(){
	if(ponteiroPilha >= 0){
		ponteiroPilha--;
		return 1;
	}else
		return 0;
}

struct Lista{
    int dado;
    struct Lista *prox;
};

struct Lista *inicio = NULL;
struct Lista *fim = NULL;
struct Lista *aux = NULL;

void mostraLista(){
    aux = inicio;
    printf("Lista:\n");
    while(aux != NULL){
        printf("%d\n", aux->dado);
        aux = aux->prox;
    }
}

int pushLista(int dado){
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

int popLista(){
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
	
	int opcao, opcao2, num;
	
	while(1){
		printf("\n1. Pilha\n2. Fila\n3. Lista\n0. Sair\nEscolha uma opção: ");
		scanf("%d", &opcao);
		
		if(opcao == 1){
			do{
				printf("\n--------------------------------------------\n");
				printf("\nOpção Selecionada: PILHA\n");
				printf("1. Inserir Número\n2. Deletar Número\n0. Sair\n");
				scanf("%d", &opcao2);
				
				if(opcao2 == 1){
					printf("\nDigite um número: ");
					scanf("%d", &num);
					printf("\n");
					pushPilha(num);
					mostraPilha();
					printf("\n");
				}else if(opcao2 == 2){
					popPilha();
					printf("\n");
					mostraPilha();
				}else{
					printf("\nOpção PILHA encerrada!\n");
					printf("\n--------------------------------------------\n");
				}
			}while(opcao2 != 0);
		}
		
		else if(opcao == 2){
			do{
				printf("\n--------------------------------------------\n");
				printf("\nOpção Selecionada: FILA\n");
				printf("1. Inserir Número\n2. Deletar Número\n0. Sair\n");
				scanf("%d", &opcao2);
				
				if(opcao2 == 1){
					printf("\nDigite um número: ");
					scanf("%d", &num);
					printf("\n");
					pushFila(num);
					mostraFila();
					printf("\n");
				}else if(opcao2 == 2){
					popFila();
					printf("\n");
					mostraFila();
				}else{
					printf("\nOpção FILA encerrada!\n");
					printf("\n--------------------------------------------\n");
				}
			}while(opcao2 != 0);
		}
		
		else if(opcao == 3){
			do{
				printf("\n--------------------------------------------\n");
				printf("\nOpção Selecionada: LISTA\n");
				printf("1. Inserir Número\n2. Deletar Número\n0. Sair\n");
				scanf("%d", &opcao2);
				
				if(opcao2 == 1){
					printf("\nDigite um número: ");
					scanf("%d", &num);
					printf("\n");
					pushLista(num);
					mostraLista();
					printf("\n");
				}else if(opcao == 2){
					printf("\nDigite a posição do valor que será excluido: ");
					scanf("%d", &num);
					printf("\n");
					slice(num);
					mostraLista();
					printf("\n");
				}else{
					printf("\nOpçao LISTA encerrada!\n");
					printf("\n--------------------------------------------\n");
				}			
			}while(opcao2 != 0);
		}
		
		else{
			printf("\nPrograma Encerrado!\n");
			break;
		}
	}
	
	return 0;
}		
