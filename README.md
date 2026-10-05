# 🚀 Campus Task Board — Advanced React Application

A modern, next-generation React application built for **Assignment #1 (CLO-1: Fundamental React Concepts)**.

---

## ✨ Features & Requirements Compliance

### 1. Create and Display Tasks (2 Marks)
- Initial list of 4 campus tasks stored in `useState`.
- Each task object contains `id`, `title`, `category`, `priority`, and completion status.
- Tasks are rendered dynamically using JavaScript `.map()` with unique `key` props.

### 2. Reusable `TaskCard` Component (2 Marks)
- Modular `TaskCard.jsx` component created in `src/components/TaskCard.jsx`.
- Task information passed from parent (`App.jsx`) to child via `props`.
- Displays glowing category badges, priority levels, timestamp, toggle completion checkbox, and delete button.

### 3. Add a New Task (2 Marks)
- Input field and form controls in `TaskInput.jsx`.
- Includes title text input, category drop-down selector, and priority selector.
- Features an "Add Task" button with `onSubmit` / `onClick` event handling.
- Newly added task instantly updates `useState` and renders without page refresh.

### 4. `useEffect` Hook Implementation (2 Marks)
- `useEffect` hook implemented in `App.jsx` with `tasks` state dependency.
- Every time a task is added, deleted, or toggled, it logs to the browser console:
  - `"Task list updated!"`
  - `"Total number of tasks: X"`
- Includes an onscreen live console feed indicator for easy visual demonstration.

---

## 🛠️ Modern Advance Theme Highlights
- **Cyberpunk Dark Mode & Glass Light Mode**: Instant toggle with glowing neon accents.
- **Glassmorphism UI**: Backdrop blur, ambient gradient background, responsive layout.
- **Interactive Dashboard Metrics**: Real-time stats for Total Tasks, Completed Tasks, Pending Tasks, and % Progress.
- **Filter Chips & Live Search**: Filter tasks by category (`Academics`, `Projects`, `Campus Event`, `Exam Prep`, `General`) or search query.

---

## 💻 Git & GitHub Submission Instructions (Requirement 5 — 2 Marks)

To submit this project to GitHub, open your terminal in the project directory and run the following commands:

```bash
# 1. Initialize Git Repository
git init

# 2. Stage all files
git add .

# 3. Create Initial Commit
git commit -m "Create Campus Task Board"

# 4. Rename default branch to main
git branch -M main

# 5. Add your Remote GitHub Repository URL (replace URL with yours)
git remote add origin https://github.com/YOUR_USERNAME/campus-task-board.git

# 6. Push to GitHub
git push -u origin main
```

---

## ⚙️ Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 in your web browser.
