#include <iostream>
#include <string>
#include "semester.h"
#include "exam.h"
#include "branch.h"

using namespace std;

void selectBatch() {
    int batchChoice;
    cout << "=== Available Batches===" << endl;
    cout << "1. Academic Batch : 2024-2028" << endl;
    cout << "2. Academic Batch : 2025-2029" << endl;
   
    
    cout << "Choose Batch: ";
    cin >> batchChoice;

    switch(batchChoice) {
        case 1:
        selectBranch(2024);
        break;

        case 2:
        selectBranch(2025);

        default:
        cout << "Invalid Choice" << endl;
        break;
    }
}

void selectSemester(int batchStart, std::string branch) {
    int semester;
    cout << "\nSelected Batch:"
       << batchStart << "-"
       << batchStart+4 << endl;

       cout << "\n====Available Semesters====\n";
       if(batchStart==2024) {
    //    for(int i=1; i<=6; i++) {
    //     cout << i << ". semester" << i << endl;
        cout << "1. semester 1(First Year)" << endl;
        cout << "2. semester 2(First Year)" << endl;
        cout << "3. semester 3(Second Year)" << endl;
        cout << "4. semester 4(Second Year)" << endl;
        cout << "5. semester 5(Third Year)" << endl;
       
    } else if (batchStart==2025) {
        cout << "1. semester 1(First Year)" << endl;
        cout << "2. semester 2(First Year)" << endl;
        }
    

       cout << "Enter Semester: ";
       cin >> semester;

       if(semester >= 1 && semester <= 6) {
        selectExamType(batchStart,  branch, semester);
       } else {
        cout << "Invalid Semester\n";
       }

}