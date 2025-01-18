function Header({ children }) {
  return (
    <header className="flex items-center justify-between px-8">
      {children}
    </header>
  );
}

function Title({ children }) {
  return (
    <h2 className="ps-1 text-3xl font-semibold text-slate-700">{children}</h2>
  );
}

Header.Title = Title;
export default Header;
