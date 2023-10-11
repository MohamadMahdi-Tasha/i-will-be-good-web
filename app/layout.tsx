// Codes By Mahdi Tasha
// Importing Part
import {Metadata} from "next";
import {ReactNode} from "react";
import '@/app/index.css';
import {Roboto} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import HeaderComponent from "@/component/headerComponent";

// Defining Roboto Font
const RobotoFont:NextFont = Roboto({
    weight: ['300','400','500','700','900'],
    subsets: ['latin']
})

// Defining Metadata Of Pages
export const metadata:Metadata = {
    title: "I WILL BE GOOD",
    viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    manifest: './manifest.json',
    robots: './robots.txt',
    themeColor: '#00000',
    openGraph: {
        title: "I WILL BE GOOD | DPDR Recovery App",
        description: "I will be good is dpdr web made for treating dpdr with saving your meditation and medication's",
        type: "website"
    },
    twitter:{
        title: "I WILL BE GOOD | DPDR Recovery App",
        description: "I will be good is dpdr web made for treating dpdr with saving your meditation and medication's",
    }
}

// Defining Type Of Props
interface propsType {
    children: ReactNode;
}

// Creating And Exporting Layout Component As Default
export default function LayoutComponent({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <html>
            <body className={RobotoFont.className}>
                <HeaderComponent />
                {children}
            </body>
        </html>
    );
}