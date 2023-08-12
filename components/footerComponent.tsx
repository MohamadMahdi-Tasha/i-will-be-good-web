// Codes By Mahdi Tasha
// Importing Part
import HolderComponent from '@/chunks/holderComponent';

// Creating Footer Component And Exporting It As Default
export default function FooterComponent():JSX.Element {
    // Return JSX
    return (
        <footer className={'bg-headerBg'}>
            <HolderComponent className={'flex gap-3 items-center justify-center py-[10px]'}>
                <h1 className={'tracking-widest text-black truncate'}>I WILL BE GOOD</h1>
            </HolderComponent>
        </footer>
    );
}