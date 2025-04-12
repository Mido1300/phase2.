export default function UserCard({ user, onView, onEdit, onDelete }) {
  return (
    <div className={`card ${user.isActive ? "border-l-4 border-[var(--success)]" : "border-l-4 border-[var(--gray)]"}`}>
      <div className="flex items-center mb-5">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-20 h-20 rounded-full object-cover mr-5 shadow-[var(--shadow-sm)]"
        />
        <div>
          <h3 className="text-xl font-semibold">{user.name}</h3>
          <p className="text-sm text-[var(--gray)]">{user.email}</p>
          <div className="flex gap-3 mt-2">
            <span className="badge bg-[var(--info)]/10 text-[var(--info)] px-3 py-1 rounded-full text-xs font-semibold shadow-[var(--shadow-sm)]">
              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            </span>
            <span
              className={`badge px-3 py-1 rounded-full text-xs font-semibold shadow-[var(--shadow-sm)] ${
                user.isActive
                  ? "bg-[var(--success)]/10 text-[var(--success)]"
                  : "bg-[var(--gray)]/10 text-[var(--gray)]"
              }`}
            >
              {user.isActive ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <button onClick={() => onView(user)} className="btn btn-info flex-1">
          <i className="fas fa-eye mr-2"></i> View
        </button>
        <button onClick={() => onEdit(user)} className="btn btn-secondary flex-1">
          <i className="fas fa-pen mr-2"></i> Edit
        </button>
        <button onClick={() => onDelete(user.id)} className="btn btn-danger flex-1">
          <i className="fas fa-trash mr-2"></i> Delete
        </button>
      </div>
    </div>
  );
}
