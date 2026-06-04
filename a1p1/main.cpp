#include<cstdio>
#include <iostream>

using namespace std;

int multiplying_power[] = {1,2,3,4,5,6,7,8,9,10,11,12};
int size =12;


int main() {
    printf("%4s"," " );
    printf(" |");
    for (int i=0;i<=11; i++){
        printf("%4d",multiplying_power[i]);
        printf(" |");
    }
    printf("\n");
    for (int i=0; i<=11;i++){
            printf("%4d" , multiplying_power[i]);
            printf(" |");
        for(int j=0; j<=11; j++){
                printf("%4d",multiplying_power[i]*multiplying_power[j]);
                printf(" |");
    } printf("\n");
    }return 0;
    }

