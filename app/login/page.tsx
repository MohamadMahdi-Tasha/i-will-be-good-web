// Codes By Mahdi Tasha
// Forcing NextJs To Render This Component As Client Side Component
'use client';

// Importing Part
import {Dispatch, MutableRefObject, ReactNode, useEffect, useRef, useState} from "react";
import HolderComponent from "@/chunk/holderComponent";
import InputComponent from "@/chunk/inputComponent";
import useFirebase from "@/hook/useFirebase";
import {Auth, signInWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth';
import {FirebaseApp} from "firebase/app";
import {Database, DatabaseReference} from "firebase/database";
import Link from "next/link";

// Creating And Exporting Login Page As Default
export default function LoginPage():ReactNode {
    // Defining States Of Component
    const [isLoading, setLoading]:[boolean, Dispatch<boolean>] = useState(true);
    const [isUserLoggedIn, setUserLoggedIn]:[boolean, Dispatch<boolean>] = useState(false);

    // Defining References To Inputs
    const emailInputRef:MutableRefObject<any> = useRef();
    const passwordInputRef:MutableRefObject<any> = useRef();

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

                                    const emailValue:string = emailInputRef.current.value;
                                    const passwordValue:string = passwordInputRef.current.value;
                                }} className={'w-full bg-black p-[30px] rounded-[20px] flex flex-col gap-[30px]'} action="#">
                                    <h1 className={'text-[30px] font-bold text-center text-white'}>Login:</h1>
                                    <InputComponent refProp={emailInputRef} isErrored={false} errorText={''} type={'email'} required id={'email-input'} placeHolder={'Email:'} />
                                    <InputComponent refProp={passwordInputRef} isErrored={false} errorText={''} type={'password'} required id={'password-input'} placeHolder={'Password:'} />
                                    <button className={'submit-btn'}>SUBMIT</button>
                                </form>
                            </div>
                        )
            }
        </HolderComponent>
    );
}