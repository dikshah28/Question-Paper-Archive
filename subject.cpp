#include <iostream>
#include <vector>

#include "subject.h"
#include "paper.h"

using namespace std;

 void selectSubject(int batchStart, std::string branch, int semester, string examType) {
    int subjectChoice;
    vector <string> subjects;

    //BATCH 2024-2028
  if(batchStart == 2024 && semester == 1 && (branch=="CE" || branch=="IT" || branch=="Cybersecurity" || branch=="AIDS" || branch=="AIML")) {
   subjects = {
    "ENGINEERING MATHEMATICS",
    "ENGINEERING PHYSICS -I",
    "BASIC ELECTRICAL ENGINEERING",
    "WEB 2.0",
    "INTRODUCTION TO CYBER SECURITY"
   };
  } else if(batchStart == 2024 && semester == 2 && (branch=="CE" || branch=="IT" || branch=="Cybersecurity" || branch=="AIDS" || branch=="AIML")) {
    subjects = {
        "PROBABILITY AND STATISTICS",
        "ENGINEERING PHYSICS -II",
        "DIGITAL ELECTRONICS",
        "PROGRAMMING LOGIC SKILLS",
        "INDIAN KNOWLEDGE SYSTEM"
    };
  } else if(batchStart == 2024 && semester == 3 && (branch=="CE" || branch == "IT" || branch == "Cybersecurity")) {
    subjects = {
        "DISCRETE MATHEMATICS AND GRAPH THEORY",
        "DATA STRUCTURES AND ALGORITHMS",
        "COMPUTER ARCHITECTURE AND ORGANIZATION",
        "INTRODUCTION TO ARTIFICIAL INTELLIGENCE"
    };
  } else if(batchStart == 2024 && semester == 3 && (branch =="AIDS" || branch == "AIML")) {
    subjects = {
      "DISCRETE MATHEMATICS AND GRAPH THEORY",
      "MACHINE LEARNING SKILL",
      "DATA STRUCTURES AND ALGORITHMS",
      "DATA VISUALIZATION SKILLS",
      "COMPUTER ARCHITECTURE AND ORGANIZATION"
    };
  }
  
  else if(batchStart == 2024 && semester == 4 && (branch=="CE" || branch == "IT" || branch == "Cybersecurity")) {
   subjects = { 
    "TRANSFORM AND NUMERICAL METHODS",
    "WEB TECHNOLOGY",
    "OPERATING SYSTEMS",
    "THEORY OF COMPUTATION",
    "JAVA PROGRAMMING SKILLS"
  };
} else if(batchStart == 2024 && semester == 4 && (branch =="AIDS" || branch == "AIML")) {
  subjects = {
    "MATHEMATICAL FOUNDATION FOR AI & MACHINE LEARNING",
    "OPERATING SYSTEMS",
    "OBJECT ORIENTED PROGRAMMING SKILLS",
    "COMPUTER NETWORKS",
    "MOBILE APPLICATION DEVELOPMENT"
  };
} else if(batchStart == 2024 && semester == 5 && (branch=="CE" || branch == "IT" || branch == "Cybersecurity")) {
  subjects = {
    "DATABASE MANAGEMENT SYSTEM",
    "COMPUTER NETWORKS AND SECURITY",
    "CLOUD COMPUTING",
    "SOFTWARE ENGINEERING AND PROJECT MANAGEMENT",
    "ENGINEERING ECONOMICS AND INDUSTRIAL MANAGEMENT",
    "FOUNDATIONS OF DATA SCIENCE"
  };
} else if (batchStart==2024 && semester == 5 && (branch =="AIDS" || branch == "AIML")) {
  subjects = {
    "DATABASE MANAGEMENT SYSTEM",
    "DESIGN AND ANALYSIS OF ALGORITHMS",
    "CLOUD COMPUTING",
    "OPTIMIZATION TECHNIQUES IN MACHINE LEARNING",
    "ENGINEERING ECONOMICS AND INDUSTRIAL MANAGEMENT",
    "ETHICAL HACKING AND PENETRATION TESTING"
  };


  //BATCH - 2025-2029
} else if (batchStart == 2025 && semester==1 && (branch=="CE" || branch=="IT" || branch=="Cybersecurity" || branch=="AIDS" || branch=="AIML")) {
  subjects = {
    "MATRICES AND DIFFERENTIAL CALCULUS",
    "ENVIRONMENTAL CHEMISTRY",
    "INDIAN KNOWLEDGE SYSTEM",
    "FOUNDATION OF DATA ANALYTICS",
    "ENGLISH FOR ENGINEERS"
  };
} else if (batchStart == 2025 && semester == 2 && (branch=="CE" || branch=="IT" || branch=="Cybersecurity" || branch=="AIDS" || branch=="AIML")) {
  subjects = {
    "INTEGRAL CALCULUS AND DIFFERENTIAL EQUATIONS",
    "DIGITAL LOGIC DESIGN",
    "PROGRAMMING FOR PROBLEM SOLVING",
    "ENGINEERING PHYSICS",
    "UNIVERSAL HUMAN VALUES",  
  };
}
        

    cout << "\nSelected Batch: " << batchStart << endl;
    cout << "Selected Semester: " << semester << endl;
    cout << "Selected Exam Type: " << examType << endl;

    cout << "\n===== Select Subject =====\n";
    cout << "Number of subjects: " << subjects.size() << endl;
  
     for(int i=0; i<subjects.size(); i++) {
        cout  << i+1 << ". " << subjects[i] << endl;
    }
  
  cout << "Enter Choice: " ;
  cin >> subjectChoice;

  if(subjectChoice >= 1 && subjectChoice <= subjects.size()) {
  
    string selectedSubject = subjects[subjectChoice-1];
    openPaper(batchStart, branch, semester, examType, selectedSubject);
  } else {
    cout << "Invalid Choice\n";
  }

}