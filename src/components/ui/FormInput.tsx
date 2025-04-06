import { InputLayoutProps } from "../../types/components"

const FormInput: React.FC<InputLayoutProps> = ({ children, className = '' }) => {
    const classn = `flex flex-col items-center justify-center gap-3 relative transition-all text-center text-white bg-[#737373] rounded-lg ${className}`
    return (
        <div
            className="relative p-[1px] rounded-lg bg-radial from-[#D9D9D9] to-[#737373]/20 group w-full transition-all via-[#73737369] via-90%"
        >
            <div className={classn}>
                {children}
            </div>
        </div>
    )
}

export default FormInput