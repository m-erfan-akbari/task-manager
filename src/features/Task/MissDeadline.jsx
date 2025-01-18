import TaskCard from "./TaskCard";

export default function MissDeadline({
  tasks,
  setTaskFormModal,
  setDeleteTask,
}) {
  const now = new Date().getTime();
  const missedDeadlineTasks = tasks.filter(
    (t) => t.deadline < now && t.status.id !== 3,
  );
  return (
    <div className="p-6">
      {missedDeadlineTasks.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6 rounded-lg bg-slate-200 p-6">
          {missedDeadlineTasks.map((t) => (
            <TaskCard
              key={t.id}
              task={t}
              onEdit={() => setTaskFormModal(t)}
              onDelete={() => setDeleteTask(t)}
            />
          ))}
        </div>
      ) : (
        <h3 className="text-center text-2xl text-slate-700">
          There is no missed deadline task.
        </h3>
      )}
    </div>
  );
}
