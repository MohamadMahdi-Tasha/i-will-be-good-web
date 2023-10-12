// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from 'react';
import Link from "next/link";
import HolderComponent from "@/chunk/holderComponent";

// Creating And Exporting SignUp Page As Default
export default function SignupPage():ReactNode {
    // Returning JSX
    return (
        <HolderComponent>
            <section>
                <main>
                    <form className={'mx-auto max-w-[500px] lg:p-[30px] p-[10px] rounded-[10px] bg-black'} action="#">
                        <div>
                            <h1 className={'text-[28px] mb-[10px] truncate text-center font-bold text-white'}>Login</h1>
                            <div className={'mb-[20px]'}>
                                <label className={'label mb-[10px]'} htmlFor="email-input">Email:</label>
                                <input required placeholder={'yours@gmail.com'} className={'input'} type="email" id={'email-input'} name={'email-input'} />
                            </div>
                            <div className={'mb-[20px]'}>
                                <label className={'label mb-[10px]'} htmlFor="name-input">Name:</label>
                                <input required placeholder={'Mahdi'} className={'input'} type="text" id={'name-input'} name={'name-input'} />
                            </div>
                            <div className={'mb-[30px]'}>
                                <label className={'label mb-[10px]'} htmlFor="email-input">Password:</label>
                                <input required placeholder={'XXXXXXXX'} min={8} max={12} className={'input'} type="password" id={'email-input'} name={'email-input'} />
                            </div>
                            <button className={'submit-btn'}>Submit</button>
                        </div>
                        <hr className={'my-[20px] border-white'}/>
                        <div>
                            <Link className={'text-center text-white truncate block text-[18px] font-light'} href={'/login'}>Got Account? <span className={'font-bold'}>Log In</span></Link>
                        </div>
                    </form>
                </main>
            </section>
        </HolderComponent>
    );
}