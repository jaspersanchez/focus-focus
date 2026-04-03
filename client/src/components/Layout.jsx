const Layout = ({ children }) => {
  return (
    <div className="min-h-screen max-w-lg mx-auto flex flex-col">
      <header className="p-2 border-b">
        <h1>Focus-focus</h1>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
