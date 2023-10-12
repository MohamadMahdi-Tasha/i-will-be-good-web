// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";

// Creating And Exporting Third Section Of Home Page As Default
export default function ThirdSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <main>
                <h2 className={'title'}>Derealization:</h2>
                <p className={'paragraph mb-[50px]'}>
                    is an alteration in the perception of the external world, causing those with the condition to perceive it as unreal, distant, distorted or falsified. Other symptoms include feeling as if one's environment is lacking in spontaneity, emotional coloring, and depth. It is a dissociative symptom that may appear in moments of severe stress.
                    <br/>
                    <br/>
                    Derealization is a subjective experience pertaining to a person's perception of the outside world, while depersonalization is a related symptom characterized by dissociation towards one's own body and mental processes. The two are commonly experienced in conjunction with one another, but are also known to occur independently.
                    <br/>
                    <br/>
                    Chronic derealization is fairly rare, and may be caused by occipital–temporal dysfunction. Experiencing derealization for long periods of time or having recurring episodes can be indicative of many psychological disorders, and can cause significant distress.
                    <br/>
                    <br/>
                    However, temporary derealization symptoms are commonly experienced by the general population a few times throughout their lives, with a lifetime prevalence of up to 26–74% and a prevalence of 31–66% at the time of a traumatic event.
                </p>
            </main>
        </section>
    );
}