// Codes By Mahdi Tasha
// Importing Part
import HolderComponent from "@/chunks/holderComponent";
import HomeFirstSectionComponent from '@/components/homeSections/homeFirstSectionComponent';
import HomeSecondSectionComponent from '@/components/homeSections/homeSecondSectionComponent';

// Creating Home Page And Exporting It As Default
export default function HomePage():JSX.Element {
    // Returning JSX
    return (
        <HolderComponent className={'py-[50px]'}>
            <HomeFirstSectionComponent />
            <HomeSecondSectionComponent />
        </HolderComponent>
    );
}