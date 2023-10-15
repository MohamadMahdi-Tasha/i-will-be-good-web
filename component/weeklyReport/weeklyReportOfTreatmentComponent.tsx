// Codes By Mahdi Tasha
// Importing Part
import {ReactNode, useEffect, useState} from 'react';
import WeeklyReportComponent from "@/component/weeklyReport/weeklyReportComponent";
import Link from "next/link";
import useFirebase from '@/hook/useFirebase';
import {FirebaseApp} from 'firebase/app';
import {Database, DatabaseReference, onValue} from 'firebase/database';
import {getAuth, Auth} from 'firebase/auth';

// Defining Type OF Props
interface propsType {
    treatment: 'risperidone' | 'sertraline' | 'meditation';
    link: string;
    className?: string;
}

// Crating And Exporting Weekly Report Of Treatment Component As Default
export default function WeeklyReportOfTreatmentComponent({treatment, link, className}:propsType):ReactNode {
    // Defining States Of Component
    const [weekArray, setWeekArray]:any = useState([false, false, false, false, false, false, false]);


    // Defining Firebase
    const auth:Auth = getAuth()
    const [app, database, databaseRef]:[FirebaseApp, Database, DatabaseReference] = useFirebase(`${auth.currentUser?.uid}`);

    // A Function To Add Number To Days
    function addOneDayToDate(date:Date, count:number):string {
        date.setDate(date.getDate() + count);
        
        return btoa(date.toLocaleDateString());
    }

    // Getting Values From Database
    useEffect(() => {
        onValue(databaseRef, (snapshot) => {
            const data = snapshot.val();
            const today:Date = new Date();
            let arrayToSet:Array<boolean> = [];
            const arrayOfThisWeek:Array<string> = [
                btoa(new Date(today.setDate(today.getDate() - today.getDay())).toLocaleDateString()),
                addOneDayToDate(new Date(today.setDate(today.getDate() - today.getDay())), 1),
                addOneDayToDate(new Date(today.setDate(today.getDate() - today.getDay())), 2),
                addOneDayToDate(new Date(today.setDate(today.getDate() - today.getDay())), 3),
                addOneDayToDate(new Date(today.setDate(today.getDate() - today.getDay())), 4),
                addOneDayToDate(new Date(today.setDate(today.getDate() - today.getDay())), 5),
                addOneDayToDate(new Date(today.setDate(today.getDate() - today.getDay())), 6)
            ];
            
            arrayOfThisWeek.forEach(item => {
                const findedItem = data[item];

                if (findedItem) {
                    if (treatment === 'sertraline') {
                        arrayToSet.push((findedItem.medication.sertraline === true) ? true : false);
                        if (arrayToSet.length < 7) {
                            const remainedCount = 7 - arrayToSet.length;
                            [...Array(remainedCount)].forEach(item => arrayToSet.push(false))
                        }
                    } else if (treatment === 'risperidone') {
                        arrayToSet.push((findedItem.medication.risperidone === true) ? true : false);
                        if (arrayToSet.length < 7) {
                            const remainedCount = 7 - arrayToSet.length;
                            [...Array(remainedCount)].forEach(item => arrayToSet.push(false))
                        }
                    } else if (treatment === 'meditation') {
                        arrayToSet.push((findedItem.meditation === true) ? true : false);
                        if (arrayToSet.length < 7) {
                            const remainedCount = 7 - arrayToSet.length;
                            [...Array(remainedCount)].forEach(item => arrayToSet.push(false))
                        }
                    }
                }
            })

            setWeekArray(arrayToSet);
        });
    }, [])
    
    // Returning JSX
    return (
        <div className={(className !== null) ? className : ''}>
            <h5 className={'subtitle'}>Monthly treatment report of {treatment}:</h5>
            <WeeklyReportComponent weekArray={weekArray} />
            <Link className={'rounded-[10px] p-[10px] border border-black w-full text-center truncate text-[18px] text-red-black font-normal block mt-[15px]'} href={link}>
                See monthly report of {treatment}.
            </Link>
        </div>
    );
}