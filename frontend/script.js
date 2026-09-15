 function selectBatch() {

    const batch = document.getElementById("batch").value;

    if (batch === "") {
        alert("Please select an academic batch.");
        return;
    }

    console.log("Selected Batch:", batch);

    document.getElementById("branchSection")
        .classList.remove("hidden");
}


function selectBranch() {

    const branch = document.getElementById("branch").value;

    if (branch === "") {
        alert("Please select a branch.");
        return;
    }

    console.log("Selected Branch:", branch);

    document.getElementById("semesterSection")
        .classList.remove("hidden");
}


function selectSemester() {

    const semester =
        document.getElementById("semester").value;

    if (semester === "") {
        alert("Please select a semester.");
        return;
    }

    console.log("Selected Semester:", semester);

    document.getElementById("examSection")
        .classList.remove("hidden");
}


function selectExam() {

    const examType =
        document.getElementById("examType").value;

    if (examType === "") {
        alert("Please select an exam type.");
        return;
    }

    console.log("Selected Exam:", examType);

    loadSubjects();
}


/* =========================
   SUBJECT DATABASE
========================= */

const subjects = {

    1: {
        CE: [
            "ENGINEERING MATHEMATICS",
            "ENGINEERING PHYSICS -I",
            "BASIC ELECTRICAL ENGINEERING",
            "WEB 2.0",
            "INTRODUCTION TO CYBER SECURITY"
        ],

        IT: [
            "ENGINEERING MATHEMATICS",
            "ENGINEERING PHYSICS -I",
            "BASIC ELECTRICAL ENGINEERING",
            "WEB 2.0",
            "INTRODUCTION TO CYBER SECURITY"
        ],

        Cybersecurity: [
            "ENGINEERING MATHEMATICS",
            "ENGINEERING PHYSICS -I",
            "BASIC ELECTRICAL ENGINEERING",
            "WEB 2.0",
            "INTRODUCTION TO CYBER SECURITY"
        ],

        AIDS: [
            "ENGINEERING MATHEMATICS",
            "ENGINEERING PHYSICS -I",
            "BASIC ELECTRICAL ENGINEERING",
            "WEB 2.0",
            "INTRODUCTION TO CYBER SECURITY"
        ],

        AIML: [
            "ENGINEERING MATHEMATICS",
            "ENGINEERING PHYSICS -I",
            "BASIC ELECTRICAL ENGINEERING",
            "WEB 2.0",
            "INTRODUCTION TO CYBER SECURITY"
        ]
    },


    2: {
        CE: [
            "PROBABILITY AND STATISTICS",
            "ENGINEERING PHYSICS -II",
            "DIGITAL ELECTRONICS",
            "PROGRAMMING LOGIC SKILLS",
            "INDIAN KNOWLEDGE SYSTEM"
        ],

        IT: [
            "PROBABILITY AND STATISTICS",
            "ENGINEERING PHYSICS -II",
            "DIGITAL ELECTRONICS",
            "PROGRAMMING LOGIC SKILLS",
            "INDIAN KNOWLEDGE SYSTEM"
        ],

        Cybersecurity: [
            "PROBABILITY AND STATISTICS",
            "ENGINEERING PHYSICS -II",
            "DIGITAL ELECTRONICS",
            "PROGRAMMING LOGIC SKILLS",
            "INDIAN KNOWLEDGE SYSTEM"
        ],

        AIDS: [
            "PROBABILITY AND STATISTICS",
            "ENGINEERING PHYSICS -II",
            "DIGITAL ELECTRONICS",
            "PROGRAMMING LOGIC SKILLS",
            "INDIAN KNOWLEDGE SYSTEM"
        ],

        AIML: [
            "PROBABILITY AND STATISTICS",
            "ENGINEERING PHYSICS -II",
            "DIGITAL ELECTRONICS",
            "PROGRAMMING LOGIC SKILLS",
            "INDIAN KNOWLEDGE SYSTEM"
        ]
    },


    3: {

        CE: [
            "DISCRETE MATHEMATICS AND GRAPH THEORY",
            "DATA STRUCTURES AND ALGORITHMS",
            "COMPUTER ARCHITECTURE AND ORGANIZATION",
            "INTRODUCTION TO ARTIFICIAL INTELLIGENCE"
        ],

        IT: [
            "DISCRETE MATHEMATICS AND GRAPH THEORY",
            "DATA STRUCTURES AND ALGORITHMS",
            "COMPUTER ARCHITECTURE AND ORGANIZATION",
            "INTRODUCTION TO ARTIFICIAL INTELLIGENCE"
        ],

        Cybersecurity: [
            "DISCRETE MATHEMATICS AND GRAPH THEORY",
            "DATA STRUCTURES AND ALGORITHMS",
            "COMPUTER ARCHITECTURE AND ORGANIZATION",
            "INTRODUCTION TO ARTIFICIAL INTELLIGENCE"
        ],

        AIDS: [
            "DISCRETE MATHEMATICS AND GRAPH THEORY",
            "MACHINE LEARNING SKILL",
            "DATA STRUCTURES AND ALGORITHMS",
            "DATA VISUALIZATION SKILLS",
            "COMPUTER ARCHITECTURE AND ORGANIZATION"
        ],

        AIML: [
            "DISCRETE MATHEMATICS AND GRAPH THEORY",
            "MACHINE LEARNING SKILL",
            "DATA STRUCTURES AND ALGORITHMS",
            "DATA VISUALIZATION SKILLS",
            "COMPUTER ARCHITECTURE AND ORGANIZATION"
        ]
    },


    4: {

        CE: [
            "TRANSFORM AND NUMERICAL METHODS",
            "WEB TECHNOLOGY",
            "OPERATING SYSTEMS",
            "THEORY OF COMPUTATION",
            "JAVA PROGRAMMING SKILLS"
        ],

        IT: [
            "TRANSFORM AND NUMERICAL METHODS",
            "WEB TECHNOLOGY",
            "OPERATING SYSTEMS",
            "THEORY OF COMPUTATION",
            "JAVA PROGRAMMING SKILLS"
        ],

        Cybersecurity: [
            "TRANSFORM AND NUMERICAL METHODS",
            "WEB TECHNOLOGY",
            "OPERATING SYSTEMS",
            "THEORY OF COMPUTATION",
            "JAVA PROGRAMMING SKILLS"
        ],

        AIDS: [
            "MATHEMATICAL FOUNDATION FOR AI & MACHINE LEARNING",
            "OPERATING SYSTEMS",
            "OBJECT ORIENTED PROGRAMMING SKILLS",
            "COMPUTER NETWORKS",
            "MOBILE APPLICATION DEVELOPMENT"
        ],

        AIML: [
            "MATHEMATICAL FOUNDATION FOR AI & MACHINE LEARNING",
            "OPERATING SYSTEMS",
            "OBJECT ORIENTED PROGRAMMING SKILLS",
            "COMPUTER NETWORKS",
            "MOBILE APPLICATION DEVELOPMENT"
        ]
    },


    5: {

        CE: [
            "DATABASE MANAGEMENT SYSTEM",
            "COMPUTER NETWORKS AND SECURITY",
            "CLOUD COMPUTING",
            "SOFTWARE ENGINEERING AND PROJECT MANAGEMENT",
            "ENGINEERING ECONOMICS AND INDUSTRIAL MANAGEMENT",
            "FOUNDATIONS OF DATA SCIENCE"
        ],

        IT: [
            "DATABASE MANAGEMENT SYSTEM",
            "COMPUTER NETWORKS AND SECURITY",
            "CLOUD COMPUTING",
            "SOFTWARE ENGINEERING AND PROJECT MANAGEMENT",
            "ENGINEERING ECONOMICS AND INDUSTRIAL MANAGEMENT",
            "FOUNDATIONS OF DATA SCIENCE"
        ],

        Cybersecurity: [
            "DATABASE MANAGEMENT SYSTEM",
            "COMPUTER NETWORKS AND SECURITY",
            "CLOUD COMPUTING",
            "SOFTWARE ENGINEERING AND PROJECT MANAGEMENT",
            "ENGINEERING ECONOMICS AND INDUSTRIAL MANAGEMENT",
            "FOUNDATIONS OF DATA SCIENCE"
        ],

        AIDS: [
            "DATABASE MANAGEMENT SYSTEM",
            "DESIGN AND ANALYSIS OF ALGORITHMS",
            "CLOUD COMPUTING",
            "OPTIMIZATION TECHNIQUES IN MACHINE LEARNING",
            "ENGINEERING ECONOMICS AND INDUSTRIAL MANAGEMENT",
            "ETHICAL HACKING AND PENETRATION TESTING"
        ],

        AIML: [
            "DATABASE MANAGEMENT SYSTEM",
            "DESIGN AND ANALYSIS OF ALGORITHMS",
            "CLOUD COMPUTING",
            "OPTIMIZATION TECHNIQUES IN MACHINE LEARNING",
            "ENGINEERING ECONOMICS AND INDUSTRIAL MANAGEMENT",
            "ETHICAL HACKING AND PENETRATION TESTING"
        ]
    }
};

