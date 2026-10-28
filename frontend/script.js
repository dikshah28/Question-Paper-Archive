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
    const subject = document.getElementById("subject").value;
    const batch = document.getElementById("batch").value;
    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const examType = document.getElementById("examType").value;

    if (!subject) {
        alert("Please select a subject.");
        return;
    }

    const apiBase = "https://question-paper-his8.onrender.com";

    const paperUrl = new URL(
        `${apiBase}/api/paper/${batch}/${encodeURIComponent(branch)}/${semester}/${encodeURIComponent(examType)}`
    );
    paperUrl.searchParams.set("subject", subject);

    window.open(paperUrl.toString(), "_blank");
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


/* iOS bubble dropdown enhancement — preserves existing logic */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".selection-card select").forEach(select => {
        if (select.dataset.iosReady) return;
        select.dataset.iosReady = "true";

        const wrapper = document.createElement("div");
        wrapper.className = "ios-select";

        const trigger = document.createElement("button");
        trigger.type = "button";
        trigger.className = "ios-trigger";

        const label = document.createElement("span");
        const arrow = document.createElement("span");
        arrow.textContent = "⌄";

        trigger.append(label, arrow);

        const menu = document.createElement("div");
        menu.className = "ios-menu";

        select.parentNode.insertBefore(wrapper, select);
        wrapper.append(trigger, menu, select);
        select.classList.add("ios-native-hidden");

        function refreshOptions() {
            const selected = select.options[select.selectedIndex];
            label.textContent = selected
                ? selected.textContent.trim()
                : "Select an option";

            menu.replaceChildren();

            Array.from(select.options).forEach(option => {
                const item = document.createElement("button");
                item.type = "button";
                item.className = "ios-option";
                item.textContent = option.textContent.trim();

                if (option.value === select.value) {
                    item.classList.add("selected");
                }

                item.addEventListener("click", () => {
                    select.value = option.value;

                    // Keep all existing change listeners working.
                    select.dispatchEvent(
                        new Event("change", { bubbles: true })
                    );

                    refreshOptions();
                    wrapper.classList.remove("open");
                    trigger.setAttribute("aria-expanded", "false");
                });

                menu.appendChild(item);
            });
        }

        trigger.setAttribute("aria-expanded", "false");

        trigger.addEventListener("click", () => {
            const willOpen = !wrapper.classList.contains("open");

            document.querySelectorAll(".ios-select.open")
                .forEach(other => {
                    other.classList.remove("open");
                    other.querySelector(".ios-trigger")
                        ?.setAttribute("aria-expanded", "false");
                });

            if (willOpen) {
                // Read fresh options, even if existing code updated them.
                refreshOptions();
                wrapper.classList.add("open");
                trigger.setAttribute("aria-expanded", "true");
            }
        });

        select.addEventListener("change", refreshOptions);
        refreshOptions();
    });

    document.addEventListener("click", event => {
        document.querySelectorAll(".ios-select.open").forEach(wrapper => {
            if (!wrapper.contains(event.target)) {
                wrapper.classList.remove("open");
                wrapper.querySelector(".ios-trigger")
                    ?.setAttribute("aria-expanded", "false");
            }
        });
    });
});
