// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Component
'use client';

// Importing Part
import {ReactNode, useState} from "react";

// Defining Type Of Props
interface propsType {
    isChecked: boolean;
    isDark: boolean;
    isLarge: boolean;
    noAction?: boolean;
    treatment?: string;
}

// Creating CheckBox Component And Exporting It As Default
export default function CheckboxComponent({isChecked, isDark, isLarge, noAction = false, treatment}:propsType):ReactNode {
    // Defining State Of Component
    const [componentChecked, setComponentChecked] = useState(isChecked);

    // Returning JSX
    return (
        <button
            data-checked={componentChecked}
            data-dark={isDark}
            data-large={isLarge}
            tabIndex={(noAction) ? -1 : 1}
            className={`border flex items-center justify-center transition-all data-[large="true"]:rounded-[12px] data-[large="false"]:rounded-[5px] data-[large="true"]:w-[50px] data-[large="true"]:h-[50px] data-[large="false"]:w-[25px] data-[large="false"]:h-[25px] aspect-square data-[dark="false"]:data-[checked="true"]:bg-white data-[dark="false"]:data-[checked="false"]:bg-transparent data-[dark="false"]:border-white data-[dark="true"]:border-black data-[dark="true"]:data-[checked="false"]:bg-transparent data-[dark="true"]:data-[checked="true"]:bg-black data-[dark="false"]:text-black data-[dark="true"]:text-white ${(noAction) ? 'pointer-events-none' : false}`}
            onClick={() => {
                if (!noAction) {
                    // Variables
                    const today = new Date().toLocaleDateString();

                    // Checking Or Unchecking Component
                    setComponentChecked(prevState => !prevState);
                }
            }}
        >
            {
                (componentChecked)
                    ? (
                        <svg width="20" height="20" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.3038 7.29196C26.3957 7.38485 26.4685 7.4952 26.5183 7.61669C26.568 7.73818 26.5936 7.86842 26.5936 7.99996C26.5936 8.13149 26.568 8.26173 26.5183 8.38322C26.4685 8.50471 26.3957 8.61507 26.3038 8.70796L12.4943 22.708C12.4026 22.8011 12.2938 22.875 12.174 22.9254C12.0541 22.9758 11.9256 23.0017 11.7959 23.0017C11.6662 23.0017 11.5377 22.9758 11.4179 22.9254C11.298 22.875 11.1892 22.8011 11.0975 22.708L4.19278 15.708C4.00756 15.5202 3.9035 15.2655 3.9035 15C3.9035 14.7344 4.00756 14.4797 4.19278 14.292C4.37799 14.1042 4.62921 13.9987 4.89114 13.9987C5.15308 13.9987 5.40429 14.1042 5.58951 14.292L11.7959 20.586L24.9071 7.29196C24.9987 7.19883 25.1075 7.12494 25.2274 7.07453C25.3472 7.02412 25.4757 6.99817 25.6054 6.99817C25.7352 6.99817 25.8636 7.02412 25.9835 7.07453C26.1033 7.12494 26.2122 7.19883 26.3038 7.29196Z" fill="currentColor"/>
                        </svg>
                    )
                    : false
            }
        </button>
    );
}