import { Button } from "@repo/ui/Button";
import { Line } from "@repo/ui/Line";
import { MdDelete } from "react-icons/md";

const CardLine = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <>
      <div className={`flex gap-7 flex-col  ${className}`}>
        <Line></Line>
        <div className="flex justify-between">
          <Button className="w-min text-sm">Card</Button>
          <button onClick={onClick}>
            <MdDelete
              className={`${className ? "text-red-500 hover:text-red-500/50 " : "hidden"}`}
              size={20}
            ></MdDelete>
          </button>
        </div>
        {children}
      </div>
    </>
  );
};

export default CardLine;
