// Codes By Mahdi Tasha
// Defining Type Of Props
import React from "react";

interface propsType {
    name: string;
    isMonthDay: boolean;
    isDone?: boolean;
    isSkipped?: boolean;
    isDisabled?: boolean;
    isToday?: boolean;
}

// Creating Calender Item Component And Exporting It As Default
export default function CalenderItemComponent({name, isMonthDay, isDone, isSkipped, isDisabled, isToday}:propsType):React.ReactNode {
    // Conditional Rendering
    if (isDisabled) {
        return <div className={'calender-item monthday disabled'}>{name}</div>
    } else {
        if (isMonthDay) {
            if (isDone && !isSkipped) {
                return <div className={'calender-item monthday done'}>{name}</div>
            } else if (!isDone && isSkipped) {
                return <div className={'calender-item monthday skipped'}>{name}</div>
            } else if (!isDone && !isSkipped) {
                if (isToday) {
                    return <div className={'calender-item monthday not-done today'}>{name}</div>
                } else {
                    return <div className={'calender-item monthday not-done'}>{name}</div>
                }
            }
        } else {
            return <div className={'calender-item weekday'}>{name}</div>
        }
    }
}