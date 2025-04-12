import useAuth from "../hooks/useAuth";
import useDarkMode from "../hooks/useDarkMode";

export default function Header() {
  const { logout } = useAuth();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="flex justify-between items-center p-6 bg-[var(--card-bg)] rounded-xl shadow-[var(--shadow)] mb-10">
      <h1 className="text-3xl font-bold text-[var(--primary)] dark:text-white">
        User Management Dashboard
      </h1>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <label className="relative inline-block w-14 h-7">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className="opacity-0 w-0 h-0"
            />
            <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[var(--gray)] transition-all duration-400 rounded-full shadow-[var(--shadow-sm)] before:absolute before:h-5 before:w-5 before:left-1 before:bottom-1 before:bg-white before:transition-all before:duration-400 before:rounded-full before:shadow-[var(--shadow-sm)] checked:bg-gradient-to-r checked:from-[var(--primary)] checked:to-[var(--secondary)] checked:before:transform checked:before:translate-x-7"></span>
          </label>
          <span className="flex items-center text-sm font-medium">
            <i className={`fas fa-${isDarkMode ? "moon" : "sun"} mr-2`}></i>
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </div>
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Admin Profile"
            className="w-12 h-12 rounded-full object-cover cursor-pointer border-2 border-[var(--primary)] shadow-[var(--shadow-sm)]"
          />
          <div className="absolute top-14 right-0 bg-[var(--card-bg)] rounded-lg shadow-[var(--shadow)] p-2 hidden group-hover:block hover:block z-10 min-w-40">
            <button
              onClick={logout}
              className="flex items-center w-full p-3 text-sm text-[var(--text-color)] rounded-md hover:bg-[var(--border-color)]"
            >
              <i className="fas fa-sign-out-alt mr-2"></i> Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
