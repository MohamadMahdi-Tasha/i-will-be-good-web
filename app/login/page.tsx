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
                <InputComponent isErrored={true} errorText={'asdsadadsa'} type={'email'} required id={'email-input'} placeHolder={'Email:'} />
                <InputComponent isErrored={false} errorText={''} type={'password'} required id={'password-input'} placeHolder={'Password:'} />
                <button>SUBMIT</button>
            </form>
        </HolderComponent>
    );
}