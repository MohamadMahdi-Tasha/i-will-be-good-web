// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";

// Defining Type Of Props
interface propsType {
    children: ReactNode;
}

// Creating And Exporting Holder Component As Default
export default function HolderComponent({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <div>
            {children}
        </div>
    );
}