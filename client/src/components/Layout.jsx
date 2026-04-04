import { FiCheckSquare } from 'react-icons/fi';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen max-w-lg mx-auto flex flex-col">
      <header className="px-4 py-3 border-b border-gray-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiCheckSquare size={18} className="text-blue-500" />
          <span className="text-sm font-medium text-gray-800">Focus-focus</span>
        </div>
      </header>
      <main className="px-4 py-6">{children}</main>
    </div>
  );
};

export default Layout;
