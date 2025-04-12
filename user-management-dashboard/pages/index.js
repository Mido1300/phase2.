import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import UserCard from "../components/UserCard";
import AddUserModal from "../components/AddUserModal";
import ViewUserModal from "../components/ViewUserModal";
import EditUserModal from "../components/EditUserModal";
import useAuth from "../hooks/useAuth";
import useUsers from "../hooks/useUsers";

export default function Dashboard() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const { users, addUser, updateUser, deleteUser, setSearchTerm, setFilter } = useUsers();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  const handleView = (user) => {
    setSelectedUser(user);
    setViewModalOpen(true);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      deleteUser(id);
    }
  };

  if (!isAuthenticated) return null;

  return (
    <div className="container py-6">
      <Header />
      <SearchFilter
        onSearch={setSearchTerm}
        onFilter={setFilter}
        onAddUser={() => setAddModalOpen(true)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <AddUserModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSubmit={addUser}
      />
      <ViewUserModal
        isOpen={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        user={selectedUser}
        onEdit={() => {
          setViewModalOpen(false);
          setEditModalOpen(true);
        }}
      />
      <EditUserModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        user={selectedUser}
        onSubmit={updateUser}
      />
    </div>
  );
}
