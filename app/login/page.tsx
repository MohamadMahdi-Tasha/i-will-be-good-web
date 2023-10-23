// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import InputComponent from "@/chunk/inputComponent";

// Creating And Exporting Login Page As Default
export default function LoginPage():ReactNode {
    // Returning JSX
    return (
        <HolderComponent>
            <form action="#">
                <InputComponent type={'email'} required id={'email-input'} placeHolder={'Email:'} />
                <InputComponent type={'password'} required id={'password-input'} placeHolder={'Password:'} />
                <button>SUBMIT</button>
            </form>
        </HolderComponent>
    );
}