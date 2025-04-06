"use client"
import { ArrowLeftIcon, ArrowLeftLongIcon, ArrowRightIcon, DownloadIcon, LoveIcon, ShareIcon } from "../../../assets/icons";
import CircleBoxGradient from "../../../components/ui/CircleBoxGradient";
import RoundRectGradient from "../../../components/ui/RoundRectGradient";
import { useRouter } from "next/navigation";
import { cleanString } from "../seemoreevents/page";

const ImagePage = () => {
    const router = useRouter();

    const location = useLocation();
    const { imageUrl, photosList = [], currentImage = 0, eventName } = location.state || {};

    const goBack = () => {
        // navigate(-1);
        router.push(`/view-event?q=${cleanString(eventName)}`); 
    };

    const handleNextImage = () => {
        if (!photosList.length) return;

        let newImageId = currentImage + 1;
        if (newImageId >= photosList.length) {
            newImageId = 0;
        }

        const photo = photosList[newImageId];
        const path = `/images?q=${cleanString(photo.name)}`;

       router.push(path, {
            state: {
                imageUrl: photo.image,
                id: photo.id,
                photosList: photosList,
                currentImage: newImageId
            }
        });
    };

    const handlePrevImage = () => {
        if (!photosList.length) return;

        let newImageId = currentImage - 1;
        if (newImageId < 0) {
            newImageId = photosList.length - 1;
        }

        const photo = photosList[newImageId];
        const path = `/images?q=${cleanString(photo.name)}`;

        router.push(path, {
            state: {
                imageUrl: photo.image,
                id: photo.id,
                photosList: photosList,
                currentImage: newImageId
            }
        });
    };

    return (
        <div className="h-[85vh] bg-[var(--secondary)]">
            <div className="flex flex-row items-center justify-between pt-7 pb-4 px-20 border-b border-[#222222] border-[1px]">
                <div onClick={goBack} className="cursor-pointer">
                    <RoundRectGradient>
                        <ArrowLeftLongIcon />
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

            <div className="flex items-center justify-center w-full h-full">
                <div className="flex flex-row items-center justify-between p-5 gap-6">
                    <div onClick={handlePrevImage} className="cursor-pointer">
                        <RoundRectGradient>
                            <ArrowLeftIcon />
                        </RoundRectGradient>
                    </div>

                    <div className="flex flex-col items-center gap-6 h-full">
                        <div
                            className="relative p-[2px] rounded-2xl bg-radial from-[#9309B7] to-[#3F024F]/60 
                                group w-2/3 h-full shadow-[0_20px_50px_rgba(42,1,52,0.55)] 
                                hover:shadow-[0_25px_60px_rgba(42,1,52,0.7)] transition-all duration-300"
                        >
                            <div className="flex flex-col items-center justify-center gap-3 bg-[var(--secondary)] relative transition-all w-full h-full rounded-2xl text-center text-white">
                                {imageUrl && (
                                    <img
                                        src={imageUrl}
                                        alt={photosList[currentImage]?.name || 'image'}
                                        className="object-cover rounded-xl w-full h-full max-h-[90vh]"
                                    />
                                )}
                            </div>
                        </div>

                        <div className="text-[var(--grey2)] text-sm">Uploaded on {photosList[currentImage]?.creator}</div>
                    </div>


                    <div onClick={handleNextImage} className="cursor-pointer">
                        <RoundRectGradient>
                            <ArrowRightIcon />
                        </RoundRectGradient>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagePage;