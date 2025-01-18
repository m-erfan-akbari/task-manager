export default function Main({ children, className }) {
  return (
    <main
      className={`flex flex-col gap-10 overflow-y-auto rounded-md rounded-e-none bg-slate-100 p-10 ${className}`}
    >
      {children}
    </main>
  );
}
