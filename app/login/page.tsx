// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import InputComponent from "@/chunk/inputComponent";

// Creating And Exporting Login Page As Default
export default function LoginPage():ReactNode {
    // Returning JSX
    return (
        <HolderComponent className={'mt-[20px]'}>
            <div className={'min-h-[100vh] max-w-[800px] mx-auto flex justify-center items-center'}>
                <form className={'w-full bg-black p-[30px] rounded-[20px] flex flex-col gap-[30px]'} action="#">
                    <h1 className={'text-[30px] font-bold text-center text-white'}>Login:</h1>
                    <InputComponent isErrored={false} errorText={''} type={'email'} required id={'email-input'} placeHolder={'Email:'} />
                    <InputComponent isErrored={false} errorText={''} type={'password'} required id={'password-input'} placeHolder={'Password:'} />
                    <button className={'submit-btn'}>SUBMIT</button>
                </form>
            </div>
        </HolderComponent>
    );
}