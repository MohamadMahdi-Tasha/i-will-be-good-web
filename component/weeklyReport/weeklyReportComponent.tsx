// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import WeeklyReportItemComponent from "@/component/weeklyReport/weeklyReportItemComponent";

// Defining Type Of props
interface propsType {
    weekArray: [boolean,boolean,boolean,boolean,boolean,boolean,boolean];
}

// Creating And Exporting Weekly Report Component As Default
export default function WeeklyReportComponent({weekArray}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={'py-[30px] px-[20px] bg-black rounded-[20px] lg:overflow-hidden overflow-auto'}>
            <div className={'lg:grid lg:grid-cols-7 flex lg:gap-[30px] gap-[20px] max-w-[700px] mx-auto'}>
                {weekArray.map((item:boolean, index:number) => <WeeklyReportItemComponent index={index} isChecked={item} />)}
            </div>
        </div>
    );
}