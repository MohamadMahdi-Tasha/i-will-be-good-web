// Codes By Mahdi Tasha
// Forcing NextJS To Render This Hook As Client Side Hook
'use client';

// Importing Part
import {Dispatch, ReactNode, useState, useEffect} from "react";
import HolderComponent from "@/chunk/holderComponent";
import Link from "next/link";
import useFirebase from "@/hook/useFirebase";
import {getAuth} from "firebase/auth";

// Creating And Exporting Header Component As Default
export default function HeaderComponent():ReactNode {
    // Defining States Of Component
    const [isUserLoggedIn, setUserLoggedIn]:[boolean, Dispatch<boolean>] = useState(false);
    const [userImageUrl, setUserImageUrl]:[string, Dispatch<string>] = useState('');
    const [isUserFetching, setUserFetching]:[boolean, Dispatch<boolean>] = useState(true);

    // Defining Firebase
    const [app, Database, databaseRef] = useFirebase('/');

    // Using useEffect Hook To Log User
    useEffect(() => {
        const auth = getAuth();

        auth.onAuthStateChanged((user:any) => {
            if (user) {
                setUserLoggedIn(true);
                setUserImageUrl(user.photoURL);
                setUserFetching(false);
            } else {
                setUserLoggedIn(false);
                setUserImageUrl('');
                setUserFetching(false);
            }
        });
    }, [])

    // Returning JSX
    return (
        <header className={'bg-black/20 backdrop-blur fixed top-0 left-0 w-full'}>
            <HolderComponent className={'flex justify-between flex-wrap items-center gap-[20px]'}>
                <Link href={'/'} className={'font-normal tracking-[7px] lg:text-[26px] text-[20px]'}>I WILL BE GOOD</Link>
                {
                    (isUserFetching)
                        ? <div className={'w-[50px] h-[50px] aspect-square loading rounded-full'} />
                        : (isUserLoggedIn)
                            ? <img src={userImageUrl} className={'w-[50px] h-[50px] aspect-square object-cover rounded-full'} alt="Profile Image Of You"/>
                            : <Link href={'/login'} className={'px-[30px] py-[10px] bg-transparent border border-black text-[15px] font-normal text-black rounded-[10px]'}>Log In</Link>
                }
            </HolderComponent>
        </header>
    );
}