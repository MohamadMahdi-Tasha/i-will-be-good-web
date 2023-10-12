// Codes By Mahdi Tasha
// Forcing NextJs To Render This Component As Client Side Component
'use client';

// Importing Part
import {ChangeEvent, Dispatch, ReactNode, useEffect, useState} from 'react';
import HolderComponent from "@/chunk/holderComponent";
import Link from 'next/link';
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {useRouter} from "next/navigation";

// Defining Supabase
const supabaseUrl:string = 'https://yksflugprafkjwrfrxql.supabase.co'
const supabaseKey:string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlrc2ZsdWdwcmFma2p3cmZyeHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxMDcwODYsImV4cCI6MjAxMjY4MzA4Nn0.FuWcd_pDkypFq6zR5_uAPsMKZ3c42sIEwqcJAsjStFo';
const supabase:SupabaseClient = createClient(supabaseUrl, supabaseKey)

// Creating And Exporting Login Page As Default
export default function LoginPage():ReactNode {
    // Defining States Of Component
    const [emailValue, setEmailValue]:[string, Dispatch<string>] = useState('');
    const [passwordValue, setPasswordValue]:[string, Dispatch<string>] = useState('');
    const [isErrored, setErrored]:[boolean, Dispatch<boolean>] = useState(false);
    const [isFetching, setFetching]:[boolean, Dispatch<boolean>] = useState(false);
    const [isUserLoggedInFetching, setUserLoggedInFetching]:[boolean, Dispatch<boolean>] = useState(true);
    const [isUserLoggedIn, setUserLoggedIn]:[boolean, Dispatch<boolean>] = useState(false);

    // Defining Use Router Hook
    const router = useRouter();

    // Handling Form Submit
    async function handleFormSubmit(event:any):Promise<void> {
        event.preventDefault();

        setFetching(true);

        const { data, error } = await supabase.auth.signInWithPassword({
            email: emailValue,
            password: passwordValue,
        })

        if (error) {
            setErrored(true);
            setFetching(false);
        } else {
            setFetching(false);
            setErrored(false);
            router.push('/')
        }
    }

    // Checking If User Is Logged In
    useEffect(() => {
        (async function isUseSignedIn():Promise<void> {
            setUserLoggedInFetching(true);
            const { data: { user } }:any = await supabase.auth.getUser();

            if (user.aud === undefined) {
                setUserLoggedIn(false);
                setUserLoggedInFetching(false);
            } else {
                setUserLoggedIn(true);
                setUserLoggedInFetching(false);
            }
        })();
    }, [])

    // Returning JSX
    return (
        <HolderComponent>
            <section>
                <main>
                    {
                        (isUserLoggedInFetching)
                            ? <div className={'mx-auto max-w-[500px] h-[500px] loading'} />
                            : (isUserLoggedIn)
                                ? (
                                    <div className={'min-h-[100vh]'}>
                                        <div className={'mx-auto max-w-[500px] lg:p-[30px] p-[10px] rounded-[10px] bg-black'}>
                                            <h1 className={'text-[28px] mb-[10px] truncate text-center font-bold text-white'}>You Are Logged In</h1>
                                        </div>
                                    </div>
                                ) : (
                                    <form className={'mx-auto max-w-[500px] lg:p-[30px] p-[10px] rounded-[10px] bg-black'} action="#" onSubmit={handleFormSubmit}>
                                        <div>
                                            <h1 className={'text-[28px] mb-[10px] truncate text-center font-bold text-white'}>Login</h1>
                                            <div className={'mb-[20px]'}>
                                                <label className={'label mb-[10px]'} htmlFor="email-input">Email:</label>
                                                <input onChange={(event:ChangeEvent<HTMLInputElement>) => setEmailValue(event.target.value)} required placeholder={'yours@gmail.com'} className={'input'} type="email" id={'email-input'} name={'email-input'} />
                                            </div>
                                            <div className={'mb-[30px]'}>
                                                <label className={'label mb-[10px]'} htmlFor="password-input">Password:</label>
                                                <input onChange={(event:ChangeEvent<HTMLInputElement>) => setPasswordValue(event.target.value)} required placeholder={'XXXXXXXX'} min={8} max={12} className={'input'} type="password" id={'password-input'} name={'password-input'} />
                                            </div>
                                            <button className={'submit-btn overflow-hidden h-[50px]'}>
                                                <div data-fetching={isFetching} className={'data-[fetching="false"]:translate-y-[-50px] transition-all duration-500'}>
                                                    <div className={'h-[50px]'}>
                                                        <svg aria-hidden="true" className="w-8 h-8 text-black animate-spin fill-purple-500 mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                        </svg>
                                                    </div>
                                                    <div className={'h-[50px]'}>SUBMIT</div>
                                                </div>
                                            </button>
                                            {
                                                (isErrored)
                                                    ? (
                                                        <div className={'p-[10px] rounded-[10px] bg-red-200 mt-[30px]'}>
                                                            <p className={'text-red-800 text-[16px] font-normal'}>There Was Error Fetching The Data.</p>
                                                        </div>
                                                    ) : false
                                            }
                                        </div>
                                        <hr className={'my-[20px] border-white'}/>
                                        <div>
                                            <Link className={'text-center text-white truncate block text-[18px] font-light'} href={'/signup'}>
                                                Got No Account?
                                                <span className={'font-bold'}>
                                    Create One
                                </span>
                                            </Link>
                                        </div>
                                    </form>
                                )
                    }
                </main>
            </section>
        </HolderComponent>
    );
}