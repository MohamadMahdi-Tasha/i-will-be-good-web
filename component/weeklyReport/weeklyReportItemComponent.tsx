// Codes By Mahdi Tasha
// Importing Part
import {ReactNode} from "react";

// Defining Type Of Props
interface propsType {
    isChecked: boolean;
    index: number;
}

// Creating And Exporting Weekly Report Item Component As Default
export default function WeeklyReportItemComponent({isChecked, index}:propsType):ReactNode {
    // Defining Day Name Component
    function DayNameComponent():ReactNode {
        switch (index) {
            case 0 : return 'SUN' ; break;
            case 1 : return 'MON' ; break;
            case 2 : return 'TUE' ; break;
            case 3 : return 'WED' ; break;
            case 4 : return 'THU' ; break;
            case 5 : return 'FRI' ; break;
            case 6 : return 'SAT' ; break;
            default : return '' ; break;
        }
    }

    // Returning JSX
    return (
        <div className={'shrink-0'}>
            <div data-checked={isChecked}
                 className={'flex justify-center mb-[20px] items-center aspect-square lg:w-auto lg:h-auto w-[70px] h-[70px] rounded-[20px] border border-white p-[10px] data-[checked="true"]:bg-white'}
            >
                {
                    (isChecked)
                        ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className={'w-full aspect-square'} fill="black" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        ) : false
                }
            </div>
            <span className={'text-[20px] font-normal text-white block text-center'}><DayNameComponent /></span>
        </div>
    );
}
