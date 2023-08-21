// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Component
'use client';

// Importing Part
import {useEffect, useState} from "react";
import Link from 'next/link';
import CheckboxComponent from "@/chunks/checkboxComponent";
import WeekDaysComponent from "@/components/weekDaysComponent";

// Creating Home First Section Component And Exporting It As Default
export default function HomeFirstSectionComponent():JSX.Element {
    // Defining States Of Component
    const [isSertralineDone, setSertralineDone] = useState(false);
    const [isRasperidoneDone, setRasperidoneDone] = useState(false);

    useEffect(() => {
        // Variables
        const today = new Date().toLocaleDateString();
        const doneTreatmentsInLocalStorage = localStorage.getItem('doneTreatments');

        // A Condition To Know If Done Things Exists In Local Storage
        if (doneTreatmentsInLocalStorage !== null) {
            // Variables
            const objectOfDoneTreatments = JSON.parse(doneTreatmentsInLocalStorage);
            const sertralineOfDoneTreatments = objectOfDoneTreatments.sertraline.find((item:any) => item.date === today);
            const raspridoneOfDoneTreatments = objectOfDoneTreatments.rasprindone.find((item:any) => item.date === today);

            (sertralineOfDoneTreatments) ? setSertralineDone(sertralineOfDoneTreatments.done) : setSertralineDone(false);
            (raspridoneOfDoneTreatments) ? setRasperidoneDone(raspridoneOfDoneTreatments.done) : setRasperidoneDone(false);
        } else {
            alert('asd')
        }
    })

    // Return JSX
    return (
        <section>
            <header>
                <h1 className={'big-title truncate'}>Medications:</h1>
            </header>
            <main>
                <div className={'grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-1 lg:gap-[20px] gap-[10px] mb-[32px]'}>
                    <div className={'black-container row-span-2'}>
                        <h3 className={'small-title truncate'}>Today’s medication todo :</h3>
                        <div className={'mb-[30px]'}>
                            <div className={'flex items-center mb-[15px]'}>
                                <CheckboxComponent isChecked={isSertralineDone} isDark={false} isLarge={false} treatment={'sertraline'} />
                                <span className={'text-white truncate font-light text-[12px] ml-[10px]'}>Sertraline (the after lunch medication)</span>
                            </div>
                            <div className={'flex items-center'}>
                                <CheckboxComponent isChecked={isRasperidoneDone} isDark={false} isLarge={false} treatment={'raspridone'} />
                                <span className={'text-white truncate font-light text-[12px] ml-[10px]'}>Rasperidone (the after dinner medication)</span>
                            </div>
                        </div>
                        <p className={'small-paragraph lg:line-clamp-6'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    </div>
                    <div className={'black-container'}>
                        <span className={'small-title truncate block'}>Risperidone:</span>
                        <p className={'small-paragraph lg:line-clamp-5'}>used to treat schizophrenia and bipolar disorder.Common side effects include severe depression, movement problems, sleepiness, dizziness, trouble seeing, constipation, and increased weight.Study of risperidone began in the late 1980s and it was approved for sale in the United States in 1993.And its a antypsycotic.</p>
                    </div>
                    <div className={'black-container'}>
                        <span className={'small-title truncate block'}>Sertraline:</span>
                        <p className={'small-paragraph lg:line-clamp-5'}>is an antidepressant of the selective serotonin reuptake inhibitor (SSRI) class.The efficacy of sertraline for depression is similar to that of other antidepressants, and the differences are mostly confined to side effects.</p>
                    </div>
                </div>
                <div className={'mb-[20px]'}>
                    <h3 className={'medium-title'}>Medications taken this week:</h3>
                    <WeekDaysComponent datesArray={[false,false,false,true,false,false,false]} />
                </div>
            </main>
            <footer>
                <Link className={'block'} href="/monthly/medications">
                    <button tabIndex={-1} className={'border w-full truncate border-black rounded-[10px] p-[10px] text-center '}>Click here to see monthly</button>
                </Link>
            </footer>
        </section>
    );
}