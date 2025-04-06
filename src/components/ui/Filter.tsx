import { FilterIcon } from "../../assets/icons"

const Filter = () => {
    const classn = `flex flex-col items-center justify-center gap-3 relative transition-all text-center text-white bg-[#737373] rounded-lg`
    return (
        <div
            className="relative p-[1px] rounded-lg bg-radial from-[#D9D9D9] to-[#737373]/20 group w-fit transition-all via-[#73737369] via-90% cursor-pointer"
        >
            <div className={classn}>
                <div className="flex flex-row items-center justify-center gap-1 rounded-lg p-2 cursor- bg-[var(--secondary)]/60 ">
                    <FilterIcon />
                    <span>Filter</span>
                </div>
            </div>
        </div>
    )
}

export default Filter