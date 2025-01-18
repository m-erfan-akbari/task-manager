import { format, formatDistanceToNow } from "date-fns";
import {
  ChevronDown,
  ChevronUp,
  ChevronsDown,
  ChevronsUp,
  Flag,
  Pencil,
  Trash2,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import FeatureTask from "./FeatureTask";
import BugTask from "./BugTask";
import GeneralTask from "./GeneralTask";
import Button from "../../ui/Button";
export default function TaskCard({ task, onEdit, onDelete }) {
  const {
    id,
    project,
    name,
    description,
    status,
    type,
    priority,
    assignee,
    createdAt,
    deadline,
  } = task;

  const typeComponents = {
    1: FeatureTask,
    2: BugTask,
    3: GeneralTask,
  };
  const TypeComponent = typeComponents[type.id];

  const prioriryIcons = {
    5: ChevronsUp,
    4: ChevronUp,
    3: ChevronUp,
    2: ChevronDown,
    1: ChevronsDown,
  };
  const PriorityIcon = prioriryIcons[priority.id];

  return (
    <div className="flex w-[25rem] min-w-[12rem] flex-col gap-4 rounded-lg border border-slate-300 bg-white p-3">
      <div className="flex items-center justify-between">
        <span
          className={`flex items-center gap-1 text-sm font-semibold uppercase ${priority.styles}`}
        >
          <PriorityIcon className="h-4 w-4" />
          {priority.name} prioriry
        </span>

        <span className={`rounded-full px-3 py-0.5 text-sm ${type.styles}`}>
          {type.name}
        </span>
      </div>
      <div>
        <h3 className="break-words text-lg font-semibold text-slate-800">
          {name}
        </h3>
        <h4 className="break-words text-sm text-slate-600">{description}</h4>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-1 text-slate-700">
          <Flag className="h-4 w-4" />
          {format(deadline, "dd MMM yyyy HH:mm")}
        </span>
        <span className={`rounded-full px-2 py-0.5 ${status.styles}`}>
          {status.name}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">Assignee:</span>
          <NavLink to={`/users/${assignee.id}`} className="text-slate-700">
            {assignee.name}
          </NavLink>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500">Spent time:</span>
          <span className="text-slate-600">
            Started {formatDistanceToNow(createdAt)} ago
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>Project:</span>
          <span>{project.name}</span>
        </div>
        <TypeComponent task={task} />
      </div>

      {(onDelete || onEdit) && (
        <div className="flex justify-between">
          {onEdit && (
            <button
              onClick={onEdit}
              className="flex items-center gap-1 text-blue-500"
            >
              <Pencil className="h-4 w-4 cursor-pointer" />
              <span>Edit</span>
            </button>
          )}

          {onDelete && (
            <button
              onClick={onDelete}
              className="flex items-center gap-1 text-red-500"
            >
              <Trash2 className="h-4 w-4 cursor-pointer" />
              <span>Delete</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
