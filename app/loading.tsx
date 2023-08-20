// Codes By Mahdi Tasha
// Importing Part
import HolderComponent from "@/chunks/holderComponent";
import Logo from '@/app/favicon.ico';

// Creating Loader Of Pages And Exporting It As Default
export default function LoadingComponent():JSX.Element {
    // Returning JSX
    return (
        <div className={'bg-white'}>
            <HolderComponent className={'flex justify-center items-center min-h-[100vh]'} >
                <img src={Logo.src} alt="Logo Of Page"/>
            </HolderComponent>
        </div>
    );
}