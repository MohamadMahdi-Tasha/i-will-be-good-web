// Codes By Mahdi Tasha
// Importing Part
import CheckboxComponent from "@/chunks/checkboxComponent";

// Creating Week Days Component And Exporting It As Default
export default function WeekDaysComponent():JSX.Element {
    // Return JSX
    return (
        <div className={'flex justify-between gap-5 black-container overflow-auto'}>
            <div className={'flex flex-col justify-center items-center gap-3'}>
                <CheckboxComponent isChecked={true} isDark={false} isLarge={true} />
                <span className={'text-white text-[12px]'}>SAT</span>
            </div>
            <div className={'flex flex-col justify-center items-center gap-3'}>
                <CheckboxComponent isChecked={true} isDark={false} isLarge={true} />
                <span className={'text-white text-[12px]'}>SUN</span>
            </div>
            <div className={'flex flex-col justify-center items-center gap-3'}>
                <CheckboxComponent isChecked={true} isDark={false} isLarge={true} />
                <span className={'text-white text-[12px]'}>MON</span>
            </div>
            <div className={'flex flex-col justify-center items-center gap-3'}>
                <CheckboxComponent isChecked={true} isDark={false} isLarge={true} />
                <span className={'text-white text-[12px]'}>TUE</span>
            </div>
            <div className={'flex flex-col justify-center items-center gap-3'}>
                <CheckboxComponent isChecked={true} isDark={false} isLarge={true} />
                <span className={'text-white text-[12px]'}>WED</span>
            </div>
            <div className={'flex flex-col justify-center items-center gap-3'}>
                <CheckboxComponent isChecked={false} isDark={false} isLarge={true} />
                <span className={'text-white text-[12px]'}>THU</span>
            </div>
            <div className={'flex flex-col justify-center items-center gap-3'}>
                <CheckboxComponent isChecked={true} isDark={false} isLarge={true} />
                <span className={'text-white text-[12px]'}>FRI</span>
            </div>
        </div>
    );
}