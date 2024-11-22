const Sidebar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-theme-bar w-1/3 overflow-y-scroll custom-scroll ${className}`}
    >
      {children}
    </div>
  );
};

export default Sidebar;
