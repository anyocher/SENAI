#include <stdio.h>
#define SIZE 6 //quantidade de caracter

	int pilha[SIZE] ;
	int ponteiro = 0;
	int i;
	
	void mostraPilha()
	
{

		printf("Pilha:\n");
	for (i = 0; i < ponteiro; i++)
		printf("%d\n", pilha[i]);
}
	int push(int dado)
	
{
	if (ponteiro < SIZE){
		

		pilha[ponteiro] = dado;
		ponteiro++;
	return 1;
	
		}
	return 0;
	
}	
int pop ()
{
	if (ponteiro >= 0){
		ponteiro--;
		return 1;
		
}else 
	return 0;
}
		
int main ()
{

	//push inserir /// pop retirar
	
	push(25);		
	push(10);
	push(16);
	push(13);
	push(11);
	push(53);

	mostraPilha();
	
	return 0;
	
}
