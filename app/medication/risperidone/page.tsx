// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import HolderComponent from "@/chunk/holderComponent";
import ThirdSectionComponent from "@/component/section/home/thirdSectionComponent";
import CalenderComponent from "@/component/calender/calenderComponent";

// Creating And Exporting Rispridone Page As Default
export default function RispridonePage():ReactNode {
    // Returning JSX
    return (
        <HolderComponent>
            <section>
                <main>
                    <h2 className={'title'}>Monthly report of rispridone:</h2>
                    <div className={'grid sm:grid-cols-2 sm:gap-[20px] gap-[10px]'}>
                        <CalenderComponent doneDaysArray={[1,2,3]} />
                        <p className={'paragraph'}>used to treat schizophrenia and bipolar Common side effects include severe depression, movement problems, sleepiness, dizziness, trouble seeing, constipation, and increased weight.Study of risperidone began in the late 1980s and it was approved for sale in the United States in 1993.And its a antypsycotic.</p>
                    </div>
                </main>
            </section>
            <hr className={'section-divider'} />
            <ThirdSectionComponent />
        </HolderComponent>
    );
}
