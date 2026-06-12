/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindFormPlugin from "@tailwindcss/forms";
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variableName}) , ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", ".dark"],
  theme: {
    extend: {
      colors: {
        // ===== Brand =====
        brand: withOpacity("--color-brand"),
        "brand-light": withOpacity("--color-brand-light"),
        "brand-dark": withOpacity("--color-brand-dark"),

        // ===== Text =====
        "text-primary": withOpacity("--color-text-primary"),
        "text-secondary": withOpacity("--color-text-secondary"),
        "text-tertiary": withOpacity("--color-text-tertiary"),
        "text-muted": withOpacity("--color-text-muted"),

        // ===== Backgrounds =====
        "bg-body": withOpacity("--color-bg-body"),
        "bg-card": withOpacity("--color-bg-card"),
        "bg-card-alt": withOpacity("--color-bg-card-alt"),

        // ===== Borders =====
        border: withOpacity("--color-border"),
        "border-dark": withOpacity("--color-border-dark"),

        // ===== Task Status =====
        todo: withOpacity("--color-todo"),
        "todo-bg": withOpacity("--color-todo-bg"),

        inprogress: withOpacity("--color-inprogress"),
        "inprogress-bg": withOpacity("--color-inprogress-bg"),

        completed: withOpacity("--color-completed"),
        "completed-bg": withOpacity("--color-completed-bg"),

        // ===== Alerts =====
        danger: withOpacity("--color-danger"),
        "danger-light": withOpacity("--color-danger-light"),

        success: withOpacity("--color-success"),
        "success-light": withOpacity("--color-success-light"),

        warning: withOpacity("--color-warning"),
        "warning-light": withOpacity("--color-warning-light"),

        // ===== Buttons =====
        "btn-primary": withOpacity("--color-btn-primary"),
        "btn-primary-hover": withOpacity("--color-btn-primary-hover"),
        "btn-primary-active": withOpacity("--color-btn-primary-active"),
        "btn-primary-text": withOpacity("--color-btn-primary-text"),

        "btn-secondary": withOpacity("--color-btn-secondary"),
        "btn-secondary-hover": withOpacity("--color-btn-secondary-hover"),
        "btn-secondary-active": withOpacity("--color-btn-secondary-active"),
        "btn-secondary-text": withOpacity("--color-btn-secondary-text"),

        "btn-success": withOpacity("--color-btn-success"),
        "btn-success-hover": withOpacity("--color-btn-success-hover"),
        "btn-success-active": withOpacity("--color-btn-success-active"),
        "btn-success-text": withOpacity("--color-btn-success-text"),

        input: withOpacity("--color-input-bg"),
        "input-border": withOpacity("--color-input-border"),
        "input-border-hover": withOpacity("--color-input-border-hover"),
        "input-border-focus": withOpacity("--color-input-border-focus"),
        "input-ring": withOpacity("--color-input-ring"),
        "input-text": withOpacity("--color-input-text"),

        error: withOpacity("--color-error"),
      },
      fontFamily: {
        sans: ["Vazirmatn", ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [
    tailwindFormPlugin({
      strategy: "class",
    }),
  ],
};
