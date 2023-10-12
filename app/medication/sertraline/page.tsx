// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import CalenderComponent from "@/component/calender/calenderComponent";
import ThirdSectionComponent from "@/component/section/home/thirdSectionComponent";
import HolderComponent from "@/chunk/holderComponent";

// Creating And Exporting Sertraline Page As Default
export default function SertralinePage():ReactNode {
    // Returning JSX
    return (
        <HolderComponent>
            <section>
                <main>
                    <h2 className={'title'}>Monthly report of sertraline:</h2>
                    <div className={'grid lg:grid-cols-2 lg:gap-[20px] gap-[10px]'}>
                        <CalenderComponent doneDaysArray={[1,2,3]} />
                        <p className={'paragraph'}>is an antidepressant of the selective serotonin reuptake inhibitor (SSRI) class.The efficacy of sertraline for depression is similar to that of other antidepressants, and the differences are mostly confined to side effects.</p>
                    </div>
                </main>
            </section>
            <hr className={'section-divider'} />
            <ThirdSectionComponent />
        </HolderComponent>
    );
}
