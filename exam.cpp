#include <iostream>
#include <string>

#include "exam.h"
#include "subject.h"
#include "branch.h"

using namespace std;

void selectExamType(int batchStart, std::string branch, int semester) {
    cout << "Selected Batch: " << batchStart << endl;
    cout << "Selected Semester: " << semester << endl;
    cout << "Selected Branch: " << branch << endl;
    int exam;
    cout << "=== Available Exam Papers ===" << endl;
    cout << "1. CAE 1" << endl;
    cout << "2. CAE 2" << endl;
    cout << "3. CAE 3" << endl;
    cout << "4. End Semester Examination" << endl;

    cout << "Enter Option: ";
    cin >> exam;

    switch(exam) {
        case 1:
        selectSubject(batchStart, branch, semester, "CAE1");
        break;

        case 2:
        selectSubject(batchStart, branch, semester, "CAE2");
        break;

        case 3:
        selectSubject(batchStart, branch, semester, "CAE3");
        break;

        case 4:
        selectSubject(batchStart, branch, semester, "ESE");
        break;

        default: 
        cout << "Invalid Choice: ";
        break;
    }
}