import { format } from "date-fns";
import { useState } from "react";
import {
  bugSecurityLevels,
  taskPriorities,
  taskStatus,
  taskTypes,
} from "../../utils/variables";
import { populateProjects } from "../../utils/populateData";

export function useTaskFormState({ task, users, projects }) {
  const initialTime = format(new Date(), "yyyy-MM-dd'T'HH:mm");
  const project = task?.project || projects.at(0);
  const team = populateProjects({ projects: [project], users }).at(0).team;

  const initialTask = {
    name: "",
    description: "",
    status: taskStatus.at(0).id,
    type: taskTypes.at(0).id,
    priority: taskPriorities.at(0).id,
    bugSecurityLevel: bugSecurityLevels.at(1).id,
    deadline: initialTime,
    estimatedTime: initialTime,
    id: `task-${new Date().getTime()}`,
    assignee: team.at(0)?.id,
    reviewer: team.at(0)?.id,
    project: projects.at(0)?.id,
  };

  const [currentTask, setCurrentTask] = useState(() => {
    if (task === "new") return initialTask;
    return {
      ...task,
      status: task.status.id,
      type: task.type.id,
      priority: task.priority.id,
      bugSecurityLevel:
        task?.priority?.bugSecurityLevel || initialTask.bugSecurityLevel,
      deadline: format(new Date(task.deadline), "yyyy-MM-dd'T'HH:mm"),
      estimatedTime: format(
        task?.estimatedTime ? new Date(task?.estimatedTime) : new Date(),
        "yyyy-MM-dd'T'HH:mm",
      ),
      assignee: task.assignee.id,
      reviewer: task?.reviewer?.id || users.at(0).id,
      project: task.project.id,
    };
  });
  return [currentTask, setCurrentTask];
}
