import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

export default function DeleteUserModal({
  user,
  close,
  projects,
  handleDeleteUser,
}) {
  const userProject = projects.find((p) => p.team.includes(user.id));
  return (
    <Modal close={close}>
      <div className="max-w-96">
        {!userProject ? (
          <>
            <div className="my-3">
              <h2 className="text-xl font-semibold text-red-500">
                Delete User
              </h2>
              <p className="text-lg text-slate-800">
                Are you sure you want to delete '{user.name}' user?
              </p>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={close}>
                Cancel
              </Button>
              <Button variant="red" onClick={() => handleDeleteUser(user.id)}>
                Delete
              </Button>
            </div>
          </>
        ) : (
          <p className="text-lg text-slate-800">
            Unable to delete '{user.name}' because they are part of a project
            team. Please remove the user from all project teams before
            attempting to delete them.
          </p>
        )}
      </div>
    </Modal>
  );
}
