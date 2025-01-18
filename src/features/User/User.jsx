import { useState } from "react";
import UserFormModal from "./UserFormModal";
import Button from "../../ui/Button";
import UserCard from "./UserCard";
import Header from "../../ui/Header";
import Main from "../../ui/Main";
import { ClipboardList, Pencil, Trash2 } from "lucide-react";
import DeleteUserModal from "./DeleteUserModal";
import { useNavigate } from "react-router-dom";

export default function User({ users, setUsers, projects }) {
  const [deleteUserModal, setDeleteUserModal] = useState(null);
  const [userForm, setUserForm] = useState(null);
  const navigate = useNavigate();

  function handleEdit(id) {
    setUserForm(users.find((u) => u.id === id));
  }

  function handleDelete(id) {
    setUsers((currentUsers) => currentUsers.filter((u) => u.id !== id));
    setDeleteUserModal(null);
  }

  function handleAddUser(user) {
    if (userForm === "new") {
      setUsers((currentUsers) => [...currentUsers, user]);
    } else {
      setUsers((currentUsers) =>
        currentUsers.map((u) => {
          if (u.id === userForm.id) return user;
          return u;
        }),
      );
    }
  }

  return (
    <>
      <Header>
        <Header.Title>Users</Header.Title>
        <Button className="w-fit" onClick={() => setUserForm("new")}>
          Add user
        </Button>
      </Header>

      <Main>
        <section className="flex flex-col gap-4 rounded-md bg-white px-6 py-4 shadow shadow-slate-200">
          {users.map((user) => (
            <UserCard key={user.id} user={user}>
              <div className="flex gap-2">
                <UserCard.ActionButton
                  className="border-blue-300 bg-blue-200 text-blue-500"
                  onClick={() => handleEdit(user.id)}
                >
                  <Pencil className="h-5 w-5" />
                </UserCard.ActionButton>
                <UserCard.ActionButton
                  className="border-red-300 bg-red-200 text-red-500"
                  onClick={() => setDeleteUserModal(user)}
                >
                  <Trash2 className="h-5 w-5" />
                </UserCard.ActionButton>

                <UserCard.ActionButton
                  className="border-green-500 bg-green-200 text-green-600"
                  onClick={() => navigate(`/users/${user.id}`)}
                >
                  <ClipboardList className="h-5 w-5" />
                </UserCard.ActionButton>
              </div>
            </UserCard>
          ))}
        </section>

        {userForm && (
          <UserFormModal
            user={userForm}
            handleAddUser={handleAddUser}
            close={() => setUserForm(null)}
          />
        )}

        {deleteUserModal && (
          <DeleteUserModal
            user={deleteUserModal}
            handleDeleteUser={handleDelete}
            projects={projects}
            close={() => setDeleteUserModal(null)}
          />
        )}
      </Main>
    </>
  );
}
