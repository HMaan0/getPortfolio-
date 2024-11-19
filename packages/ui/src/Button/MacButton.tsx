interface ButtonProps {
  className?: string;
  onClick?: () => void;
}

export const MacButton = ({ className, onClick }: ButtonProps) => {
  return (
    <div className="p-4 md:p-2 justify-between items-center  flex gap-4 md:gap-2">
      <button
        onClick={onClick}
        className={`p-2 md:p-1 bg-red-600 hover:bg-red-600/70 transition-colors duration-100 rounded-full w-min ${className}`}
      ></button>
      <button
        onClick={onClick}
        className={`p-2 md:p-1 bg-yellow-600 hover:bg-yellow-600/70 transition-colors duration-100 rounded-full w-min ${className}`}
      ></button>
      <button
        onClick={onClick}
        className={`p-2 md:p-1 bg-green-600 hover:bg-green-600/70 transition-colors duration-100 rounded-full w-min ${className}`}
      ></button>
    </div>
  );
};
