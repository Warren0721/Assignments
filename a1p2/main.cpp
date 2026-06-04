#include <iostream>
#include<cstdio>

using namespace std;

int main(){
    double number;
    char units;
    double number2;
    char symbol;
    printf("This program converts Temperatures from Fahrenheit to Celsius and vice versa.\n");
    printf("Please enter your temperature:");
    scanf("%lf", &number);

    printf("Please enter the units (F/C):");
    scanf("%c", &units);

    if ( units=="F"){
        &number2= (&number ¨C 32 ) * 5 / 9;
        printf("A temperature of %d degrees Fahrenheit is equivalent to %d degrees Celsius.", number, number2);
    else if (&units=="C"){
        &number2 = (&number * 9 / 5) + 32
        printf("A temperature of %d degrees Celsius is equivalent to %d degrees Fahrenheit.", number,number2 );}}
    printf("Do you want another conversion? (Y/N):");
    scanf("%c", &symbol);
    if(&symbol==Y){
            return 0;

    }

}
