function UserCard({ user, children }) {
  return (
    <div className="grid grid-cols-[auto_3fr_auto_auto] items-center gap-2 rounded-sm">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-200 text-xl uppercase text-slate-500">
        {user.name.slice(0, 2)}
      </span>
      <div className="flex flex-col">
        <span className="font-bold text-slate-800">{user.name}</span>
        <span className="text-sm text-slate-600">{user.email}</span>
      </div>

      <span className="mx-auto w-fit rounded-full bg-indigo-200 px-3 py-0.5 text-indigo-800">
        {user.role}
      </span>

      {children}
    </div>
  );
}

function ActionButton({ children, className = "", ...props }) {
  return (
    <button className={`rounded-lg border p-1 ${className}`} {...props}>
      {children}
    </button>
  );
}

UserCard.ActionButton = ActionButton;
export default UserCard;
