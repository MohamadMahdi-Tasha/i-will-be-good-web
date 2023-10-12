// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from 'react';
import WeeklyReportComponent from "@/component/weeklyReport/weeklyReportComponent";
import Link from "next/link";

// Defining Type OF Props
interface propsType {
    weekArray: [boolean,boolean,boolean,boolean,boolean,boolean,boolean];
    treatment: 'risperidone' | 'sertraline' | 'meditation';
    link: string;
    className?: string;
}

// Crating And Exporting Weekly Report Of Treatment Component As Default
export default function WeeklyReportOfTreatmentComponent({treatment, link, weekArray, className}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={(className !== null) ? className : ''}>
            <h5 className={'subtitle'}>Monthly treatment report of {treatment}:</h5>
            <WeeklyReportComponent weekArray={weekArray} />
            <Link className={'rounded-[10px] p-[10px] border border-black w-full text-center truncate text-[18px] text-red-black font-normal block mt-[15px]'} href={link}>
                See monthly report of {treatment}.
            </Link>
        </div>
    );
}