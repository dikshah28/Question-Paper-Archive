#include <iostream>
#include "semester.h"
#include "branch.h"

using namespace std;

void selectBranch(int batchStart) {
    int choice;
    string branch;

    cout << "\n===== Select Branch =====\n";
    cout << "1. Computer Engineering\n";
    cout << "2. Information Technology\n";
    cout << "3. Cyber Security\n";
    cout << "4. Artificial Intelligence & Data Science (AIDS)\n";
    cout << "5. Artificial Intelligence & Machine Learning (AIML)\n";

    cout << "Enter Choice: ";
    cin >> choice;

    switch(choice) {
        case 1:
        branch = "CE";
        break;

        case 2:
        branch = "IT";
        break;

        case 3:
        branch = "Cybersecurity";
        break;

        case 4:
        branch = "AIDS";
        break;

        case 5:
        branch = "AIML";
        break;

        default:
        cout <<  "Invalid Choice";
    }
    selectSemester(batchStart, branch);
}