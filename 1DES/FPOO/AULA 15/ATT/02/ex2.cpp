#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_COLS 100
#define MAX_ROWS 1000

int main() {
    FILE *arquivo;
    char linha[MAX_COLS * 20];

    arquivo = fopen("entrada.csv", "r");

    if (arquivo == NULL) {
        perror("Erro ao abrir o arquivo");
        return 1;
    }

    while (fgets(linha, sizeof(linha), arquivo)) {
        char *token;
        token = strtok(linha, ",");

        while (token != NULL) {
            printf("%s ", token);
            token = strtok(NULL, ",");
        }

        printf("\n");
    }

    fclose(arquivo);

    return 0;
}
