#include <stdio.h>
#include <locale.h>
#include <stdio.h>
#include <stdlib.h>

int main() 
{
	setlocale(LC_ALL,"");

    FILE *arquivoant, *resultado;
    char linha[80];
    double numero, soma = 0.0;
    int contador = 0;

    
    arquivoant = fopen("arquivoant.txt", "r");

    if (arquivoant == NULL) {
        printf("ERRO!! tente novamente. \n");
        return 1;
}
    resultado = fopen("resultado.txt", "w");

    if (resultado == NULL) {
        printf("ERRO!! o arquivo de resultado há problemas.\n");
        fclose(arquivoant);
        return 1;
}

    
    while (fgets(linha, sizeof(linha), arquivoant) != NULL) {
        
        numero = atof(linha);

        if (numero != 0) {
            soma += numero;
            contador++;
}

    
        printf("%s", linha);
}

 
    fclose(arquivoant);

   
    if (contador > 0) {
        double media = soma / contador;
        fprintf(resultado, "Média dos números: %.f\n", media);
} else {
        fprintf(resultado, "Número invalido para o arquivo.\n");
}

 
    fclose(resultado);

    printf("\nMédia calculada e escrita no arquivo 'resultado.txt'.\n");

    return 0;
}

