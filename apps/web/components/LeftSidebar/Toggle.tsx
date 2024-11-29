import DashboardInput from "@repo/ui/DashboardDiv";
import { sectionComponent } from "../../store/component";
import { useSetRecoilState } from "recoil";

interface ToggleProps {
  option: string;
  selected: string | null;
  // eslint-disable-next-line no-unused-vars
  onSelect: (option: string) => void;
}

const Toggle: React.FC<ToggleProps> = ({ option, selected, onSelect }) => {
  const setSelectedNavbarState = useSetRecoilState(sectionComponent);
  function handleSelect() {
    onSelect(option);
    if (option !== "Desktop" && option !== "Mobile") {
      setSelectedNavbarState(option);
    }
  }
  return (
    <div>
      <DashboardInput>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={handleSelect}
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
