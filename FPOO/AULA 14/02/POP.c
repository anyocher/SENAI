#include <stdio.h>
#include <locale.h>
int main ()
{
	setlocale(LC_ALL,"");
	
	int incoming[] = {25, 28, 10, 4};
	int fila = 0;
	int flame = 5;
	int a, b, c, filas;
	filas = sizeof (incoming) /sizeof(incoming[0]);
	
	printf("\n Começo da fila \t fila 1 \t fila 2 \t fila 3 \t fila 4");
	
	return 0;
	
}
