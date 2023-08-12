// Codes By Mahdi Tasha
// Importing Part
import {Metadata} from "next";
import '@/app/index.css';

// Creating And Exporting Meta Data Of Pages
export const metadata: Metadata = {
    title: 'I Will Be Good',
    description: 'I Will Be Good Is Project To Check Days When I Took My Medications And Done My Meditations',
    keywords: 'derealization medication meditation days month good mental-health health',
    themeColor: '#00000',
    viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    manifest: 'manifest.json'
}

// Defining Types Of Props
interface propsType {
    children: React.ReactNode;
}

// Creating Root Layout Of Pages And Exporting It A Default
export default function RootLayout({children}: propsType) {
    // Returning JSX
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}