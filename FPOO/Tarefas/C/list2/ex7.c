#include <stdio.h>

int main() {
    int num1, num2, num3, num4, num5; //variavel
    int temp; //variaveus
    
    printf("Digite cinco numeros: ");
    scanf("%d %d %d %d %d", &num1, &num2, &num3, &num4, &num5); //quantidade de variavel

    //system("cls"); limpa

    if(num1 > num2){ // > maior e inverte 
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if(num2 > num3){
        temp = num2;
        num2 = num3;
        num3 = temp;
    }
    if(num3 > num4){
        temp = num3;
        num3 = num4;
        num4 = temp;
    }
    if(num4 > num5){
        temp = num4;
        num4 = num5;
        num5 = temp;
    }
    if(num1 > num2){
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if(num2 > num3){
        temp = num2;
        num2 = num3;
        num3 = temp;
    }
    if(num3 > num4){
        temp = num3;
        num3 = num4;
        num4 = temp;
    }
    if(num1 > num2){
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if(num2 > num3){
        temp = num2;
        num2 = num3;
        num3 = temp;
    }
    if(num1 > num2){
        temp = num1;
        num1 = num2;
        num2 = temp;     // 10 if  
        //  n=1 > n=2 
        // n=2 > n=3
    }
        //////// 
    printf("Numeros em ordem crescente:");
    printf("\n%d\n%d\n%d\n%d\n%d\n", num1, num2, num3, num4, num5);

    return 0;
}
