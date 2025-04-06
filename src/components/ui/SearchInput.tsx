import React from "react";
import { SearchIcon } from "../../assets/icons";

interface SearchInputProps {
    placeholder: string;
    value?: string;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
    onClick?: () => void;  // Add this prop
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;  // Add this prop
}

const SearchInput = ({ 
    placeholder,
    value,
    onChange,
    onSearch,
    onClick,  // Include in destructuring
    onKeyPress  // Include in destructuring
}: SearchInputProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSearch && value) {
            onSearch(value);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const classn = `flex flex-col items-center justify-center gap-3 relative transition-all text-center text-white bg-[#737373] rounded-lg`;

    return (
        <div className="relative p-[1px] rounded-lg bg-radial from-[#D9D9D9] to-[#737373]/20 group w-fit transition-all via-[#73737369] via-90%">
            <div className={classn}>
                <form onSubmit={handleSubmit} className="w-full rounded-lg bg-[var(--secondary)]/60 flex flex-row gap-2 items-center justify-start px-2 text-left focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={value ?? ""}
                        onChange={handleChange}
                        onClick={onClick}  // Add this
                        onKeyPress={onKeyPress}  // Add this
                        className="w-full py-2 text-white bg-transparent outline-none focus:outline-none focus:ring-0"
                    />
                </form>
            </div>
        </div>
    );
};

export default SearchInput;