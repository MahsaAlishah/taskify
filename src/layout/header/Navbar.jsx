import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

function Navbar() {
  const base = "text-sm font-medium transition-colors hover:text-brand";
  const active = "text-brand";
  const inactive = "text-muted-foreground";

  return (
    <nav className="flex items-center gap-10">
      <NavLink
        to="/dashboard"
        className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/tasks"
        className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
      >
        Tasks
      </NavLink>
    </nav>
  );
}

export default Navbar;
