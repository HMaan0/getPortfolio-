interface divProps {
  children: React.ReactNode;
}
const DashboardInput = ({ children }: divProps) => {
  return (
    <div className="w-full gap-2 justify-between flex items-center px-4 py-2 md:px-2 md:py-1 border-theme-border bg-theme-button rounded-full">
      {children}
    </div>
  );
};

export default DashboardInput;
