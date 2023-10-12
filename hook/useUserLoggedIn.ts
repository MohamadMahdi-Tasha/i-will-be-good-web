// Codes By Mahdi Tasha
// Forcing NextJs To Render This As Client Side
'use client';

// Importing Part
import {useState, useEffect, Dispatch} from "react";
import {createClient, SupabaseClient} from "@supabase/supabase-js";

// Creating And Exporting The Hook
export default function useUserLoggedIn():[boolean,boolean] {
    // Defining States
    const [isUserLoggedInFetching, setUserLoggedInFetching]:[boolean, Dispatch<boolean>] = useState(true);
    const [isUserLoggedIn, setUserLoggedIn]:[boolean, Dispatch<boolean>] = useState(false);

    // Defining Supabase
    const supabaseUrl:string = 'https://yksflugprafkjwrfrxql.supabase.co'
    const supabaseKey:string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlrc2ZsdWdwcmFma2p3cmZyeHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxMDcwODYsImV4cCI6MjAxMjY4MzA4Nn0.FuWcd_pDkypFq6zR5_uAPsMKZ3c42sIEwqcJAsjStFo';
    const supabase:SupabaseClient = createClient(supabaseUrl, supabaseKey)

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

    // Returning States
    return [isUserLoggedInFetching, isUserLoggedIn];
}