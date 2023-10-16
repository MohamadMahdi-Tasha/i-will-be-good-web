// Codes By Mahdi Tasha
// Forcing NextJS To Render This Hook As Client Side Hook
'use client';

// Importing Part
import {Dispatch, ReactNode, useEffect, useState} from "react";
import HolderComponent from "@/chunk/holderComponent";
import FirstSectionComponent from "@/component/section/home/firstSectionComponent";
import SecondSectionComponent from "@/component/section/home/secondSectionComponent";
import ThirdSectionComponent from "@/component/section/home/thirdSectionComponent";
import {Auth, getAuth} from "firebase/auth";
import useFirebase from "@/hook/useFirebase";
import Link from "next/link";
import {FirebaseApp} from "firebase/app";
import {DatabaseReference, Database} from "firebase/database";

// Creating And Exporting Home Page As Default
export default function HomePage():ReactNode {
    // Defining States Of Component
    const [isUserLoggedIn, setUserLoggedIn]:[boolean, Dispatch<boolean>] = useState(false);
    const [isUserFetching, setUserFetching]:[boolean, Dispatch<boolean>] = useState(true);

    // Defining Firebase
    const [app, Database, databaseRef]:[FirebaseApp, Database, DatabaseReference] = useFirebase('/');

    // Using useEffect Hook To Log User
    useEffect(() => {
        const auth:Auth = getAuth();

        auth.onAuthStateChanged((user:any) => {
            if (user) {
                setUserLoggedIn(true);
                setUserFetching(false);
            } else {
                setUserLoggedIn(false);
                setUserFetching(false);
            }
        });
    }, [])

    // Returning JSX
    return (
        <HolderComponent>
            {
                (isUserFetching)
                    ? (
                        <>
                            <section className={'mt-[20px]'}><main><div className={'loading rounded-[10px] loading h-[500px] w-full'} /></main></section>
                            <hr className={'section-divider'} />
                            <section><main><div className={'loading rounded-[10px] loading h-[500px] w-full'} /></main></section>
                            <hr className={'section-divider'} />
                            <section><main><div className={'loading rounded-[10px] loading h-[500px] w-full'} /></main></section>
                        </>
                    )
                    : (isUserLoggedIn)
                        ? (
                            <>
                                <FirstSectionComponent />
                                <hr className={'section-divider'} />
                                <SecondSectionComponent />
                                <hr className={'section-divider'} />
                                <ThirdSectionComponent />
                            </>
                        ) : (
                            <section className={'min-h-[100vh]'}>
                                <main>
                                    <h1 className={'title mb-[20px] text-center'}>Please Sign In Before Using The App</h1>
                                    <div className={'flex justify-center items-center'}>
                                        <Link href={'/login'} className={'px-[30px] py-[10px] lg:w-auto w-full rounded-[10px] truncate lg:inline-block block text-center border border-black text-black text-[15px] font-normal'}>Log In</Link>
                                    </div>
                                </main>
                            </section>
                        )
            }
        </HolderComponent>
    );
}
