// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";

// Defining Type Of Props
interface propsType {
    children: ReactNode;
    className?: string;
}

// Creating And Exporting Holder Component As Default
export default function HolderComponent({children, className}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={(className !== null) ? `p-[20px] max-w-[1100px] mx-auto ${className}` : 'p-[20px] max-w-[1100px] mx-auto'}>
            {children}
        </div>
    );
}