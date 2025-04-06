import { Ellipse } from "../assets/icons";
import { GradientProps } from "../types/components";

const GradientLayout: React.FC<GradientProps> = ({children, className=''}) => {

    const classn = `flex flex-col w-full items-center gap-3 bg-[var(--secondary)] relative transition-all px-8 py-12 rounded-2xl text-center text-white  ${className}`
  return (
    <div className="flex justify-center items-center relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden">
        <Ellipse />
      </div>

      <div
        className="relative p-[2px] rounded-2xl bg-radial from-[#9309B7] to-[#3F024F]/6 group w-1/3 shadow-lg hover:shadow-xl transition-shadow" style={{ '--tw-shadow-color': '#2A01348C' } as React.CSSProperties}
      >
        <div className={classn}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default GradientLayout;
