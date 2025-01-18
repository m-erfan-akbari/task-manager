export default function SelectController({ label, data, render, ...props }) {
  return (
    <div className="mb-4">
      <label htmlFor={props.id} className="block font-medium text-gray-700">
        {label}
      </label>
      <select
        className="mt-1 block w-full rounded-md border border-slate-300 bg-white p-2 shadow-sm"
        {...props}
      >
        {render(data)}
      </select>
    </div>
  );
}
