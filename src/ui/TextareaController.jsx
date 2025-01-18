export default function TextareaController({ label, ...props }) {
  return (
    <div className="mb-4">
      <label htmlFor={props.id} className="block font-medium text-gray-700">
        {label}
      </label>
      <textarea
        className="mt-1 block w-full rounded-md border border-slate-300 p-2 shadow-sm"
        type="text"
        {...props}
      />
    </div>
  );
}
