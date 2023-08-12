// Codes By Mahdi Tasha
// Importing Part
import ProfileImage from '@/public/assets/img/img-profile.jpg';
import HolderComponent from '@/chunks/holderComponent';

// Creating Header Component And Exporting It As Default
export default function HeaderComponent():JSX.Element {
    // Return JSX
    return (
        <header className={'bg-headerBg'}>
            <HolderComponent className={'flex gap-3 items-center justify-between py-[10px]'}>
                <h1 className={'tracking-widest text-black truncate'}>I WILL BE GOOD</h1>
                <img className={'w-[50px] h-[50px] aspect-square object-cover rounded-full'} src={ProfileImage.src} alt="Profile Image"/>
            </HolderComponent>
        </header>
    );
}