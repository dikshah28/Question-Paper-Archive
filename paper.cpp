#include <iostream>
#include <string>
#include <fstream>
#include "paper.h"
using namespace std;

string path;
void openPaper(int batchStart, std::string branch, int semester,string examType, string selectedSubject) {
             
     path = "papers/" + 
                to_string(batchStart) + "-" + to_string(batchStart+4) + "/" + branch +
                "/Semester" + 
                to_string(semester) +
                "/" + examType + 
                "/" + selectedSubject + 
                ".pdf";

ifstream file(path);

if(file.is_open())
{
    file.close();

    cout << "\nOpening question paper...\n";

    string command = "start \"\" \"" + path + "\"";
    system(command.c_str());
}
else
{
    cout << "\nQuestion paper not available.\n";
}

}






               


