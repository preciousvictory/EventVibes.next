import { LoveIcon } from "../../assets/icons"
import { PhotoView } from "../../data"
import Image from "next/image"

export const PhotoCard = ({ photo }: { photo: PhotoView }) => {
    return (
        <div className="relative rounded-2xl overflow-hidden aspect-square h-full w-full cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Main Image */}
            <div className="relative h-full w-full">
                <div className="flex absolute items-center justify-center space-x-1 text-sm bg-[#000000]/60 w-7 h-7 rounded-full top-3 right-3 z-100 cursor-pointer">
                    <LoveIcon />
                </div>
                <Image
                    src={photo.image}
                    alt={photo.name}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-115"
                />
            </div>

            {/* Change group-hover to hover */}
            <div className="absolute bottom-0 w-full h-[30%] flex flex-row 
                         bg-gradient-to-t from-[var(--secondary)]/90 to-transparent 
                         p-3 items-center justify-between
                         opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col text-left">
                    <h4 className="text-lg font-medium text-white">{photo.name}</h4>
                </div>
            </div>
        </div>
    )
}