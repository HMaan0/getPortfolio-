export const MacNavbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="w-full items-center justify-between bg-theme-bar md:p-3 p-4 rounded-t-[36px] flex border-b border-theme-border ">
      {children}
    </nav>
  );
};
