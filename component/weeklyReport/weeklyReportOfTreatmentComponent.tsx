// Codes By Mahdi Tasha
// Forcing Next Js To Render This Component As Client Side Component
'use client';

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
                addOneDayToDate(new Date(today.setDate(today.getDate() - today.getDay())), 0),
                addOneDayToDate(new Date(today.setDate(today.getDate() - today.getDay())), 1),
                addOneDayToDate(new Date(today.setDate(today.getDate() - today.getDay())), 2),
                addOneDayToDate(new Date(today.setDate(today.getDate() - today.getDay())), 3),
                addOneDayToDate(new Date(today.setDate(today.getDate() - today.getDay())), 4),
                addOneDayToDate(new Date(today.setDate(today.getDate() - today.getDay())), 5),
                addOneDayToDate(new Date(today.setDate(today.getDate() - today.getDay())), 6)
            ];

            arrayOfThisWeek.forEach((item:string) => {
                const findedItem:{
                    meditation: boolean,
                    medication: {
                        sertraline: boolean,
                        risperidone: boolean
                    }
                } = data[item];

                if (findedItem) {
                    if (treatment === 'sertraline') {
                        arrayToSet.push((findedItem.medication.sertraline));
                    } else if (treatment === 'risperidone') {
                        arrayToSet.push((findedItem.medication.risperidone));
                    } else if (treatment === 'meditation') {
                        arrayToSet.push((findedItem.meditation));
                    }
                }
            })

            if (arrayToSet.length > 7) {
                arrayToSet.slice(0,6);
            } else {
                [...Array(7 - arrayToSet.length)].forEach(() => arrayToSet.push(false));
            }

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