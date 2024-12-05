interface divProps {
  children: React.ReactNode;
}
const DashboardInput = ({ children }: divProps) => {
  return (
    <div className="text-sm w-full gap-2 justify-between flex items-center px-2 py-1 border-theme-border bg-theme-button rounded-full">
      {children}
    </div>
  );
};

export default DashboardInput;
