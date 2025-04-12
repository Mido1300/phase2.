import { useState, useEffect } from "react";

export default function EditUserModal({ isOpen, onClose, user, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    country: "",
    phone: "",
    birthdate: "",
    department: "",
    position: "",
    isActive: true,
    avatar: "https://via.placeholder.com/100",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        role: user.role,
        country: user.country || "",
        phone: user.phone || "",
        birthdate: user.birthdate,
        department: user.department || "",
        position: user.position || "",
        isActive: user.isActive,
        avatar: user.avatar,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prev) => ({ ...prev, avatar: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user.id, formData);
    onClose();
  };

  if (!isOpen || !user) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-[var(--border-color)]">
          <h2 className="text-3xl font-bold text-[var(--primary)]">Edit User</h2>
          <button onClick={onClose} className="text-3xl text-[var(--gray)] hover:text-[var(--text-color)]">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center mb-6">
            <img
              src={formData.avatar}
              alt="Avatar Preview"
              className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-[var(--border-color)] shadow-[var(--shadow-sm)]"
            />
            <label
              htmlFor="avatar-upload"
              className="btn bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-sm"
            >
              Change Profile Picture
            </label>
            <input
              type="file"
              id="avatar-upload"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 after:content-['*'] after:text-[var(--danger)] after:ml-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 after:content-['*'] after:text-[var(--danger)] after:ml-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-semibold mb-2 after:content-['*'] after:text-[var(--danger)] after:ml-1">
                Role
              </label>
              <select id="role" name="role" value={formData.role} onChange={handleChange} className="input" required>
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="editor">Editor</option>
                <option value="customer">Customer</option>
                <option value="viewer">Viewer</option>
              </select>
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-semibold mb-2">
                Country
              </label>
              <select id="country" name="country" value={formData.country} onChange={handleChange} className="input">
                <option value="">Select a country</option>
                <option value="USA">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="India">India</option>
                <option value="Brazil">Brazil</option>
              </select>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div>
              <label htmlFor="birthdate" className="block text-sm font-semibold mb-2 after:content-['*'] after:text-[var(--danger)] after:ml-1">
                Birth Date
              </label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            <div>
              <label htmlFor="department" className="block text-sm font-semibold mb-2">
                Department
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-semibold mb-2">
                Position
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="input"
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="isActive"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
              className="w-5 h-5 mr-3 accent-[var(--primary)]"
            />
            <label htmlFor="isActive" className="text-sm font-medium">
              Active User
            </label>
          </div>
          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
