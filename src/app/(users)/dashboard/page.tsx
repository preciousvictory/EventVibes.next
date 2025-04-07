"use client"
import { useRouter } from "next/navigation";
import MainHeaderLayout from "@/components/MainHeaderLayout";
import { EventCard } from "@/components/ui/EventCard";
import SideBar from "@/components/ui/SideBar";
import { EventView, trendingEvents } from "@/data";
import { cleanString } from "@/utils/string";
import Filter from "@/components/ui/Filter";
import { isValidSuiObjectId } from "@mysten/sui/utils";
import { Counter } from "@/components/dashboard/Counter";
import { ProfileListDisplay } from "@/components/dashboard/Profile";
import { useState } from "react";

const Events = () => {
  const router = useRouter();
  const [counterId, setCounter] = useState(() => {
    const hash = window.location.hash.slice(1);
    return isValidSuiObjectId(hash) ? hash : null;
  });

  const handleClickCategory = (categoryName: string) => {
    const path = `/view-category-event?q=${cleanString(categoryName)}`;;
    router.push(path);
  }
  const handleClickEvent = (event: string) => {
    const path = `/view-event?q=${cleanString(event)}`;;
    router.push(path);
  }

  return (
    <div className="flex h-screen bg-[var(--secondary)]/80 text-white relative">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <MainHeaderLayout>
        <div className="flex items-center justify-end  space-x-2 ">
          <Filter />
        </div>

        {counterId ? (
          <Counter id={counterId} />
        ) : (
          <ProfileListDisplay
          />)}

        {/* Trending Events Section */}
        <div className="mb-8">
          <div className="flex flex-row items-center justify-between">
            <h3 className="mb-4 text-2xl font-semibold text-left">Trending Events</h3>
            <button onClick={() => handleClickCategory('Trending Event')} className="text-[#E37BFF] cursor-pointer">See More</button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {trendingEvents.map((event: EventView, index: number) => (
              <div key={index} onClick={() => handleClickEvent(event.name)}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>


      </MainHeaderLayout>
    </div>
  );
}

export default Events