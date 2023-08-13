// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Component
'use client';

// Importing Part
import {useState} from "react";

// Defining Type Of Props
interface propsType {
    type: string;
    required: boolean;
    label: string;
    id: string;
}

// Creating Input Component And Exporting It As Default
export default function InputComponent({type, required, label, id}:propsType):JSX.Element {
    // Defining State Of Component
    const [isClicked, setClicked] = useState(false);
    const [value, setValue] = useState('');

    // Return JSX
    return (
        <div data-opened={isClicked}
             className={'border relative rounded-[10px] cursor-pointer transition-all'}
             onClick={() => (value === '') ? setClicked(false) : setClicked(true)}>
            <input
                onFocus={() => setClicked(true)}
                onBlur={() => (value === '') ? setClicked(false) : setClicked(true)}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                className={'w-full bg-white px-[20px] py-[15px] outline-0 rounded-[10px]'} type={type} required={required} id={id}/>
            <label
                data-opened={isClicked}
                className={'absolute truncate px-[20px] bg-white rounded-[5px] transition-all -translate-y-[50%] left-[10px] data-[opened="true"]:top-0 data-[opened="false"]:top-[50%]'}
                htmlFor={id}>{label}</label>
        </div>
    );
}