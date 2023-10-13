// Codes By Mahdi Tasha
// Forcing NextJS To Render This Hook As Client Side Hook
'use client';

// Importing Part
import {useEffect, ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import useFirebase from "@/hook/useFirebase";
import { getAuth, GoogleAuthProvider, signInWithRedirect  } from "firebase/auth";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {FirebaseApp} from "firebase/app";
import {Database, DatabaseReference} from "@firebase/database";

// Creating And Exporting Login Page As Default
export default function LoginPage():ReactNode {
    // Defining Firebase
    const [app, Database, databaseRef]:[FirebaseApp, Database, DatabaseReference] = useFirebase('/');

    // Defining useRouter Hook To UseLater
    const router:AppRouterInstance  = useRouter();

    // Using useEffect Hook To Log User
    useEffect(() => {
        const auth = getAuth();

        auth.onAuthStateChanged((user) => {
            if (user) {
                router.push('/');
            } else {
                const provider:GoogleAuthProvider = new GoogleAuthProvider();
                signInWithRedirect(auth, provider)
            }
        });
    }, [])

    // Returning JSX
    return (
        <HolderComponent className={'min-h-[100vh]'}>
            <h1 className={'title text-center'}>Please Wait ....</h1>
        </HolderComponent>
    );
}