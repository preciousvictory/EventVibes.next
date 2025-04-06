"use client"
import { FilterIcon } from "../../assets/icons";
import MainHeaderLayout from "../../components/MainHeaderLayout";
import { EventCard } from "../../components/ui/EventCard";
import SideBar from "../../components/ui/SideBar";
import { categories, EventView } from "../../data";

const searchResults = categories.map((categories) => { return categories.events[0] });

const Search = () => {
    return (
        <div className="flex h-screen bg-[var(--secondary)]/80 text-white relative">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <MainHeaderLayout>

                <div className="flex items-center justify-between space-x-2 mb-4">
                    <div className="flex flex-col items-start">
                        <h3 className="text-2xl font-semibold text-left">Search <span className="text-[var(--navItemColorHover)]">Results</span></h3>
                        <p className="text-[var(--gray)] text-md">Showing {searchResults.length} results </p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-1 rounded-lg p-2 bg-[var(--inputColor)] cursor-pointer">
                        <FilterIcon />
                        <span>Filter</span>
                    </div>
                </div>

                {/* Events Section */}
                <div className="grid grid-cols-4 gap-4">
                    {searchResults.map((event: EventView, index: number) => (
                        <div key={index}>
                            <EventCard event={event} />
                        </div>
                    ))}
                </div>
            </MainHeaderLayout >
        </div >
    );
}

export default Search