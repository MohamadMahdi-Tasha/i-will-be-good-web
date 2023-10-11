// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";

// Creating And Exporting Header Component As Default
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <header className={'bg-black/20 backdrop-blur'}>
            <HolderComponent className={'flex items-center justify-center'}>
                <h3 className={'font-normal text-center tracking-[7px] text-[26px]'}>I WILL BE GOOD</h3>
            </HolderComponent>
        </header>
    );
}