export const MacNavbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      className={`w-full items-center justify-between bg-theme-bar p-3 flex border-b border-theme-border ${className}`}
    >
      {children}
    </nav>
  );
};
