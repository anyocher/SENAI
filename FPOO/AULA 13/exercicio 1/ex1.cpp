#include <stdio.h>
main()
{
 float dados;
 float soma;

 FILE *arquivo, *saida;

 
 arquivo = fopen ("dados.txt", "r");
 if(arquivo == NULL)
		printf("ERRO!!\n");
 
 
 while (fscanf (arquivo,"%f",&dados)!= EOF)
 soma = soma + dados;
 
 saida = fopen("soma.txt","w");
 
 printf("\n 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = ");
 
 printf ("\n ------------------------------ \n ");

 printf ("\n Soma: %.f\n",soma);

 fclose (arquivo);
} 
