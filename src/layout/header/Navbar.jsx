import { NavLink } from "react-router-dom";

function Navbar() {
  const base = "text-sm font-medium transition-colors";
  const active = "text-brand-light dark:text-text-primary";
  const inactive = "text-text-secondary hover:text-text-primary";

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
