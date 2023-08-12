// Codes By Mahdi Tasha
// Defining Type Of Props
interface propsType {
    children: React.ReactNode;
    className?: string;
}

// Creating Holder Component And Exporting It As Default
export default function HolderComponent({children, className}:propsType):JSX.Element {
    // Return JSX
    return (
        <div className={
            (className === undefined)
                ? 'max-w-[1200px] lg:px-[100px] px-[10px] mx-auto'
                : `max-w-[1200px] lg:px-[100px] px-[10px] mx-auto ${className}`
        }>
            {children}
        </div>
    );
}