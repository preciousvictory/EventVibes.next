import { MainProps } from "../types/components";

const MainLayout: React.FC<MainProps> = ({ children, className = '' }) => {

  return (
    <main className="flex flex-col justify-center items-end relative min-h-screen pl-[4px] bg-radial from-[var(--gray)]/90 to-[var(--secondary)] group transition-all w-[80%] ml-[20%]">
      <div
        className={`relative transition-all text-center bg-[var(--secondary)] text-white w-full h-full  ${className}`}
      >
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
