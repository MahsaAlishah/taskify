import Navbar from "./Navbar";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg-card border-b border-border shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-brand">Taskify</h1>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
