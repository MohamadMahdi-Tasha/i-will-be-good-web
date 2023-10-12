// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import Image from '@/public/assets/img/img-404.png';
import HolderComponent from "@/chunk/holderComponent";

// Creating And Exporting 404 Page As Default
export default function NotFoundPage():ReactNode {
    // Returning JSX
    return (
        <HolderComponent>
            <section>
                <main>
                    <img className={'lg:w-[70%] w-full mx-auto mb-[30px]'} src={Image.src} alt="Illustration"/>
                    <h1 className={'text-center'}>
                        <span className={'lg:text-[24px] text-[20px] font-normal'}>The page your looking for is</span>
                        <br/>
                        <span className={'lg:text-[32px] text-[25px] font-bold'}>Not Found</span>
                    </h1>
                </main>
            </section>
        </HolderComponent>
    );
}
