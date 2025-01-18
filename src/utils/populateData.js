import { taskPriorities, taskStatus, taskTypes } from "./variables";

export function populateTasks({ tasks, projects, users }) {
  return tasks.map((t) => ({
    ...t,
    status: taskStatus.find((s) => s.id === t.status),
    type: taskTypes.find((type) => type.id === t.type),
    priority: taskPriorities.find((pr) => pr.id === t.priority),
    assignee: users.find((u) => u.id === t.assignee),
    project: projects.find((prj) => prj.id === t.project),
    reviewer: users.find((u) => u.id === t?.reviewer) || undefined,
  }));
}

export function populateProjects({ projects, users }) {
  return projects.map((prj) => ({
    ...prj,
    team: prj.team.map((userId) =>
      users.find((u) => u.id === userId?.id || u.id === userId),
    ),
  }));
}
