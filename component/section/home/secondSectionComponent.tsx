// Codes By Mahdi Tasha
// Importing Part
import {ReactNode, useState, useEffect, Dispatch} from "react";
import WeeklyReportOfTreatmentComponent from "@/component/weeklyReport/weeklyReportOfTreatmentComponent";
import useFirebase from "@/hook/useFirebase";
import {FirebaseApp} from "firebase/app";
import {Database, DatabaseReference, onValue, set} from "firebase/database";
import {Auth, getAuth} from "firebase/auth";

// Creating And Exporting Second Section oF Home Page As Default
export default function SecondSectionComponent():ReactNode {
    // Defining States Of Component
    const [isMeditatinFetching, setMeditationFetching]:[boolean, Dispatch<boolean>] = useState(true);
    const [isMeditationChecked, setMeditationChecked]:[boolean, Dispatch<boolean>] = useState(false);

    // Defining Firebase
    const auth:Auth = getAuth();
    const [app, database, databaseRef]:[FirebaseApp, Database, DatabaseReference] = useFirebase(`${auth.currentUser?.uid}/${btoa(new Date().toLocaleDateString())}/meditation`); 

    // Fetching Data In Database
    useEffect(() => {
        onValue(databaseRef, (snapshot) => {
            const data = snapshot.val();

            (data) 
                ? setMeditationChecked(data) 
                : setMeditationChecked(false)

            setMeditationFetching(false);
        })
    }, [])

    // Returning JSX
    return (
        <section>
            <main>
                <h2 className={'title'}>Meditations:</h2>
                {
                    (isMeditatinFetching)
                        ? <div className="w-full h-[40px] loading mb-[15px]" />
                        : (
                            <div className={'flex items-center gap-[10px] mb-[15px]'}>
                                <input onChange={(event) => {
                                            setMeditationChecked(event.target.checked);
                                            set(databaseRef, event.target.checked)
                                        }} checked={isMeditationChecked} className={'checkbox dark'} type="checkbox" id={'sertraline-today-checkbox'}/>
                                <label className={'label dark'} htmlFor="sertraline-today-checkbox">Meditation</label>
                            </div>
                        )
                }
                <p className={'paragraph mb-[50px]'}>Meditation is a practice in which an individual uses a technique – such as mindfulness, or focuses the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.</p>
                <WeeklyReportOfTreatmentComponent weekArray={[true,true,true,true,false,false,false]} treatment={'meditation'} link={'/meditation'} />
            </main>
        </section>
    );
}