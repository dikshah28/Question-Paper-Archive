#include <iostream>
#include <fstream>
#include <string>

#include "admin.h"

using namespace std;

void adminLogin() {
    string password;
    cout << "Enter Password: ";
    cin >> password;

    if(password == "Diksha@28") {
        cout << "access granted" << endl;
        adminMenu();
    } else {
         cout << "wrong password" << endl;
    }
}

void addQuestionPaper()
{
    int batchStart;
    int semester;

    string examType;
    string subject;

    cout << "\n===== Add Question Paper =====\n";

    cout << "Enter Batch Start Year (Example: 2024): ";
    cin >> batchStart;

    cout << "Enter Semester (1-8): ";
    cin >> semester;

    cout << "Enter Exam Type (CAE1/CAE2/CAE3/ESE): ";
    cin >> examType;

    cin.ignore();

    cout << "Enter Subject Name: ";
    getline(cin, subject);

    cout << "\nDetails Entered:\n";
    cout << "Batch : " << batchStart << "-" << batchStart + 4 << endl;
    cout << "Semester : " << semester << endl;
    cout << "Exam : " << examType << endl;
    cout << "Subject : " << subject << endl;

    string sourcePath;
    cout << "\nEnter full path of PDF: ";
    getline(cin, sourcePath);

    string destinationPath =
    "papers/" +
    to_string(batchStart) + "-" + to_string(batchStart + 4) +
    "/Semester" +
    to_string(semester) +
    "/" +
    examType +
    "/" +
    subject +
    ".pdf";

ifstream source(sourcePath, ios::binary);
ofstream destination(destinationPath, ios::binary);

if(!source)
{
    cout << "\nSource PDF not found!\n";
    return;
}

destination << source.rdbuf();

source.close();
destination.close();

cout << "\nQuestion paper added successfully!\n";
}



void deleteQuestionPaper() {

    int batchStart, semester;
    string examType, subject;

    cout << "\n===== Delete Question Paper =====\n";

    cout << "Enter Batch Start Year: ";
    cin >> batchStart;

    cout << "Enter Semester: ";
    cin >> semester;

    cout << "Enter Exam Type (CAE1/CAE2/CAE3/ESE): ";
    cin >> examType;

    cin.ignore();

    cout << "Enter Subject: ";
    getline(cin, subject);

    string path =
        "papers/" +
        to_string(batchStart) + "-" +
        to_string(batchStart + 4) +
        "/Semester" +
        to_string(semester) +
        "/" +
        examType +
        "/" +
        subject +
        ".pdf";

    if(remove(path.c_str()) == 0)
    {
        cout << "\nQuestion paper deleted successfully!\n";
    }
    else
    {
        cout << "\nQuestion paper not found!\n";
    }
}



void adminMenu() {
    int choice;

    do{
        cout << "\n====Admin Panel====\n";
        cout << "1. Add Question Paper\n";
        cout << "2. Delete Question Paper\n";
        cout << "3. Change Password\n";
        cout << "4. Logout\n";

    cout << "Enter Choice: ";
    cin >> choice;

    switch(choice) {
        case 1:
           addQuestionPaper();
           break;

        case 2:
           deleteQuestionPaper();
           break;

        case 3:
           cout << "\nChange Password Selected\n";
           break;

        case 4:
           cout << "\nLogging Out...\n";
           break;

        default:
           cout << "Invalid Choice";
        
    }

    } while(choice != 4);
}

