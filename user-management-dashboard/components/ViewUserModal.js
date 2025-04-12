export default function ViewUserModal({ isOpen, onClose, user, onEdit }) {
  if (!isOpen || !user) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-[var(--border-color)]">
          <h2 className="text-3xl font-bold text-[var(--primary)]">User Details</h2>
          <button onClick={onClose} className="text-3xl text-[var(--gray)] hover:text-[var(--text-color)]">
            &times;
          </button>
        </div>
        <div className="flex items-center mb-8">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover mr-6 border-4 border-[var(--primary)] shadow-[var(--shadow-sm)]"
          />
          <div>
            <h3 className="text-3xl font-semibold">{user.name}</h3>
            <p className="text-base text-[var(--gray)]">{user.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-[var(--gray)] mb-2">Phone</p>
            <p className="text-base font-semibold">{user.phone || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--gray)] mb-2">Location</p>
            <p className="text-base font-semibold">{user.country || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--gray)] mb-2">Department</p>
            <p className="text-base font-semibold">{user.department || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--gray)] mb-2">Position</p>
            <p className="text-base font-semibold">{user.position || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--gray)] mb-2">Role</p>
            <p className="text-base font-semibold">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--gray)] mb-2">Status</p>
            <p className="text-base font-semibold">{user.isActive ? "Active" : "Inactive"}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--gray)] mb-2">Birth Date</p>
            <p className="text-base font-semibold">{user.birthdate}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--gray)] mb-2">Join Date</p>
            <p className="text-base font-semibold">{user.joinDate}</p>
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-8">
          <button onClick={onEdit} className="btn btn-secondary">
            <i className="fas fa-pen mr-2"></i> Edit
          </button>
          <button onClick={onClose} className="btn btn-secondary">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
