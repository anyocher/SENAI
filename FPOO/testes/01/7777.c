#include <stdio.h>

int main(){
  
  
  float peso;
  
  char Nome[10];
  
  float altura;
  
  float media;
  
  printf("Digite seu nome: ");
  scanf("%s", &Nome);
  
  printf("Informe o peso (em kgs):\n");
  scanf("%f", &peso);

  printf("Informe a altura (em metros):\n");
  scanf("%f", &altura);

  media = peso / (altura * altura);

 printf("\nIMC e: %.0f", media);
 	
 	
 	if(media <= 18,5){
 		printf("abaixo do peso\n");
	 }else if (media > 18,5){
	 	printf("Peso normal\n");
	 }else if(media < 25){
	 	printf("acima do peso\n");
	 }else if(media < 29,9){
	 	printf("Severa\n");
	 }else if(media < 39,9)
	 	printf("Morbida\n");
	 
   
		  }

