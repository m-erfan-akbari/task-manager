import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

export default function DeleteProjectModal({
  close,
  tasks,
  project,
  handleDeleteProject,
}) {
  const projectTasks = tasks.find((t) => t.project === project.id);
  return (
    <Modal close={close}>
      <div className="max-w-96">
        {!projectTasks ? (
          <>
            <div className="my-3">
              <h2 className="text-xl font-semibold text-red-500">
                Delete Project
              </h2>
              <p className="text-lg text-slate-800">
                Are you sure you want to delete '{project.name}' project?
              </p>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={close}>
                Cancel
              </Button>
              <Button
                variant="red"
                onClick={() => handleDeleteProject(project.id)}
              >
                Delete
              </Button>
            </div>
          </>
        ) : (
          <p className="text-lg text-slate-800">
            Unable to delete {project.name} because it is assigned as the
            project for one or more tasks. Please reassign or update the
            associated tasks before deleting.
          </p>
        )}
      </div>
    </Modal>
  );
}
