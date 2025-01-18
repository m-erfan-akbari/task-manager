import { bugSecurityLevels } from "../../utils/variables";

export default function BugTask({ task }) {
  const bugSecurityLevel = bugSecurityLevels.find(
    (b) => b.id === task.bugSecurityLevel,
  );
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-slate-500">Bug Security Level:</span>
      <span className={`${bugSecurityLevel.styles}`}>
        {bugSecurityLevel.name}
      </span>
    </div>
  );
}
