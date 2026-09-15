#include <iostream>
#include "menu.h"
#include "semester.h"
#include "admin.h"
#include "branch.h"

using namespace std;

void showMainMenu()
{
    int choice;
    do{
        cout << "=== Question Paper Archive===" << endl;
        cout << "1. View Paper" << endl;
        cout << "2. Admin Login" << endl;
        cout << "3. Exiting..." << endl;

        cout << "Enter Choice: ";
        cin >> choice;
    
        switch(choice) {
            case 1:
            selectBatch();
            break;

            case 2:
            adminLogin();
            break;

            case 3:
            cout << "Exiting...";
            break;

            default:
            cout << "Invalid Choice!";
            break;
        }
    } while (choice != 3);
    
// }
}