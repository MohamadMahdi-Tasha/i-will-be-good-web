// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Component
'use client';

// Importing Part
import {useSelector} from "react-redux";
import HolderComponent from "@/chunks/holderComponent";
import MonthlyFirstSection from "@/components/monthlySections/monthlyFirstSection";
import MonthlySecondSection from "@/components/monthlySections/monthlySecondSection";

// Creating Monthly Sertraline Page And Exporting It As Default
export default function MonthlySertralinePage():JSX.Element {
    // Redux Part
    const store:{} = useSelector(state => state);
    const sertralineState:{} = store.sertraline;
    const doneSertraline:{} = sertralineState.filter(item => item.isDone === true);
    const doneSertralineDays:number = doneSertraline.map(item => new Date(item.date).getDate());

    // Returning JSX
    return (
        <HolderComponent className={'py-[50px]'}>
            <MonthlyFirstSection doneDates={doneSertralineDays} title={'Sertraline taken this week:'} />
            <hr className={'divider'}/>
            <MonthlySecondSection />
        </HolderComponent>
    );
}