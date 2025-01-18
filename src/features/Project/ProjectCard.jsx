import { format } from "date-fns";
import { Pencil, Trash2 } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function ProjectCard({
  project,
  setDeleteProject,
  setProjectFormModal,
}) {
  const { name, description, team, createdAt } = project;
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow">
      <div>
        <h3 className="font-semibold text-slate-800">{name}</h3>
        <p className="break-words text-slate-600">{description}</p>
      </div>

      {team.length > 0 ? (
        <div>
          <h6 className="text-slate-500">Team</h6>
          <div className="flex gap-1 rounded-full">
            {team.map((u) => (
              <NavLink
                to={`/users/${u.id}`}
                key={u.id}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 uppercase text-slate-700"
              >
                {u.name.slice(0, 2)}
              </NavLink>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="flex items-center justify-between">
        <span className="text-slate-600">
          Stared at {format(createdAt, "dd MMM yyyy HH:mm")}
        </span>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setProjectFormModal(project)}
            className="flex items-center gap-1 text-blue-500"
          >
            <Pencil className="h-4 w-4" />
            Edit
          </button>

          <button
            variant="ghost"
            className="flex items-center gap-1 text-base text-red-500"
            onClick={() => setDeleteProject(project)}
          >
            <Trash2 className="h-4 w-4" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}
