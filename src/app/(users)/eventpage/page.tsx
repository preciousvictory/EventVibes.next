"use client"
import { EventSideBar } from "@/components/ui/SideBar"
import { EventView, photos, PhotoView, trendingEvents } from "@/data"
import MainLayout from "@/components/MainLayout";
import { CalenderIcon, LocationIcon, LoveIcon, NFTIcon, People, UploadIcon } from "@/assets/icons";
import SearchInput from "@/components/ui/SearchInput";
import AnimatedButton from "@/components/ui/Button";
import { PhotoCard } from "@/components/ui/PhotoCard";
import Filter from "@/components/ui/Filter";
import { cleanString } from "../seemoreevents/page";
import { useRouter, useSearchParams } from "next/navigation";

const EventPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const router = useRouter();

    const events: EventView[] = trendingEvents;

    let event = events.find(ev => (
        cleanString(ev.name) === cleanString(query || '')
    ));
    const PhotosList: PhotoView[] = photos;

    const handleClickImage = (photo: PhotoView) => {
        const path = `/images?q=${cleanString(photo.name)}`;
        router.push(path);
        router.push(path, {
            state: {
                imageUrl: photo.image,
                id: photo.id,
                photosList: PhotosList,
                currentImage: PhotosList.indexOf(photo),
                eventName: event?.name
            }
        });
    }

    const handleUpload = () => {
        router.push("/upload");
    }

    return (
        <div className="flex h-screen bg-[var(--secondary)]/80 text-white relative">
            {/* Sidebar */}
            <EventSideBar />

            {/* Main Content */}
            <MainLayout>
                <div>
                    <div className="relative h-[250px] w-full">
                        <div className="relative h-full w-full" >
                            <img
                                src={event?.eventImages.event_banner}
                                alt={event?.name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="absolute bottom-0 w-full h-full flex flex-col space-y-3 justify-between bg-gradient-to-t from-[#000000] to-transparent via-[#000000] via-20% p-6 pt-9 items-start">
                            <div className="w-fit fle flex-col space-y-3">
                                <div className="rounded-full w-fit px-3 py-2 bg-[var(--primary3)] text-[#E37BFF]">Entertainment</div>
                                <h4 className="text-4xl font-medium text-white text-left">{event?.name}</h4>
                                <div className="flex flex-row items-center gap-3 ">
                                    <div className="flex flex-row items-center gap-2 justify-baseline">
                                        <CalenderIcon />
                                        <p className="text-[#EEEEEE]/90 text-sm">{event?.time?.toString()}</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <LocationIcon />
                                        <p className="text-[var(--grey2)]/90 text-sm">{event?.location}</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <People />
                                        <p className="text-[var(--grey2)]/90 text-sm">50 participants</p> {// change to event?.total attendences
                                        }
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <LoveIcon />
                                        <p className="text-[var(--grey2)]/90 text-sm">{event?.total_likes} likes</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <NFTIcon />
                                        <p className="text-[var(--grey2)]/90 text-sm">60 NFT won</p> {// change to event?.total nft won
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center mr-6">
                                <div className="text-[var(--grey2)]/90 text-sm text-left w-[60%]">{event?.description}</div>

                                <div className="flex items-center space-x-2">
                                    <div className="h-10 w-10 rounded-full flex items-center justify-center">
                                        <img
                                            src={event?.eventImages.event_profile}
                                            alt={event?.name}
                                            className="object-cover w-full h-full rounded-full"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-semibold">{event?.creator}</p>
                                        <p className="text-xs text-gray-400">Organizer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row gap-4 p-6 items-center justify-between">
                        <h2 className="text-2xl font-semibold">Event Gallery</h2>
                        <div className="flex flex-row gap-4 items-center">
                            <div className="relative">
                                <SearchInput
                                    placeholder="AI search galleries"
                                    onClick={() =>router.push("/ai-search")}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            router.push("/ai-search");
                                        }
                                    }}
                                />
                                <div
                                    className="absolute inset-0 cursor-pointer"
                                    onClick={() => router.push("/ai-search")}
                                />
                            </div>
                            <Filter />
                            <div onClick={() => handleUpload()}>
                                <AnimatedButton icon={<UploadIcon />} className="shadow-black/75 shadow-xl hover:shadow-lg transition-shadow  w-[150px]">
                                    <span>Upload</span>
                                </AnimatedButton>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-4 gap-4">
                            {PhotosList.map((photo: PhotoView, index: number) => (
                                <div key={index} onClick={() => handleClickImage(photo)}>
                                    <PhotoCard photo={photo} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </MainLayout>
            <div></div>
        </div>
    )
}

export default EventPage