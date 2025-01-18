import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

export default function DeleteTaskModal({ task, close, handleDeleteTask }) {
  return (
    <Modal close={close}>
      <div className="max-w-96">
        <div className="my-3">
          <h2 className="text-xl font-semibold text-red-500">Delete Task</h2>
          <p className="text-lg text-slate-800">
            Are you sure you want to delete '{task.name}' task?
          </p>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={close}>
            Cancel
          </Button>
          <Button variant="red" onClick={() => handleDeleteTask(task.id)}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}
