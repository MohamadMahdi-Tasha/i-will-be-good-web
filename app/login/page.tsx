// Codes By Mahdi Tasha
// Forcing NextJS To Render This Hook As Client Side Hook
'use client';

// Importing Part
import {useEffect, ReactNode} from "react";
import useFirebase from "@/hook/useFirebase";
import {getAuth, GoogleAuthProvider, signInWithRedirect, Auth} from "firebase/auth";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {FirebaseApp} from "firebase/app";
import {DatabaseReference, Database} from "firebase/database";

// Creating And Exporting Login Page As Default
export default function LoginPage():ReactNode {
    // Defining Firebase
    const [app, Database, databaseRef]:[FirebaseApp, Database, DatabaseReference] = useFirebase('/');

    // Defining useRouter Hook To UseLater
    const router:AppRouterInstance  = useRouter();

    // Using useEffect Hook To Log User
    useEffect(() => {
        const auth:Auth = getAuth();
        auth.onAuthStateChanged((user) => {
            if (user) {
                router.push('/');
            } else {
                const provider:GoogleAuthProvider = new GoogleAuthProvider();
                signInWithRedirect(auth, provider).catch((data) => alert(data))
            }
        });
    }, [])

    // Returning JSX
    return (
        <div className={'fixed bg-white top-0 left-0 w-full h-full z-[100] p-[20px] flex justify-center items-center'}>
            <h1 className={'title text-black'}>Please Wait ....</h1>
        </div>
    );
}
