// Codes By Mahdi Tasha
// Importing Part
import CheckboxComponent from "@/chunks/checkboxComponent";
import WeekDaysComponent from "@/components/weekDaysComponent";

// Creating Home Second Section Component And Exporting It As Default
export default function HomeSecondSectionComponent():JSX.Element {
    // Return JSX
    return (
        <section>
            <header>
                <h1 className={'big-title'}>Meditations:</h1>
            </header>
            <main>
                <div className={'flex items-center mb-[15px]'}>
                    <CheckboxComponent isChecked={true} isLarge={false} isDark={true} />
                    <span className={'text-black truncate font-light text-[12px] ml-[10px]'}>Today’s meditations</span>
                </div>
                <p className={'small-paragraph mb-[20px]'}>
                    Meditation is a practice in which an individual uses a technique – such as mindfulness, or focuses the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.
                    Meditation is a practice in which an individual uses a technique – such as mindfulness, or focuses the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.
                    Meditation is a practice in which an individual uses a technique – such as mindfulness, or focuses the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.
                    <br/>
                    <br/>
                    Meditation is practiced in numerous religious traditions. The earliest records of meditation (dhyana) are found in the Upanishads, and meditation plays a salient role in the contemplative repertoire of Hinduism, Jainism and Buddhism.Since the 19th century, Asian meditative techniques have spread to other cultures where they have also found application in non-spiritual contexts, such as business and health.[
                    Meditation is practiced in numerous religious traditions. The earliest records of meditation (dhyana) are found in the Upanishads, and meditation plays a salient role in the contemplative repertoire of Hinduism, Jainism and Buddhism.Since the 19th century, Asian meditative techniques have spread to other cultures where they have also found application in non-spiritual contexts, such as business and health.[
                    <br/>
                    <br/>
                    <br/>
                    Meditation is a practice in which an individual uses a technique – such as mindfulness, or focuses the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.
                    Meditation is a practice in which an individual uses a technique – such as mindfulness, or focuses the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.
                    Meditation is a practice in which an individual uses a technique – such as mindfulness, or focuses the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.
                </p>
                <div className={'mb-[20px]'}>
                    <h3 className={'medium-title'}>Medications taken this week:</h3>
                    <WeekDaysComponent />
                </div>
            </main>
            <footer>
                <a className={'block'} href="#">
                    <button className={'border w-full truncate border-black rounded-[10px] p-[10px] text-center '}>Click here to see monthly</button>
                </a>
            </footer>
        </section>
    );
}