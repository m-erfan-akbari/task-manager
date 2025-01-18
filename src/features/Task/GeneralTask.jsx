import { NavLink } from "react-router-dom";

export default function GeneralTask({ task }) {
  const { reviewer } = task;
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-slate-500">Reviewer:</span>
      <NavLink to={`/users/${reviewer.id}`} className="text-slate-700">
        {reviewer.name}
      </NavLink>
    </div>
  );
}
