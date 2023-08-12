// Codes By Mahdi Tasha
// Defining Type Of Props
interface propsType {
    children: React.ReactNode;
}

// Creating Holder Component And Exporting It As Default
export default function HolderComponent({children}:propsType):JSX.Element {
    // Return JSX
    return (
        <div>
            {children}
        </div>
    );
}