import Modal from "../../ui/Modal";
import { taskPriorities, taskStatus, taskTypes } from "../../utils/variables";
import InputController from "../../ui/InputController";
import TextareaController from "../../ui/TextareaController";
import SelectController from "../../ui/SelectController";
import TypeTaskController from "./TypeTaskController";
import Button from "../../ui/Button";
import { useTaskFormState } from "./useTaskFormState";
import { populateProjects } from "../../utils/populateData";
import { useEffect, useState } from "react";

export default function TaskForm({
  task,
  users,
  close,
  projects,
  handleAddTask,
}) {
  const [currentTask, setCurrentTask] = useTaskFormState({
    task,
    users,
    projects,
  });
  const [error, setError] = useState(null);

  const project = projects.find((p) => p.id === currentTask.project);
  const team = populateProjects({ projects: [project], users }).at(0).team;

  useEffect(() => {
    setCurrentTask((prj) => ({
      ...prj,
      assignee: team.at(0).id,
      reviewer: team.at(0).id,
    }));
  }, [currentTask.project, setCurrentTask]);

  function handleInputChange(e) {
    const { id: field, value } = e.target;
    setCurrentTask((p) => ({ ...p, [field]: value }));
  }

  function handleSelectChange(e, array) {
    const { id: field, value } = e.target;
    setCurrentTask((tsk) => ({
      ...tsk,
      [field]: array.find((s) => s.id.toString() === value.toString()).id,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const {
      reviewer,
      estimatedTime,
      bugSecurityLevel,
      deadline,
      ...otherFields
    } = currentTask;

    let newTask = {
      ...otherFields,
      deadline: new Date(deadline).getTime(),
    };

    if (task === "new") newTask.createdAt = new Date().getTime();

    if (currentTask.type === 1) {
      newTask.estimatedTime = new Date(estimatedTime).getTime();

      if (newTask.estimatedTime > newTask.deadline)
        return setError(
          "Estimated time cannot exceed the deadline. Please revise your input.",
        );
    }
    if (currentTask.type === 2) newTask.bugSecurityLevel = bugSecurityLevel;
    if (currentTask.type === 3) newTask.reviewer = reviewer;

    handleAddTask(newTask);
    close();
  }

  return (
    <Modal close={close}>
      <form onSubmit={handleSubmit} className="w-[20rem]">
        <InputController
          label="Name"
          id="name"
          value={currentTask.name}
          onChange={handleInputChange}
          required
        />

        <TextareaController
          label="Description"
          id="description"
          value={currentTask.description}
          onChange={handleInputChange}
          required
        />

        <SelectController
          label="Project"
          id="project"
          defaultValue={currentTask.project}
          onChange={(e) => handleSelectChange(e, projects)}
          data={projects}
          render={(projects) =>
            projects.map((prj) => (
              <option key={prj.id} value={prj.id}>
                {prj.name}
              </option>
            ))
          }
        />

        <SelectController
          label="Assignee"
          id="assignee"
          defaultValue={currentTask.assignee}
          onChange={(e) => handleSelectChange(e, team)}
          data={team}
          render={(users) =>
            users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}&nbsp;&nbsp;&nbsp;{user.role}
              </option>
            ))
          }
        />

        <SelectController
          label="Status"
          id="status"
          defaultValue={currentTask.status}
          onChange={(e) => handleSelectChange(e, taskStatus)}
          data={taskStatus}
          render={(status) =>
            status.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))
          }
        />

        <SelectController
          label="Priority"
          id="priority"
          defaultValue={currentTask.priority}
          onChange={(e) => handleSelectChange(e, taskPriorities)}
          data={taskPriorities}
          render={(priorities) =>
            priorities.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))
          }
        />

        <InputController
          label="Deadline"
          id="deadline"
          type="datetime-local"
          value={currentTask.deadline}
          onChange={handleInputChange}
          required
        />

        <SelectController
          label="Type"
          id="type"
          defaultValue={currentTask.type}
          onChange={(e) => handleSelectChange(e, taskTypes)}
          data={taskTypes}
          render={(priorities) =>
            priorities.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))
          }
        />

        <div className="mb-4">
          <TypeTaskController
            task={currentTask}
            users={team}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
          />
        </div>

        {error && <p className="mb-4 text-lg text-red-600">{error}</p>}

        <div className="flex justify-between">
          <Button variant="outline" onClick={close}>
            Cancel
          </Button>
          <Button>{task === "new" ? "Add" : "Edit"}</Button>
        </div>
      </form>
    </Modal>
  );
}
