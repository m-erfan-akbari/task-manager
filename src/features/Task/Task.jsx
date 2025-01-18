import React, { useState } from "react";
import Header from "../../ui/Header";
import Main from "../../ui/Main";
import { CalendarX, Kanban, List } from "lucide-react";
import KanbanView from "./KanbanView";
import MissDeadline from "./MissDeadline";
import DeleteTaskModal from "./DeleteTaskModal";
import { useLocalStorageState } from "../../hooks/useLocalStorage";
import TaskForm from "./TaskForm";
import Button from "../../ui/Button";
import { populateTasks } from "../../utils/populateData";
import SelectController from "../../ui/SelectController";
import FilterTaskType from "./FilterTaskType";

export default function Task({ users, projects, tasks, setTasks }) {
  const [currentView, setCurrentView] = useLocalStorageState(2, "taskView");
  const [deleteTask, setDeleteTask] = useState(null);
  const [taskFormModal, setTaskFormModal] = useState(null);
  const [filter, setFilter] = useState({ type: 0 });
  console.log(filter.type);

  const populatedTasks = populateTasks({ tasks, projects, users });
  const sortedTasks = populatedTasks.sort(
    (a, b) => b.priority.id - a.priority.id,
  );
  const filterTaskByType = sortedTasks.filter((t) =>
    filter.type === 0 ? true : t.type.id === filter.type,
  );

  const views = [
    { id: 1, name: "Kanban View", icon: Kanban },
    { id: 2, name: "Miss Deadline", icon: CalendarX },
  ];

  const viewsComponent = {
    1: KanbanView,
    2: MissDeadline,
  };
  const CurrentViewComponent = viewsComponent[currentView];

  function handleAddTask(newTask) {
    if (taskFormModal === "new") {
      setTasks((tasks) => [...tasks, newTask]);
    } else {
      setTasks((tasks) =>
        tasks.map((t) => {
          if (t.id === newTask.id) {
            t = newTask;
          }
          return t;
        }),
      );
    }
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
    setDeleteTask(null);
  }

  function handleSelectChange(e, array) {
    const { id: field, value } = e.target;
    setFilter((tsk) => ({
      ...tsk,
      [field]: array.find((s) => s.id.toString() === value.toString()).id,
    }));
  }

  return (
    <>
      <Header>
        <Header.Title>Tasks</Header.Title>

        <Button onClick={() => setTaskFormModal("new")}>Add Task</Button>
      </Header>
      <Main>
        <div className="flex-between flex">
          <FilterTaskType filter={filter} onChange={handleSelectChange} />
        </div>
        <section className="overflow-hidden rounded-md border border-slate-200 bg-white">
          <div className="flex border-b border-b-slate-200">
            {views.map((v) => (
              <button
                key={v.id}
                onClick={() => setCurrentView(v.id)}
                className={`flex gap-4 px-4 py-3 font-semibold ${currentView === v.id ? "border-b-4 border-b-indigo-500 text-indigo-500" : "text-slate-500"}`}
              >
                <v.icon className="h-6 w-6" />
                <span>{v.name}</span>
              </button>
            ))}
          </div>

          <div className="h-[75vh] overflow-y-scroll p-6">
            <CurrentViewComponent
              tasks={filterTaskByType}
              setTaskFormModal={setTaskFormModal}
              setDeleteTask={setDeleteTask}
            />
          </div>

          {taskFormModal && (
            <TaskForm
              task={taskFormModal}
              users={users}
              projects={projects}
              handleAddTask={handleAddTask}
              close={() => setTaskFormModal(false)}
            />
          )}

          {deleteTask && (
            <DeleteTaskModal
              task={deleteTask}
              handleDeleteTask={handleDeleteTask}
              close={() => setDeleteTask(null)}
            />
          )}
        </section>
      </Main>
    </>
  );
}
