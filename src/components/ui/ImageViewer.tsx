import { ArrowLeftIcon, ArrowRightIcon, DownloadIcon, LoveIcon, ShareIcon } from "../../assets/icons";
import CircleBoxGradient from "./CircleBoxGradient";
import RoundRectGradient from "./RoundRectGradient";
import { PhotoView } from "../../data";

interface ImageViewerProps {
    currentPhoto: PhotoView;
    photosList: PhotoView[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
}

const ImageViewer = ({
    currentPhoto,
    // photosList,
    // currentIndex,
    onClose,
    onNext,
    onPrevious
}: ImageViewerProps) => {
    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col">
            <div className="flex flex-row items-center justify-between py-4 px-20 border-b border-[#222222] border-[1px]">
                <div onClick={onClose} className="cursor-pointer">
                    <RoundRectGradient>
                        <ArrowLeftIcon />
                    </RoundRectGradient>
                </div>

                <div className="flex flex-row gap-2 items-center justify-end">
                    <div className="w-10 h-10 bg-[#37373766] rounded-full flex items-center justify-center cursor-pointer">
                        <CircleBoxGradient className="w-10 h-10 bg-[#373737] rounded-full">
                            <LoveIcon />
                        </CircleBoxGradient>
                    </div>
                    <div className="w-10 h-10 bg-[#37373766] rounded-full flex items-center justify-center cursor-pointer">
                        <CircleBoxGradient className="w-10 h-10 bg-[#373737] rounded-full">
                            <DownloadIcon />
                        </CircleBoxGradient>
                    </div>
                    <div className="w-10 h-10 bg-[#37373766] rounded-full flex items-center justify-center cursor-pointer">
                        <CircleBoxGradient className="w-10 h-10 bg-[#373737] rounded-full">
                            <ShareIcon />
                        </CircleBoxGradient>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center flex-1">
                <div className="flex flex-row items-center justify-between p-5 gap-6">
                    <div onClick={onPrevious} className="cursor-pointer">
                        <RoundRectGradient>
                            <ArrowLeftIcon />
                        </RoundRectGradient>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <div className="relative p-[2px] rounded-2xl bg-radial from-[#9309B7] to-[#3F024F]/60 
                            group shadow-[0_20px_50px_rgba(42,1,52,0.55)] 
                            hover:shadow-[0_25px_60px_rgba(42,1,52,0.7)] transition-all duration-300">
                            <div className="flex flex-col items-center justify-center gap-3 bg-[var(--secondary)] relative transition-all rounded-2xl text-center text-white">
                                <img
                                    src={currentPhoto.image}
                                    alt={currentPhoto.name}
                                    className="object-contain rounded-xl max-h-[70vh] w-auto"
                                />
                            </div>
                        </div>

                        <div className="text-[var(--grey2)] text-sm">
                            By {currentPhoto.creator} • {currentPhoto.Location}
                        </div>
                    </div>

                    <div onClick={onNext} className="cursor-pointer">
                        <RoundRectGradient>
                            <ArrowRightIcon />
                        </RoundRectGradient>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageViewer;