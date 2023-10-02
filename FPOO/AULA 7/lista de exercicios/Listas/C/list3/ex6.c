#include <stdio.h>
int main (){


int num1;

printf("\nDiga um numero : ");
scanf ("%i",&num1);

if (num1 % 2 == 0){
    printf ("\nO numero %i par",num1);
}else {
    printf("\nO numero %i impar ",num1);
}
}
