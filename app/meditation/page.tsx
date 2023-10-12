// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";
import CalenderComponent from "@/component/calender/calenderComponent";
import ThirdSectionComponent from "@/component/section/home/thirdSectionComponent";
import HolderComponent from "@/chunk/holderComponent";

// Creating And Exporting Meditation Page As Default
export default function MeditationPage():ReactNode {
    // Returning JSX
    return (
        <HolderComponent>
            <section>
                <main>
                    <h2 className={'title'}>Monthly report of meditation:</h2>
                    <div className={'grid lg:grid-cols-2 lg:gap-[20px] gap-[10px]'}>
                        <CalenderComponent doneDaysArray={[1,2,3]} />
                        <p className={'paragraph'}>Meditation is a practice in which an individual uses a technique – such as mindfulness, or focuses the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.</p>
                    </div>
                </main>
            </section>
            <hr className={'section-divider'} />
            <ThirdSectionComponent />
        </HolderComponent>
    );
}
