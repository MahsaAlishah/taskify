import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Dashboard from "./pages/dashboard";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import { TasksProvider } from "./features/tasks/context/TasksContext";

function App() {
  return (
    <ThemeProvider>
      <TasksProvider>
        <Toaster position="top-center" />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </TasksProvider>
    </ThemeProvider>
  );
}

export default App;
