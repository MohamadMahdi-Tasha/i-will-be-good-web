// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Component
'use client';

// Importing Part
import {useSelector} from "react-redux";
import HolderComponent from "@/chunks/holderComponent";
import MonthlyFirstSection from "@/components/monthlySections/monthlyFirstSection";
import MonthlySecondSection from "@/components/monthlySections/monthlySecondSection";

// Creating Monthly Rasperidone Page And Exporting It As Default
export default function MonthlyRasperidonePage():JSX.Element {
    // Redux Part
    const store:{} = useSelector(state => state);
    const rasperidoneState:[] = store.raspridone;
    const doneRasperidone:[] = rasperidoneState.filter(item => item.isDone === true);
    const doneRasperidoneDays:number = doneRasperidone.map(item => new Date(item.date).getDate());

    // Returning JSX
    return (
        <HolderComponent className={'py-[50px]'}>
            <MonthlyFirstSection doneDates={doneRasperidoneDays} title={'Rasperidone taken this week:'} />
            <hr className={'divider'}/>
            <MonthlySecondSection />
        </HolderComponent>
    );
}