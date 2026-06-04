#include <iostream>

using namespace std;

int main()
{
    for (int n = 2; n <= 10000 ; ++n) {
            char prime = true ;
            for (int d = 2; d  < n ; ++d) {
                    if (n % d == 0){
                        prime = false ;
                        break;
                    }
            }
            if (prime == true){
                    printf( " %d ", n );
            }
    }
}
