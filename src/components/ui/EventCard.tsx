import { LoveIcon } from "../../assets/icons"
import { EventView } from "../../data"

export const EventCard = ({ event }: { event: EventView }) => {

    return (
        <div className="relative rounded-2xl overflow-hidden aspect-square h-full w-full cursor-pointer shadow-lg hover:shadow-lg transition-shadow" style={{ '--tw-shadow-color': '#3F024F52' } as React.CSSProperties}>
            <div className="relative h-full w-full" >
                <img
                    src={event.eventImages.event_profile}
                    alt={event.name}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Gradient footer */}
            <div className="absolute bottom-0 w-full h-[50%] flex flex-row bg-gradient-to-t from-[var(--secondary)] to-transparent via-[var(--secondary)] via-20% p-3 items-center justify-between">
                <div className="flex flex-col text-left pr-2">
                    <h4 className="text-lg font-bold text-white">{event.name}</h4>

                    <p className="text-sm text-white/80 pb-1">From: {event.creator}</p>
                </div>

                <div className="flex items-center space-x-1 text-sm text-white/60">
                    <LoveIcon />
                    <span>43</span>
                </div>
            </div>
        </div>
    )
}