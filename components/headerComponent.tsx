// Codes By Mahdi Tasha
// Importing Part
import ProfileImage from '@/public/assets/img/img-profile.jpg';
import HolderComponent from '@/chunks/holderComponent';

// Creating Header Component And Exporting It As Default
export default function HeaderComponent():JSX.Element {
    // Return JSX
    return (
        <header>
            <HolderComponent>
                <h1>I WILL BE GOOD</h1>
                <img src={ProfileImage.src} alt="Profile Image"/>
            </HolderComponent>
        </header>
    );
}