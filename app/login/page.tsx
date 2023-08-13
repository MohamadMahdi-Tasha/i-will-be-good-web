// Codes By Mahdi Tasha
// Importing Part
import HolderComponent from "@/chunks/holderComponent";
import InputComponent from '@/chunks/inputComponent';

// Creating Login Page And Exporting It As Default
export default function LoginPage():JSX.Element {
    // Returning JSX
    return (
        <HolderComponent className={'py-[50px]'}>
            <form className={'lg:max-w-[500px] mx-auto lg:p-[20px] rounded-[20px]'} action="#">
                <h1 className={'font-bold text-center text-[32px] mb-[20px]'}>Login</h1>
                <div className={'flex flex-col gap-[20px]'}>
                    <InputComponent type={'email'} id={'email'} label={'Email:'} required={true} />
                    <InputComponent type={'password'} id={'password'} label={'Password:'} required={true} />
                    <button className={'w-full py-[15px] rounded-[10px] bg-black text-white truncate'}>Submit</button>
                </div>
            </form>
        </HolderComponent>
    );
}