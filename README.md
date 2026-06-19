
# Taskify

Taskify is a clean, efficient, and high-performance Task Management application built with **React**. It features a robust state management system using the Context API and useReducer, dark mode support, and real-time task filtering.

---

## ✨ Features

- **Task Management**: Create, Read, Update (Edit/Toggle), and Delete (CRUD) tasks.
- **Task Filtering**: Filter tasks by All, Active, or Completed status.
- **Dark Mode**: Seamless theme switching with persistent user preference using `localStorage` and `ThemeContext`.
- **Data Persistence**: All tasks are saved automatically to the browser's LocalStorage.
- **Responsive Design**: Modern and clean UI built with **Tailwind CSS**.
- **User Feedback**: Toast notifications for task operations via `react-hot-toast`.
- **Performance**: Optimized with `memo` and `useMemo` for efficient rendering.

---

## 🛠 Tech Stack

- **Framework**: React 18
- **State Management**: React Context API + useReducer
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Persistence**: LocalStorage
- **Notifications**: react-hot-toast
- **Build Tool**: Vite

---

## 📂 Project Architecture

The project follows a clean, feature-based directory structure:

```text
src/
 ┣ context/         # Theme and Task global providers
 ┣ features/        # Task-specific logic (components, reducers)
 ┣ pages/           # Application routes (Home, Tasks, Dashboard)
 ┣ reducer/         # Task state management logic
 ┣ ui/              # Reusable UI components (Navbar, Header, ThemeToggle)
 ┣ App.jsx          # Main application setup
 ┗ main.jsx         # Application entry point
```

---

## 🚀 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/taskify.git
   cd taskify
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

---

## 🧠 Key Technical Concepts

- **State Management**: Used a centralized `TasksProvider` using `useReducer` to handle complex state transitions (ADD, DELETE, TOGGLE, UPDATE, SET_FILTER) instead of prop drilling.
- **Performance Optimization**: 
    - Used `React.memo` to prevent unnecessary re-renders of task items.
    - Used `useMemo` to cache filtered tasks and statistics calculation.
    - Used `useCallback` for optimized event handling.
- **Routing**: Implemented protected layout structure using `react-router-dom` and `Outlet`.

---
*"Implemented a centralized state management system using **React Context API and useReducer** to handle complex application logic, eliminating the need for external state management libraries."* 

این جمله نشان می‌دهد که شما معماری React را به خوبی درک کرده‌اید و بیهوده از کتابخانه‌های سنگین استفاده نمی‌کنید.
