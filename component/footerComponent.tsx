// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import Link from 'next/link';

// Creating And Exporting Footer Component As Default
export default function FooterComponent():ReactNode {
    // Returning JSX
    return (
        <footer className={'bg-black/20 backdrop-blur'}>
            <HolderComponent className={'flex flex-wrap items-center justify-between gap-[10px]'}>
                <Link href={'/'} className={'font-normal tracking-[7px] lg:text-[22px] text-[20px]'}>I WILL BE GOOD</Link>
                <h3 className={'font-normal lg:text-[22px] text-[20px]'}>Made By <a href={"https://mahditasha.vercel.app/"} className={'link'}>Mahdi Tasha</a></h3>
            </HolderComponent>
        </footer>
    );
}