"use client"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftLongIcon, Ellipse, FilterIcon } from "../../../assets/icons";
import RoundRectGradient from "../../../components/ui/RoundRectGradient";
import SearchInput from "../../../components/ui/SearchInput";
import ImageViewer from "../../../components/ui/ImageViewer";
import { aiPhotos, PhotoView } from "../../../data";
import { cn } from "../../../lib/utils";

const AIPoweredSearch = () => {
    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [searchResults, setSearchResults] = useState<PhotoView[]>([]);
    const [resultCount, setResultCount] = useState(0);
    const [selectedPhoto, setSelectedPhoto] = useState<PhotoView | null>(null);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);

    const goBack = () => {
        navigate(-1);
    };

    const handleSearch = async (query: string) => {
        setSearchQuery(query);
        if (!query) {
            setSearchResults([]);
            setResultCount(0);
            return;
        }

        setIsLoading(true);

        // Simulate AI processing time
        await new Promise(resolve => setTimeout(resolve, 1500));

        const results = aiPhotos.filter(photo => {
            const searchTerms = query.toLowerCase().split(" ");
            return searchTerms.every(term =>
                photo.name.toLowerCase().includes(term) ||
                photo.creator.toLowerCase().includes(term) ||
                photo.tags?.some(tag => tag.toLowerCase().includes(term)) ||
                photo.category?.toLowerCase().includes(term)
            );
        });

        setSearchResults(results);
        setResultCount(results.length);
        setIsLoading(false);
    };

    const handlePhotoClick = (photo: PhotoView, index: number) => {
        setSelectedPhoto(photo);
        setCurrentPhotoIndex(index);
    };

    const handleCloseViewer = () => {
        setSelectedPhoto(null);
    };

    const handleNextPhoto = () => {
        const nextIndex = (currentPhotoIndex + 1) % searchResults.length;
        setCurrentPhotoIndex(nextIndex);
        setSelectedPhoto(searchResults[nextIndex]);
    };

    const handlePreviousPhoto = () => {
        const prevIndex = currentPhotoIndex === 0 ? searchResults.length - 1 : currentPhotoIndex - 1;
        setCurrentPhotoIndex(prevIndex);
        setSelectedPhoto(searchResults[prevIndex]);
    };

    return (
        <div className="flex justify-center items-start relative min-h-screen overflow-hidden bg-[#141414]">
            <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden">
                <Ellipse />
            </div>

            <div className="flex flex-col w-full max-w-7xl px-4 md:px-6">
                <div className="flex flex-row items-center justify-between pt-5 pb-4 px-4 md:px-20 border-b border-[#222222] border-[1px]">
                    <div onClick={goBack} className="cursor-pointer">
                        <RoundRectGradient>
                            <ArrowLeftLongIcon />
                        </RoundRectGradient>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center w-full py-8">
                    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
                        <div className="text-center pb-6 px-4">
                            <h2 className="text-3xl font-bold mb-2 text-white">AI Powered Media <span className="text-[#721D89]">Search</span></h2>
                            <p className="text-[var(--grey2)] text-sm">Search through event memories using natural language. Try "speaking", "networking", or specific names.</p>
                        </div>

                        <div className="w-full max-w-xl mx-auto flex justify-center">
                            <SearchInput
                                placeholder="Try 'speaking' or 'networking'"
                                onChange={handleSearch}
                                value={searchQuery}

                            />
                        </div>
                    </div>

                    {(searchResults.length > 0 || isLoading) && (
                        <div className="w-full mt-8 px-4">
                            <div className="flex items-center justify-between space-x-2 mb-6">
                                <div className="flex flex-col items-start">
                                    <h3 className="text-2xl font-semibold text-white">Search <span className="text-[var(--navItemColorHover)]">Results</span></h3>
                                    <p className="text-[var(--gray)] text-sm">
                                        {isLoading ? "Searching..." : `Showing ${resultCount} results`}
                                    </p>
                                </div>

                                <div className="flex flex-row items-center justify-center gap-1 rounded-lg p-2 bg-[var(--inputColor)] cursor-pointer">
                                    <FilterIcon />
                                    <span className="text-white">Filter</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {isLoading ? (
                                    // Loading skeletons
                                    Array(6).fill(0).map((_, i) => (
                                        <div
                                            key={i}
                                            className={cn(
                                                "h-64 bg-[#2A2A2A] rounded-lg overflow-hidden animate-pulse",
                                                "transition-opacity duration-300",
                                                i % 2 === 0 ? "opacity-70" : "opacity-40"
                                            )}
                                        />
                                    ))
                                ) : (
                                    // Actual results
                                    searchResults.map((photo, index) => (
                                        <div
                                            key={photo.id}
                                            onClick={() => handlePhotoClick(photo, index)}
                                            className="relative group rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                                        >
                                            <img
                                                src={photo.image}
                                                alt={photo.name}
                                                className="w-full h-64 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                    <h4 className="text-white font-semibold">{photo.name}</h4>
                                                    <p className="text-gray-200 text-sm">by {photo.creator}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {selectedPhoto && (
                <ImageViewer
                    currentPhoto={selectedPhoto}
                    photosList={searchResults}
                    currentIndex={currentPhotoIndex}
                    onClose={handleCloseViewer}
                    onNext={handleNextPhoto}
                    onPrevious={handlePreviousPhoto}
                />
            )}
        </div>
    );
};

export default AIPoweredSearch;