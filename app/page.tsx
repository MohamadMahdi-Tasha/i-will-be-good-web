// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";

// Creating And Exporting Home Page As Default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <HolderComponent>
            <section>
                <main>
                    <h2 className={'title'}>Medications:</h2>
                    <div>
                        <div>
                            <h5>Today’s medication todo :</h5>
                            <div>
                                <input type="checkbox" id={'sertraline-today-checkbox'}/>
                                <label htmlFor="sertraline-today-checkbox">Sertraline (the after lunch medication)</label>
                            </div>
                            <div>
                                <input type="checkbox" id={'raspridone-today-checkbox'}/>
                                <label htmlFor="raspridone-today-checkbox">Rasperidone (the after dinner medication)</label>
                            </div>
                            <p>
                                Taking medications regularly is important for your health and well-being. Here are five lines that explain why:
                                Medications can help you manage chronic conditions.
                                Medications can relieve symptoms.
                                Medications can improve your quality of life, such as antidepressants for depression.
                                Medications can save your life, such as epinephrine for anaphylaxis.
                            </p>
                        </div>
                        <div>
                            <h5>Risperidone:</h5>
                            <p>used to treat schizophrenia and bipolar Common side effects include severe depression, movement problems, sleepiness, dizziness, trouble seeing, constipation, and increased weight.Study of risperidone began in the late 1980s and it was approved for sale in the United States in 1993.And its a antypsycotic.</p>
                        </div>
                        <div>
                            <h5>Sertraline:</h5>
                            <p>is an antidepressant of the selective serotonin reuptake inhibitor (SSRI) class.The efficacy of sertraline for depression is similar to that of other antidepressants, and the differences are mostly confined to side effects.</p>
                        </div>
                    </div>
                    <p>
                        Sertraline and risperidone are two medications that have been used to treat depersonalization/derealization disorder (DDD), a condition characterized by persistent or recurrent feelings of detachment or unreality regarding oneself and/or the environment. However, the evidence for their effectiveness is limited and inconsistent.
                        <br/>
                        For people with DDD, SSRIs (Sertraline) have been found to be effective at treating the depression that people often experience along with their depersonalization
                        <br/>
                        However, risperidone has not been shown to improve the core symptoms of depersonalization and derealization, and may have significant side effects, such as weight gain, diabetes, movement disorders, and increased prolactin levels2
                    </p>
                </main>
            </section>
        </HolderComponent>
    );
}
