import TaskCard from "./TaskCard";

export default function KanbanView({ tasks, setTaskFormModal, setDeleteTask }) {
  const toDoTasks = tasks.filter((t) => t.status.id === 1);
  const doingTasks = tasks.filter((t) => t.status.id === 2);
  const doneTasks = tasks.filter((t) => t.status.id === 3);

  const KanbanSections = [
    {
      name: "To Do",
      data: toDoTasks,
      emptyDataMessage:
        "Nothing in To Do right now. Focus on tasks in Doing or add something new.",
      color: "gray",
    },
    {
      name: "Doing",
      data: doingTasks,
      emptyDataMessage:
        "Nothing in Doing at the moment. Check your To Do list or start tackling a new task.",
      color: "amber",
    },
    {
      name: "Done",
      data: doneTasks,
      emptyDataMessage:
        "      Your Done column is empty for now. Finish tasks from Doing to celebrate your progress!",
      color: "green",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {KanbanSections.map((section) => (
        <div
          key={section.name}
          className="space-y-4 rounded-lg bg-slate-200 p-4"
        >
          <div className="flex justify-between px-2">
            <h2
              className={`text-${section.color}-700 flex items-center gap-4 text-xl font-bold`}
            >
              {/* <div
                className={`h-2 w-2 rounded-full bg-${section.color}-600`}
              ></div> */}
              <span>{section.name}</span>
            </h2>
            <span className="text-slate-700">{section.data.length}</span>
          </div>

          {section.data.length > 0 ? (
            section.data.map((t) => (
              <TaskCard
                key={t.id}
                task={t}
                onEdit={() => setTaskFormModal(t)}
                onDelete={() => setDeleteTask(t)}
              />
            ))
          ) : (
            <h3 className="max-w-96 px-2 text-slate-700">
              {section.emptyDataMessage}
            </h3>
          )}
        </div>
      ))}
    </div>
  );
}
