import { useState } from "react";

export default function SearchFilter({ onSearch, onFilter, onAddUser }) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("All Users");

  const handleFilter = (filter, label) => {
    onFilter(filter);
    setCurrentFilter(label);
    setFilterOpen(false);
  };

  return (
    <div className="flex justify-between items-center mb-10 p-4 bg-[var(--card-bg)] rounded-xl shadow-[var(--shadow)] flex-wrap gap-4">
      <div className="relative flex-grow max-w-md">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-[var(--primary)] text-xl transition-colors group-hover:text-[var(--secondary)]"></i>
        <input
          type="text"
          placeholder="Search users by name or email..."
          onChange={(e) => onSearch(e.target.value)}
          className="input pl-12"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="btn bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white"
          >
            {currentFilter} <i className={`fas fa-chevron-down ml-3 transition-transform ${filterOpen ? "rotate-180" : ""}`}></i>
          </button>
          {filterOpen && (
            <div className="absolute right-0 top-12 bg-[var(--card-bg)] min-w-44 shadow-[var(--shadow)] rounded-lg overflow-hidden z-10">
              <button
                onClick={() => handleFilter("all", "All Users")}
                className={`block w-full text-left px-4 py-3 text-sm text-[var(--text-color)] hover:bg-[var(--border-color)] ${currentFilter === "All Users" ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white" : ""}`}
              >
                All Users
              </button>
              <button
                onClick={() => handleFilter("active", "Active Users")}
                className={`block w-full text-left px-4 py-3 text-sm text-[var(--text-color)] hover:bg-[var(--border-color)] ${currentFilter === "Active Users" ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white" : ""}`}
              >
                Active Users
              </button>
              <button
                onClick={() => handleFilter("inactive", "Inactive Users")}
                className={`block w-full text-left px-4 py-3 text-sm text-[var(--text-color)] hover:bg-[var(--border-color)] ${currentFilter === "Inactive Users" ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white" : ""}`}
              >
                Inactive Users
              </button>
            </div>
          )}
        </div>
        <button onClick={onAddUser} className="btn btn-success">
          <i className="fas fa-user-plus mr-2 text-lg transition-transform group-hover:scale-110"></i> Add User
        </button>
      </div>
    </div>
  );
}
