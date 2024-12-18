import LoadingTimer from "./LoadingTimer";

const LoadingText = () => {
  return (
    <div className="w-full z-50 relative bg-red-500 top-48 ">
      <span className="absolute p-7 rounded-xl text-center shadow-xl w-5/12 bg-theme-bar  left-1/2  transform -translate-x-1/2  shadow-emerald-500/[0.2] ">
        <LoadingTimer />
      </span>
    </div>
  );
};

export default LoadingText;
