// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {Dispatch, MutableRefObject, ReactNode, useState} from "react";

// Defining Type Of Props
interface propsType {
    type: "tel" | "email" | "password" | "text";
    required: boolean;
    placeHolder: string;
    id: string;
    isErrored: boolean;
    errorText: string;
    refProp: MutableRefObject<any>;
}

// Creating And Exporting Input Component As Default
export default function InputComponent({required, id, placeHolder, type, isErrored, errorText, refProp}:propsType):ReactNode {
    // Defining State Of Component
    const [isInputFocused, setInputFocused]:[boolean, Dispatch<boolean>] = useState(false);

    // Conditional Rendering
    if (type !== "password") {
        return (
            <div>
                <div data-focused={isInputFocused} className={'bg-black relative duration-500 transition-all w-full border border-current data-[focused="true"]:text-sky-500 data-[focused="false"]:text-white rounded-[10px]'}>
                    <label data-focused={isInputFocused}
                           htmlFor={id}
                           className={'absolute px-[20px] bg-black font-normal text-current text-[17px] left-[20px] data-[focused="false"]:top-[50%] data-[focused="false"]:left-[10px] transition-all duration-500 data-[focused="true"]:left-[20px] data-[focused="true"]:top-0 translate-y-[-50%]'}>
                        {placeHolder}
                    </label>
                    <input onFocus={() => setInputFocused(true)}
                           ref={refProp}
                           onBlur={(event) => {
                               (event.target.value === "" || event.target.value.startsWith(""))
                                   ? setInputFocused(false)
                                   : setInputFocused(true)
                           }}
                           className={'p-[15px] block w-full outline-0 bg-black rounded-[10px] font-normal text-current text-[15px]'}
                           type={type}
                           id={id}
                           name={id}
                           required={required}/>
                </div>
                {
                    (isErrored)
                        ? <div className={'mt-[20px] bg-red-200 p-[10px] rounded-[10px]'}><p className={'text-[15px] font-normal text-red-500'}>{errorText}</p></div>
                        : false
                }
            </div>
        );
    } else {
        // Defining State Of Component
        const [inputType, setInputType]:[string, Dispatch<string>] = useState('password');

        // Returning JSX
        return (
            <div>
                <div data-focused={isInputFocused} className={'bg-black relative duration-500 transition-all w-full border border-current data-[focused="true"]:text-sky-500 data-[focused="false"]:text-white rounded-[10px]'}>
                    <label data-focused={isInputFocused}
                           htmlFor={id}
                           className={'absolute px-[20px] bg-black font-normal text-current text-[17px] left-[20px] data-[focused="false"]:top-[50%] data-[focused="false"]:left-[10px] transition-all duration-500 data-[focused="true"]:left-[20px] data-[focused="true"]:top-0 translate-y-[-50%]'}>
                        {placeHolder}
                    </label>
                    <div className={'flex'}>
                        <input onFocus={() => setInputFocused(true)}
                               ref={refProp}
                               onBlur={(event) => {
                                   (event.target.value === "" || event.target.value.startsWith(""))
                                       ? setInputFocused(false)
                                       : setInputFocused(true)
                               }}
                               className={'p-[15px] block w-full outline-0 bg-black rounded-[10px] font-normal text-current text-[15px]'}
                               type={inputType}
                               id={id}
                               name={id}
                               minLength={8}
                               maxLength={12}
                               required={required} />
                        <button onClick={() => {
                            (inputType === 'password')
                                ? setInputType('text')
                                : setInputType('password')
                        }}
                                type={'button'}
                                className={'aspect-square flex justify-center text-current items-center w-[50px] h-[50px]'}>
                            {
                                (inputType === 'password')
                                    ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                                        </svg>
                                    )
                            }
                        </button>
                    </div>
                </div>
                {
                    (isErrored)
                        ? <div className={'mt-[20px] bg-red-200 p-[10px] rounded-[10px]'}><p className={'text-[15px] font-normal text-red-500'}>{errorText}</p></div>
                        : false
                }
            </div>
        );
    }
}