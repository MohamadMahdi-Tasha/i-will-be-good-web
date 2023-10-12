// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import WeeklyReportOfTreatmentComponent from "@/component/weeklyReport/weeklyReportOfTreatmentComponent";

// Creating And Exporting First Section Of Home Page As Default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <main>
                <div className={'mb-[50px]'}>
                    <h2 className={'title'}>Medications:</h2>
                    <div className={'grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grid-rows-2 sm:gap-[20px] gap-[10px] mb-[30px]'}>
                        <div className={'bg-black py-[30px] sm:col-span-2 sm:row-span-2 px-[20px] rounded-[20px]'}>
                            <h5 className={'inner-title mb-[20px]'}>Today’s medication todo :</h5>
                            <div className={'flex items-center gap-[10px] mb-[15px]'}>
                                <input className={'checkbox'} type="checkbox" id={'sertraline-today-checkbox'}/>
                                <label className={'label'} htmlFor="sertraline-today-checkbox">Sertraline (the after lunch medication)</label>
                            </div>
                            <div className={'flex items-center gap-[10px] mb-[30px]'}>
                                <input className={'checkbox'} type="checkbox" id={'raspridone-today-checkbox'}/>
                                <label className={'label'} htmlFor="raspridone-today-checkbox">Rasperidone (the after dinner medication)</label>
                            </div>
                            <p className={'inner-paragraph'}>
                                Taking medications regularly is important for your health and well-being. Here are five lines that explain why:
                                Medications can help you manage chronic conditions.
                                Medications can relieve symptoms.
                                Medications can improve your quality of life, such as antidepressants for depression.
                                Medications can save your life, such as epinephrine for anaphylaxis.
                            </p>
                        </div>
                        <div className={'bg-black py-[30px] lg:col-span-2 px-[20px] rounded-[20px]'}>
                            <h5 className={'inner-title mb-[15px]'}>Risperidone:</h5>
                            <p className={'inner-paragraph'}>used to treat schizophrenia and bipolar Common side effects include severe depression, movement problems, sleepiness, dizziness, trouble seeing, constipation, and increased weight.Study of risperidone began in the late 1980s and it was approved for sale in the United States in 1993.And its a antypsycotic.</p>
                        </div>
                        <div className={'bg-black py-[30px] lg:col-span-2 px-[20px] rounded-[20px]'}>
                            <h5 className={'inner-title mb-[15px]'}>Sertraline:</h5>
                            <p className={'inner-paragraph'}>is an antidepressant of the selective serotonin reuptake inhibitor (SSRI) class.The efficacy of sertraline for depression is similar to that of other antidepressants, and the differences are mostly confined to side effects.</p>
                        </div>
                    </div>
                    <p className={'paragraph'}>
                        Sertraline and risperidone are two medications that have been used to treat depersonalization/derealization disorder (DDD), a condition characterized by persistent or recurrent feelings of detachment or unreality regarding oneself and/or the environment. However, the evidence for their effectiveness is limited and inconsistent.
                        <br/>
                        <br/>
                        For people with DDD, SSRIs (Sertraline) have been found to be effective at treating the depression that people often experience along with their depersonalization
                        <br/>
                        <br/>
                        However, risperidone has not been shown to improve the core symptoms of depersonalization and derealization, and may have significant side effects, such as weight gain, diabetes, movement disorders, and increased prolactin levels2
                    </p>
                </div>
                <div>
                    <WeeklyReportOfTreatmentComponent weekArray={[true,true,true,true,false,false,false]} treatment={'sertraline'} link={'/medication/sertraline'} className={'mb-[50px]'} />
                    <WeeklyReportOfTreatmentComponent weekArray={[true,true,true,true,false,false,false]} treatment={'risperidone'} link={'/medication/risperidone'} />
                </div>
            </main>
        </section>
    );
}