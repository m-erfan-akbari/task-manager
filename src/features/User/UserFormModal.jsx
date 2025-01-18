import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import InputController from "../../ui/InputController";
import Modal from "../../ui/Modal";

export default function UserFormModal({ user, handleAddUser, close }) {
  const initialField = {
    name: "",
    email: "",
    password: "",
    role: "",
    id: `user-${new Date().getTime()}`,
  };

  const [currentUser, setCurrentUser] = useState(() => {
    if (user === "new") return initialField;
    return user;
  });

  function handleSubmit(e) {
    e.preventDefault();
    handleAddUser(currentUser);
    close();
  }
  function handleChangeField(e) {
    const field = e.target.id;
    const value = e.target.value;
    setCurrentUser((u) => ({ ...u, [field]: value }));
  }

  return (
    <Modal close={close}>
      <form onSubmit={handleSubmit}>
        <InputController
          label="Name"
          id="name"
          value={currentUser.name}
          onChange={handleChangeField}
          required
        />

        <InputController
          label="Email"
          type="email"
          id="email"
          value={currentUser.email}
          onChange={handleChangeField}
          required
        />

        <InputController
          label="Role"
          id="role"
          value={currentUser.role}
          onChange={handleChangeField}
          required
        />

        <InputController
          label="Password"
          id="password"
          value={currentUser.password}
          onChange={handleChangeField}
          required
        />

        <div className="flex justify-between">
          <Button variant="outline" onClick={close}>
            Cancel
          </Button>
          <Button>Submit</Button>
        </div>
      </form>
    </Modal>
  );
}
