const OneSideButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full p-2 bg-primary_dark bg-gradient-to-t from-gray-500/10  border-gray-500 border  rounded-e-full">
      {children}
    </div>
  );
};

export default OneSideButton;
