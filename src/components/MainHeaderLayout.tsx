import { useNavigate } from "react-router-dom";
import { UploadIcon } from "../assets/icons";
import { EventVibesLogo } from "../assets/Logo";
import { MainProps } from "../types/components";
import AnimatedButton from "./ui/Button";
import SearchInput from "./ui/SearchInput";

const MainHeaderLayout: React.FC<MainProps> = ({ children, className = '' }) => {
  const navigate = useNavigate();

  const handleUpload = () => {
    navigate("/upload");
  }

  return (
    <main className="flex flex-col justify-center items-end relative min-h-screen pl-[4px] bg-radial from-[var(--gray)]/90 to-[var(--secondary)] group transition-all w-3/4 ml-[20%]">
      <div
        className={`relative transition-all px-8 py-8 text-center bg-[var(--secondary)] text-white w-full h-full  ${className}`}
      >
        {/* Header */}
        <div className="mb-6 flex flex-row items-center justify-between">
          <div className="flex flex-row w-fit text-center  ">
            <EventVibesLogo />
          </div>
          <div className="flex items-center justify-center space-x-4 flex-row">
            <div >
              <SearchInput placeholder="Search events..." />
            </div>

            <div onClick={() => handleUpload()}>
              <AnimatedButton icon={<UploadIcon />} className="shadow-black/75 shadow-xl hover:shadow-lg transition-shadow  w-[150px]">
                <span>Upload</span>
              </AnimatedButton>
            </div>
          </div>
        </div>

        <div className="h-0.5 w-full bg-[var(--gray)]/30 mb-2"></div>

        {children}
      </div>
    </main>
  );
};

export default MainHeaderLayout;
