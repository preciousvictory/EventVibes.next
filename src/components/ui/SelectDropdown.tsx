import { Controller, useForm } from "react-hook-form";
import FormInput from "./FormInput"
import Select from "react-select";

interface OptionType {
    value: string;
    label: string;
}

const eventOptions: OptionType[] = [
    { value: "event1", label: "Event 1" },
    { value: "event2", label: "Event 2" },
    { value: "event3", label: "Event 3" }
];

const SelectDropdown = () => {
    const { control } = useForm();

    return (
        <FormInput>
            {/* Event Selection */}
            <Controller
                name="event"
                control={control}
                rules={{ required: "Event selection is required" }}
                render={({ field }) => (
                    <Select
                        {...field}
                        options={eventOptions}
                        placeholder="Select an event"
                        className="react-select-container w-full !text-left bg-[#212121]/95 !text-[var(--grey2)] !border-0 !rounded-lg"
                        classNamePrefix="react-select"
                        classNames={{
                            control: () => `!bg-[#212121]/80 !text-[var(--grey2)] !border-none !rounded-lg shadow-md`,
                            placeholder: () => "text-white text-left",
                            menu: () => "!bg-[#121212] !text-[var(--grey2)] !rounded-2xl !shadow-xl !shadow-[0_20px_50px_rgba(42,1,52,0.55)]",
                            option: ({ isSelected }) =>
                                `px-4 py-2 cursor-pointer ${isSelected ? "!text-[var(--grey2)]" : "hover:bg-[var(--navItemColor)]/20 text-[var(--grey2)]"}`
                        }}
                        theme={(theme) => ({
                            ...theme,
                            colors: {
                                ...theme.colors,
                                primary25: 'var(--inputBorder)',
                                primary: 'var(--primary3)',
                                secondary: 'var(--secondary)'
                            },
                        })}
                    />
                )}
            />
            {/* <select name="selectedFruit" className="w-full p-2 rounded-md bg-[var(--secondary)]/85">
                                <SearchInput placeholder="Search for events" />
                                <option value="apple">Apple</option>
                                <option value="banana">Banana</option>
                                <option value="orange">Orange</option>
                              </select> */}
        </FormInput>
    )
}

export default SelectDropdown