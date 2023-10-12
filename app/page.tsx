// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import FirstSectionComponent from "@/component/section/home/firstSectionComponent";
import SecondSectionComponent from "@/component/section/home/secondSectionComponent";

// Creating And Exporting Home Page As Default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <HolderComponent>
            <FirstSectionComponent />
            <hr className={'section-divider'} />
            <SecondSectionComponent />
            <hr className={'section-divider'} />
        </HolderComponent>
    );
}
