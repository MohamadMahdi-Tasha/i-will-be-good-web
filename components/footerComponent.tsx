// Codes By Mahdi Tasha
// Importing Part
import Link from 'next/link';
import HolderComponent from '@/chunks/holderComponent';

// Creating Footer Component And Exporting It As Default
export default function FooterComponent():JSX.Element {
    // Return JSX
    return (
        <footer className={'bg-headerBg'}>
            <HolderComponent className={'flex gap-3 items-center justify-center py-[10px]'}>
                <Link href={'/'} className={'tracking-widest text-black truncate'}>I WILL BE GOOD</Link>
            </HolderComponent>
        </footer>
    );
}