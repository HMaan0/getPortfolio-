const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-theme-bar w-1/5 ">{children}</div>
    </>
  );
};

export default Sidebar;
