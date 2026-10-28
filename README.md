# 📚 Question Paper Archive

A web-based archive that helps engineering students easily find and access previous years' college question papers.

🌐 **Live Website:** [Question Paper Archive](https://question-paper-frontend.onrender.com/)

## ✨ Features

- 🎓 Browse papers by academic batch and engineering branch.
- 📚 Select semesters from 1 to 8.
- 📝 Filter papers by exam type: CAE1, CAE2, CAE3, and ESE.
- 🔍 Find papers by subject.
- 📄 View available question papers directly through the website.
- 🎨 Clean, responsive interface with rounded dropdowns, translucent effects, and smooth hover interactions.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| C++17 | Backend development |
| Crow | C++ web framework for HTTP APIs |
| HTML5 | Website structure |
| CSS3 | Styling and responsive UI |
| JavaScript | Dropdown logic, API requests, and interactions |
| CMake | Backend build configuration |

## 👩‍🎓 What Can Users Do?

1. Select their academic batch.
2. Choose their engineering branch.
3. Select a semester.
4. Choose the examination type.
5. Select a subject.
6. Open the corresponding question paper.

## 🔄 How It Works

The frontend communicates with the C++ backend through HTTP API requests.

1. The website requests the paper catalogue from the backend.
2. Available options are populated dynamically.
3. Users make selections in sequence: **Batch → Branch → Semester → Exam Type → Subject**.
4. The backend locates the requested paper.
5. The selected paper opens in a new browser tab.

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `Tab` | Move between form controls |
| `Enter` / `Space` | Open or select an option, depending on the control |
| `↑` / `↓` | Navigate dropdown options |

*Shortcut behavior may vary depending on your browser and dropdown implementation.*

## 🚀 Run Locally

### Prerequisites

- Git
- A C++17-compatible compiler
- CMake 3.20 or newer
- Internet access for the initial CMake dependency download
- A modern web browser

### 1. Clone the repository

```bash
git clone https://github.com/dikshah28/Question-Paper-Archive.git
cd Question-Paper-Archive
```

### 2. Build the C++ backend

```bash
cmake -S . -B build
cmake --build build
```

### 3. Start the backend

Run the generated `server` executable from the project root. Its exact path depends on your operating system and build configuration.

Make sure the backend is running on port `8080`, as expected by the frontend.

### 4. Launch the frontend

Open `frontend/index.html` in your browser, or serve the frontend directory using a local development server.

Ensure the frontend's API configuration points to:

```text
http://localhost:8080
```

The frontend and backend must both be running for the catalogue and question-paper requests to work.

## 🤝 Contributing

Contributions and suggestions are welcome! Feel free to fork the repository, make improvements, and submit a pull request.

## 📌 Project

**Question Paper Archive** — Making academic resources easier to access, one paper at a time.

## 🎬 Project Demo

https://github.com/user-attachments/assets/37381a2f-e7ef-4b05-8e7e-500892d84b16








