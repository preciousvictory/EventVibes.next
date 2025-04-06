"use client"
import { FilterIcon } from "@/assets/icons";
import MainHeaderLayout from "@/components/MainHeaderLayout";
import { EventCard } from "@/components/ui/EventCard";
import SideBar from "@/components/ui/SideBar";
import { categories, trendingEvents } from "@/data";
import { useSearchParams } from "next/navigation";

export const cleanString = (str: string) => {
    return str
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[\s-]+/g, '-')
        .replace(/[^\w-]/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '');
};

const SeeMoreEvents = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    let category;

    if (query === cleanString('Trending Event')) {
        // Find the category that matches the query
        category = { title: 'Trending Event', events: trendingEvents };
    } else {

        category = categories.find(cat => (
            cleanString(cat.title) === cleanString(query || '')
        ));
    }

    // If no category found, return a message or null
    if (!category) {
        return (
            <div className="flex h-screen bg-[var(--secondary)]/80 text-white relative">
                <SideBar />
                <MainHeaderLayout>
                    <div className="p-4">
                        No category found for "{query}"
                    </div>
                </MainHeaderLayout>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-[var(--secondary)]/80 text-white relative">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <MainHeaderLayout>
                <div className="flex items-center justify-between space-x-2 mb-4">
                    <div>{category.title}</div>
                    <div className="flex flex-row items-center justify-center gap-1 rounded-lg p-2 bg-[var(--inputColor)] cursor-pointer">
                        <FilterIcon />
                        <span>Filter</span>
                    </div>
                </div>

                {/* Events Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.events.map((event, index) => (
                        <div key={index}>
                            <EventCard event={event} />
                        </div>
                    ))}
                </div>
            </MainHeaderLayout>
        </div>
    );
}

export default SeeMoreEvents;

