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
        <div className={'bg-black rounded-[20px] lg:overflow-x-hidden overflow-x-auto overflow-y-hidden py-[30px] px-[20px]'}>
            <div className={'lg:grid flex justify-between items-center lg:grid-cols-7 gap-[30px] max-w-[700px] mx-auto lg:[&>div:last-of-type]:pr-0 [&>div:last-of-type]:pr-[20px]'}>
                {
                    weekArray.map((item:boolean, index:number) => (
                        <WeeklyReportItemComponent index={index} isChecked={item} />
                    ))
                }
            </div>
        </div>
    );
}