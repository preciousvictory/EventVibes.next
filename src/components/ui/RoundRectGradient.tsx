import { GradientProps } from "../../types/components";

const RoundRectGradient: React.FC<GradientProps> = ({ children, className = '' }) => {

    const classn = `flex flex-col items-center justify-center gap-3 relative transition-all text-center text-white w-10 h-10 bg-[#373737] rounded-lg  ${className}`
    return (
        <div
            className="relative p-[1px] rounded-lg bg-radial from-[#D9D9D9] to-[#737373]/20 group w-fit transition-all via-[#73737383] via-90%"
        >
            <div className={classn}>
                {children}
            </div>
        </div>
    );
};

export default RoundRectGradient;
