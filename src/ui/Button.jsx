export default function Button({
  className,
  variant = "primary",
  children,
  ...props
}) {
  const styles = {
    primary: "bg-indigo-500 text-white border border-indigo-500",
    outline: "bg-slate-200 text-slate-700 border border-slate-300",
    ghost:
      "text-slate-700 hover:border hover:border-slate-300 hover:bg-slate-100",
    red: "bg-red-500 text-white border border-red-500",
  };

  return (
    <button
      className={`${styles[variant]} float-end rounded-md px-3 py-1 text-lg font-normal ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
