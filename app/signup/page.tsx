// Codes By Mahdi Tasha
// Forcing NextJs To Render This Component As Client Side Component
'use client';

// Importing Part
import {Dispatch, MutableRefObject, ReactNode, useEffect, useRef, useState} from "react";
import HolderComponent from "@/chunk/holderComponent";
import InputComponent from "@/chunk/inputComponent";
import useFirebase from "@/hook/useFirebase";
import {Auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth';
import {FirebaseApp} from "firebase/app";
import {Database, DatabaseReference, set} from "firebase/database";
import Link from "next/link";
import {useRouter} from "next/navigation";

// Creating And Exporting SignUp Page As Default
export default function SignUpPage():ReactNode {
    // Defining States Of Component
    const [isLoading, setLoading]:[boolean, Dispatch<boolean>] = useState(true);
    const [isUserLoggedIn, setUserLoggedIn]:[boolean, Dispatch<boolean>] = useState(false);
    const [isEmailErrored, setEmailErrored]:[boolean, Dispatch<boolean>] = useState(false);
    const [isPasswordErrored, setPasswordErrored]:[boolean, Dispatch<boolean>] = useState(false);
    const [isPasswordRepeatErrored, setPasswordRepeatErrored]:[boolean, Dispatch<boolean>] = useState(false);
    const [emailErrorText, setEmailErrorText]:[string, Dispatch<string>] = useState('');
    const [passwordErrorText, setPasswordErrorText]:[string, Dispatch<string>] = useState('');
    const [passwordRepeatErrorText, setPasswordRepeatErrorText]:[string, Dispatch<string>] = useState('');
    const [isFetching, setFetching]:[boolean, Dispatch<boolean>] = useState(false);

    // Defining Router
    const router = useRouter();

    // Defining References To Inputs
    const emailInputRef:MutableRefObject<any> = useRef();
    const passwordInputRef:MutableRefObject<any> = useRef();
    const passwordRepeatInputRef:MutableRefObject<any> = useRef();

    // Defining Firebase
    const [app, database, databaseRef]:[FirebaseApp, Database, DatabaseReference] = useFirebase('/');

    // Using useEffect Hook To Find Out If User Is Logged In
    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            setLoading(false);

            (user)
                ? setUserLoggedIn(true)
                : setUserLoggedIn(false)
        })
    }, [])

    // Returning JSX
    return (
        <HolderComponent className={'mt-[20px]'}>
            {
                (isLoading)
                    ? (
                        <section>
                            <main>
                                <div className={'loading rounded-[10px] loading h-[500px] w-full'}/>
                            </main>
                        </section>
                    ) : (isUserLoggedIn)
                        ? (
                            <section className={'min-h-[100vh]'}>
                                <main>
                                    <h1 className={'title mb-[20px] text-center'}>Your logged in already.</h1>
                                    <div className={'flex justify-center items-center'}><Link href={'/'} className={'px-[30px] py-[10px] lg:w-auto w-full rounded-[10px] truncate lg:inline-block block text-center border border-black text-black text-[15px] font-normal'}>Home Page</Link></div>
                                </main>
                            </section>
                        ) : (
                            <div className={'min-h-[100vh] max-w-[800px] mx-auto flex justify-center items-center'}>
                                <form onSubmit={(event) => {
                                    event.preventDefault();

                                    const auth:Auth = getAuth();
                                    const emailValue:string = emailInputRef.current.value;
                                    const passwordValue:string = passwordInputRef.current.value;
                                    const passwordRepeatValue:string = passwordRepeatInputRef.current.value;

                                    if (passwordRepeatValue !== passwordValue) {
                                        setPasswordErrored(true);
                                        setPasswordRepeatErrored(true);

                                        setPasswordErrorText('There password and password-repeat input should be equal.');
                                        setPasswordRepeatErrorText('There password and password-repeat input should be equal.');
                                    } else {
                                        setFetching(true);

                                        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
                                            .then(() => {
                                                setEmailErrored(false);
                                                setPasswordErrored(false);

                                                setEmailErrorText('');
                                                setPasswordErrorText('');

                                                setFetching(false);
                                                router.push('/');
                                            })
                                            .catch(() => {
                                                setEmailErrored(true);
                                                setPasswordErrored(true);
                                                setPasswordRepeatErrored(true);

                                                setEmailErrorText('There was an error.');
                                                setPasswordErrorText('There was an error.');
                                                setPasswordRepeatErrorText('There was an error.');
                                            });
                                    }
                                }} className={'w-full bg-black p-[30px] rounded-[20px] flex flex-col gap-[30px]'} action="#">
                                    <h1 className={'text-[30px] font-bold text-center text-white'}>Sign Up:</h1>
                                    <InputComponent refProp={emailInputRef} isErrored={isEmailErrored} errorText={emailErrorText} type={'email'} required id={'email-input'} placeHolder={'Email:'} />
                                    <InputComponent refProp={passwordInputRef} isErrored={isPasswordErrored} errorText={passwordErrorText} type={'password'} required id={'password-input'} placeHolder={'Password:'} />
                                    <InputComponent refProp={passwordRepeatInputRef} isErrored={isPasswordRepeatErrored} errorText={passwordRepeatErrorText} type={'password'} required id={'password-repeat-input'} placeHolder={'Password Repeat:'} />
                                    <button data-fetching={isFetching} tabIndex={(isFetching) ? -1 : 0} className={'submit-btn mb-[20px] data-[fetching="true"]:pointer-events-none data-[fetching="true"]:opacity-50'}>
                                        {
                                            (isFetching)
                                                ? (
                                                    <svg aria-hidden="true" className="w-8 h-8 mx-auto text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                    </svg>
                                                ) : <span>SUBMIT</span>
                                        }
                                    </button>
                                    <Link className={'text-center text-[18px] font-normal text-white underline underline-offset-8'} href={'/login'}>Got Account? Log in</Link>
                                </form>
                            </div>
                        )
            }
        </HolderComponent>
    );
}