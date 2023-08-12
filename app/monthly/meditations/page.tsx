// Codes By Mahdi Tasha
// Importing Part
import HolderComponent from "@/chunks/holderComponent";
import MonthlyFirstSection from "@/components/monthlySections/monthlyFirstSection";
import MonthlySecondSection from "@/components/monthlySections/monthlySecondSection";

// Creating Monthly Meditations Page And Exporting It As Default
export default function MonthlyMeditations():JSX.Element {
    // Returning JSX
    return (
        <HolderComponent className={'py-[50px]'}>
            <MonthlyFirstSection title={'Meditations taken this week:'} />
            <hr className={'divider'}/>
            <MonthlySecondSection />
        </HolderComponent>
    );
}