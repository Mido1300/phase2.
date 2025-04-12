import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login(username, password)) {
      setError("Username or password do not match our records");
    } else {
      setError("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent pointer-events-none"></div>
      <div className="w-full max-w-md bg-[var(--card-bg)] rounded-2xl shadow-[var(--shadow-lg)] p-12 text-center relative z-10 backdrop-blur-sm bg-opacity-95">
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">User Management System</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-left text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-left text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="12345"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
          </div>
          <button type="submit" className="btn w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white">
            Login
          </button>
          {error && <p className="text-[var(--danger)] mt-4 text-sm">{error}</p>}
        </form>
      </div>
    </div>
  );
}
