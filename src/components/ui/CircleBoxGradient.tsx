import { GradientProps } from "../../types/components";

const CircleBoxGradient: React.FC<GradientProps> = ({children, className=''}) => {

    const classn = `flex flex-col items-center justify-center gap-3 relative transition-all text-center text-white  ${className}`
  return (
    <div
        className="relative p-[1px] rounded-full bg-radial from-[#D9D9D9] to-[#737373]/20 group w-fit transition-all via-[#73737383] via-90%"
      >
        <div className={classn}>
          {children}
        </div>
      </div>
  );
};

export default CircleBoxGradient;
