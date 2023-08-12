// Codes By Mahdi Tasha
// Importing Part
import CalenderComponent from "@/components/calenderComponent";

// Defining Type Of Props
interface propsType {
    title: string;
}

// Creating Monthly Pages First Section Component And Exporting It As Default
export default function MonthlyFirstSection({title}:propsType):JSX.Element {
    // Return JSX
    return (
        <section>
            <header><h1 className={'big-title truncate'}>{title}</h1></header>
            <main className={'flex lg:flex-row flex-col gap-[20px]'}>
                <CalenderComponent />
                <p className={'small-paragraph lg:w-[50%] w-full'}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <br/>
                    <br/>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    <br/>
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    <br/>
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    <br/>
                    remaining essentially unchanged.
                    <br/>
                    <br/>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    <br/>
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    <br/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <br/>
                    <br/>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    <br/>
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    <br/>
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    <br/>
                    remaining essentially unchanged.
                    <br/>
                    <br/>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    <br/>
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </main>
        </section>
    );
}