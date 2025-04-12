import { useState, useEffect } from "react";
import initialUsers from "../utils/initialUsers";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || initialUsers;
    setUsers(storedUsers);
    setFilteredUsers(storedUsers);
  }, []);

  useEffect(() => {
    let result = users;
    if (searchTerm) {
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filter === "active") {
      result = result.filter((user) => user.isActive);
    } else if (filter === "inactive") {
      result = result.filter((user) => !user.isActive);
    }
    setFilteredUsers(result);
  }, [searchTerm, filter, users]);

  const addUser = (userData) => {
    const newUser = {
      ...userData,
      id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1,
      joinDate: new Date().toISOString().split("T")[0],
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const updateUser = (id, updatedData) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...updatedData } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return {
    users: filteredUsers,
    addUser,
    updateUser,
    deleteUser,
    setSearchTerm,
    setFilter,
  };
}
