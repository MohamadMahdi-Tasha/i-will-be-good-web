// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import WeeklyReportOfTreatmentComponent from "@/component/weeklyReport/weeklyReportOfTreatmentComponent";

// Creating And Exporting Second Section oF Home Page As Default
export default function SecondSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <main>
                <h2 className={'title'}>Meditations:</h2>
                <div className={'flex items-center gap-[10px] mb-[15px]'}>
                    <input className={'checkbox dark'} type="checkbox" id={'sertraline-today-checkbox'}/>
                    <label className={'label dark'} htmlFor="sertraline-today-checkbox">Sertraline (the after lunch medication)</label>
                </div>
                <p className={'paragraph mb-[50px]'}>
                    Meditation is a practice in which an individual uses a technique – such as mindfulness, or focuses the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.
                    <br/>
                    <br/>
                    Meditation is practiced in numerous religious traditions. The earliest records of meditation (dhyana) are found in the Upanishads, and meditation plays a salient role in the contemplative repertoire of Hinduism, Jainism and Buddhism.Since the 19th century, Asian meditative techniques have spread to other cultures where they have also found application in non-spiritual contexts, such as business and health.
                </p>
                <WeeklyReportOfTreatmentComponent weekArray={[true,true,true,true,false,false,false]} treatment={'meditation'} link={'/meditation'} />
            </main>
        </section>
    );
}