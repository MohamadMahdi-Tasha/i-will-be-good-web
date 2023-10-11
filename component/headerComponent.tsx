// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import Link from "next/link";

// Creating And Exporting Header Component As Default
export default function HeaderComponent():ReactNode {
    // Returning JSX
    return (
        <header className={'bg-black/20 backdrop-blur'}>
            <HolderComponent className={'flex items-center lg:justify-center'}>
                <Link href={'/'} className={'font-normal tracking-[7px] lg:text-[26px] text-[20px]'}>I WILL BE GOOD</Link>
            </HolderComponent>
        </header>
    );
}