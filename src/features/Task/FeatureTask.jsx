import { format } from "date-fns";

export default function FeatureTask({ task }) {
  const { estimatedTime } = task;
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-slate-500">Estimated time:</span>
      <span className="text-slate-700">
        {format(estimatedTime, "dd MMM yyyy")}
      </span>
    </div>
  );
}
