// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";

// Defining Type Of Props
interface propsType {
    type: "tel" | "email" | "password" | "text";
    required: boolean;
    placeHolder: string;
    id: string;
}

// Creating And Exporting Input Component As Default
export default function InputComponent({required,id,placeHolder,type}:propsType):ReactNode {
    // Conditional Rendering
    if (type !== "password") {
        return (
            <div>
                <label htmlFor={id}>{placeHolder}</label>
                <input type={type} id={id} name={id} required={required} />
            </div>
        );
    } else {
        return (
            <div>
                <label htmlFor={id}>{placeHolder}</label>
                <div>
                    <input type={type} id={id} name={id} required={required} />
                    <button type={'button'}>
                        x
                    </button>
                </div>
            </div>
        );
    }
}