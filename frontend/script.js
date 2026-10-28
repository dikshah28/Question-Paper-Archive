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

const API_BASE = "https://question-paper-his8.onrender.com";

let paperCatalog = null;

async function fetchCatalog() {
    if (paperCatalog) {
        return paperCatalog;
    }

    const response = await fetch(`${API_BASE}/api/catalog`);

    if (!response.ok) {
        throw new Error(`Catalog request failed: ${response.status}`);
    }

    const data = await response.json();

    if (!data.papers || typeof data.papers !== "object") {
        throw new Error("The catalog response has an unexpected format.");
    }

    paperCatalog = data.papers;
    return paperCatalog;
}

async function loadSubjects() {
    const batch = document.getElementById("batch").value;
    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const examType = document.getElementById("examType").value;

    const subjectDropdown = document.getElementById("subject");

    subjectDropdown.replaceChildren(
        new Option("Loading subjects...", "")
    );

    document.getElementById("subjectSection")
        .classList.remove("hidden");

    try {
        const catalog = await fetchCatalog();

        // Convert a batch such as "2024-2028" to the catalog key "2024".
        const batchStart = batch.split("-")[0];

        const subjects =
            catalog[batchStart]?.[branch]?.[semester]?.[examType] ?? [];

        subjectDropdown.replaceChildren(
            new Option(
                subjects.length ? "Select Subject" : "No papers available for this exam",
                ""
            )
        );

        subjects.forEach(subject => {
            subjectDropdown.add(new Option(subject, subject));
        });

        if (subjects.length === 0) {
            console.info("No papers found for:", {
                batch,
                branch,
                semester,
                examType
            });
        }
    } catch (error) {
        console.error("Unable to load paper catalog:", error);

        subjectDropdown.replaceChildren(
            new Option("Unable to load subjects. Please try again.", "")
        );
    }
}

async function selectSubject() {
    const subject = document.getElementById("subject").value;
    const batch = document.getElementById("batch").value;
    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const examType = document.getElementById("examType").value;

    if (!subject) {
        alert("Please select an available subject.");
        return;
    }

    try {
        const catalog = await fetchCatalog();
        const batchStart = batch.split("-")[0];

        const availableSubjects =
            catalog[batchStart]?.[branch]?.[semester]?.[examType] ?? [];

        if (!availableSubjects.includes(subject)) {
            alert("This paper is not available for the selected exam.");
            await loadSubjects();
            return;
        }

        const paperUrl = new URL(`${API_BASE}/api/paper/${batch}/${encodeURIComponent(branch)}/${semester}/${encodeURIComponent(examType)}`);

        paperUrl.searchParams.set("subject", subject);

        window.open(paperUrl.toString(), "_blank");
    } catch (error) {
        console.error("Unable to validate paper:", error);
        alert("Unable to verify paper availability. Please try again.");
    }
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
