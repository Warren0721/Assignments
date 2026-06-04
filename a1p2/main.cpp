#include <iostream>
#include<cstdio>

using namespace std;
double number;
    char units;
    double number2;
    char symbol;

int main(){

    printf("This program converts Temperatures from Fahrenheit to Celsius and vice versa.\n");
    do{
            double number = 0.0;
    double number2 = 0.0;
    char units = 'O';     // 随便一个合理的默认字符

    printf("Please enter your temperature:");
    scanf("%lf",  &number );

    printf("Please enter the units (F/C): ");
    scanf(" %c",  &units );

    if (units =='F'){
        number2= (number -32 ) * 5 / 9;
        printf("A temperature of %.2f degrees Fahrenheit is equivalent to %.2f degrees Celsius. \n", number, number2);
        printf("Do you want another conversion? (Y/N):");
        }
    else if (units=='C'){
        number2 = (number * 9 / 5) + 32;
        printf("A temperature of %.2f degrees Celsius is equivalent to %.2f degrees Fahrenheit.", number,number2 );
        printf("Do you want another conversion? (Y/N):");
        }

        scanf(" %c", &symbol);
        } while ( symbol == 'Y');

        if( symbol=='N'){
            printf("Thank you. Goodbye.");
                    return 0;}


    }

