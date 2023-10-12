// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from 'react';
import HolderComponent from "@/chunk/holderComponent";
import Link from 'next/link';

// Creating And Exporting Login Page As Default
export default function LoginPage():ReactNode {
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
                            <div className={'mb-[30px]'}>
                                <label className={'label mb-[10px]'} htmlFor="password-input">Password:</label>
                                <input required placeholder={'XXXXXXXX'} min={8} max={12} className={'input'} type="password" id={'password-input'} name={'password-input'} />
                            </div>
                            <button className={'submit-btn'}>Submit</button>
                        </div>
                        <hr className={'my-[20px] border-white'}/>
                        <div>
                            <Link className={'text-center text-white truncate block text-[18px] font-light'} href={'/signup'}>Got No Account? <span className={'font-bold'}>Create One</span></Link>
                        </div>
                    </form>
                </main>
            </section>
        </HolderComponent>
    );
}