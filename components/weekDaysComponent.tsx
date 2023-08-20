// Codes By Mahdi Tasha
// Importing Part
import CheckboxComponent from "@/chunks/checkboxComponent";

// Defining Type Of Props
interface propsType {
    datesArray: [boolean,boolean,boolean,boolean,boolean,boolean,boolean];
}

// Creating Week Days Component And Exporting It As Default
export default function WeekDaysComponent({datesArray}:propsType):JSX.Element {
    // Return JSX
    return (
        <div className={'flex justify-between gap-5 black-container overflow-auto'}>
            <div className={'flex flex-col justify-center items-center gap-3'}>
                <CheckboxComponent noAction isChecked={datesArray[0]} isDark={false} isLarge={true} />
                <span className={'text-white text-[12px]'}>SAT</span>
            </div>
            <div className={'flex flex-col justify-center items-center gap-3'}>
                <CheckboxComponent noAction isChecked={datesArray[1]} isDark={false} isLarge={true} />
                <span className={'text-white text-[12px]'}>SUN</span>
            </div>
            <div className={'flex flex-col justify-center items-center gap-3'}>
                <CheckboxComponent noAction isChecked={datesArray[2]} isDark={false} isLarge={true} />
                <span className={'text-white text-[12px]'}>MON</span>
            </div>
            <div className={'flex flex-col justify-center items-center gap-3'}>
                <CheckboxComponent noAction isChecked={datesArray[3]} isDark={false} isLarge={true} />
                <span className={'text-white text-[12px]'}>TUE</span>
            </div>
            <div className={'flex flex-col justify-center items-center gap-3'}>
                <CheckboxComponent noAction isChecked={datesArray[4]} isDark={false} isLarge={true} />
                <span className={'text-white text-[12px]'}>WED</span>
            </div>
            <div className={'flex flex-col justify-center items-center gap-3'}>
                <CheckboxComponent noAction isChecked={datesArray[5]} isDark={false} isLarge={true} />
                <span className={'text-white text-[12px]'}>THU</span>
            </div>
            <div className={'flex flex-col justify-center items-center gap-3'}>
                <CheckboxComponent noAction isChecked={datesArray[6]} isDark={false} isLarge={true} />
                <span className={'text-white text-[12px]'}>FRI</span>
            </div>
        </div>
    );
}