function loadSubjects() {

    const semester =
        document.getElementById("semester").value;

    const branch =
        document.getElementById("branch").value;

    const subjectDropdown =
        document.getElementById("subject");

    subjectDropdown.innerHTML =
        '<option value="">Select Subject</option>';

    const semesterSubjects =
        subjects[semester]?.[branch];

    if (!semesterSubjects) {

        alert("Subjects for this semester are not available yet.");

        return;
    }

    semesterSubjects.forEach(function(subject) {

        const option =
            document.createElement("option");

        option.value = subject;
        option.textContent = subject;

        subjectDropdown.appendChild(option);
    });

    document.getElementById("subjectSection")
        .classList.remove("hidden");
}

function selectSubject() {

    const subject =
        document.getElementById("subject").value;

    if (subject === "") {
        alert("Please select a subject.");
        return;
    }

    const batch =
        document.getElementById("batch").value;

    const branch =
        document.getElementById("branch").value;

    const semester =
        document.getElementById("semester").value;

    const examType =
        document.getElementById("examType").value;


    // Create PDF path

    const pdfPath =
        `../papers/${batch}-${parseInt(batch) + 4}/${branch}/Semester${semester}/${examType}/${subject}.pdf`;


    console.log("PDF Path:", pdfPath);


    // Open PDF

    window.open(pdfPath, "_blank");
}

async function testBackend() {
    try {
        const response = await fetch("http://localhost:8080/api/test");

        const data = await response.json();

        console.log(data);
        alert(data.message);
    }
    catch (error) {
        console.error("Backend connection failed:", error);
    }
}