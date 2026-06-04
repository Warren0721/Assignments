#include <iostream>
#include<cstdio>

using namespace std;
double number;
    char units;
    double number2;
    char symbol;

int main(){

    printf("This program converts Temperatures from Fahrenheit to Celsius and vice versa.\n");
    int first = 0;
    do{
            double number = 0.0;
    double number2 = 0.0;
    char units = 'O';
    if (first>0) {
            printf("\n");
        }
    printf("Please enter your temperature:");
    scanf("%lf",  &number );

    printf("Please enter the units (F/C): ");
    scanf(" %c",  &units );
    printf("\n");
    if (units =='F'){
        number2= (number -32 ) * 5 / 9;
        printf("A temperature of %.2f degrees Fahrenheit is equivalent to %.2f degrees Celsius. \n", number, number2);
        printf("Do you want another conversion? (Y/N):");
        first++;
        }
    else if (units=='C'){
        number2 = (number * 9 / 5) + 32;
        printf("A temperature of %.2f degrees Celsius is equivalent to %.2f degrees Fahrenheit.\n", number,number2 );
        printf("Do you want another conversion? (Y/N):");
        first++;
        }

        scanf(" %c", &symbol);
        } while ( symbol == 'Y') ;

        if( symbol=='N'){
            printf("\nThank you. Goodbye.");
                    return 0;}


    }

