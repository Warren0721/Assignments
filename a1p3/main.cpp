#include <iostream>
#include <iomanip>
#include <sstream>

using namespace std;


double fToC(double f) {
    return (f - 32) * 5.0 / 9.0;
}


double cToF(double c) {
    return c * 9.0 / 5.0 + 32;
}

int main() {
    const int ROWS = 100;
    const double START = -40.0;
    const double STEP = 5.0;

    cout << left << setw(16) << "Temperature"
         << "|" << setw(16) << "Temperature" << endl;
    cout << left << setw(16) << "(degrees)"
         << " |" << setw(16) << "(degrees)" << endl;
    cout << left << setw(8) << "F" << setw(8) << "C"
         << " |" << setw(8) << "    C" << setw(8) << "F" << endl;

    for (int i = 0; i < ROWS; ++i) {
        double f = START + i * STEP;
        double c_left = fToC(f);
        double c = START + i * STEP;
        double f_right = cToF(c);

        ostringstream line;
        line << fixed << setprecision(3);
        line << right << setw(8) << f << setw(8) << c_left
             << " |" << setw(8) << c << setw(8) << f_right;
        cout << line.str() << endl;
    }

    return 0;
}
