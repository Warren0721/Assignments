#include <iostream>

using namespace std;

int main()
{
    for (int n = 2; n <= 10000; ++n) {
        for (int d = 2; d < n; ++d) {
            if (n % d == 0) break;
    }printf("%d",n);
}
}
