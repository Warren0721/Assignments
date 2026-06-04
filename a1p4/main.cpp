#include <iostream>
#include <cctype>
using namespace std;

int main() {
    char choice;
    int input = 0

    do {
        cout << "\nC++ Help Menu\n";
        cout << "Select Help on:\n";
        cout << "1. If\n";
        cout << "2. Switch\n";
        cout << "3. For\n";
        cout << "4. While\n";
        cout << "5. Do-while\n";
        cout << "x. Exit\n";
        cout << "Selection: ";
        cin >> choice;


        switch tolower(choice)
                case 1
                cout << "\nif: Executes a block of code only if a specified condition is true.\n";

                cout << "\nswitch: Selects one of many code blocks to execute based on the value of an expression.\n";

                cout << "\nfor: Repeats a block of code a specified number of times, with initialization, condition, and increment/decrement.\n";

                cout << "\nwhile: Repeats a block of code as long as a specified condition is true; condition checked before loop entry.\n";

                cout << "\ndo-while: Similar to while, but the code block is executed once before checking the condition.\n";

                cout << "\nThank you. Good bye.\n";

                cout << "\nInvalid selection. Please enter 1, 2, 3, 4, 5, or x.\n";

