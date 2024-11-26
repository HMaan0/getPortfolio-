import DashboardInput from "@repo/ui/DashboardDiv";

interface ToggleProps {
  option: string;
  selected: string | null;
  // eslint-disable-next-line no-unused-vars
  onSelect: (option: string) => void;
}

const Toggle: React.FC<ToggleProps> = ({ option, selected, onSelect }) => {
  return (
    <div>
      <DashboardInput>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => onSelect(option)}
            className={`flex justify-center items-center gap-2 text-lg transition-colors duration-200 hover:bg-white/50 rounded-full px-2 ${
              selected === option ? "bg-white/30" : ""
            }`}
          >
            {option}
          </button>
        </div>
      </DashboardInput>
    </div>
  );
};

export default Toggle;
