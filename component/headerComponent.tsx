// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";

// Creating And Exporting Header Component As Default
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <header>
            <HolderComponent>
                <h3>I WILL BE GOOD</h3>
            </HolderComponent>
        </header>
    );
}