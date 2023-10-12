// Codes By Mahdi Tasha
// Forcing NextJS To Render This Component As Client Side Component
'use client';

// Importing Part
import {Dispatch, ReactNode, useState, useEffect} from "react";

// Defining Type Of Props
interface propsType {
    doneDaysArray: Array<Number>;
}

// Creating And Exporting Calendar Component As Default
export default function CalenderComponent({doneDaysArray}:propsType):ReactNode {
    // Defining States Of Component
    const [monthLenght, setMonthLenght]:[number, Dispatch<number>] = useState(0);
    const [monthFirstDay, setMonthFirstDay]:[string, Dispatch<string>] = useState('');
    const [countOfBeforeToday, setCountOfBeforeToday]:[number, Dispatch<number>] = useState(0);

    // Using useEffect Hook To Set Length And First Day Of This Month
    useEffect(() => {
        const today:Date = new Date();
        const todayMonth:number = today.getMonth();
        const todayYear:number = today.getFullYear();

        const daysInMonth = (month:number, year:number):number => new Date(year, month, 0).getDate();
        const firstDayOfMonth = (month:number, year:number):string => new Date(year, month, 1).toString().split(' ')[0].toLowerCase();

        setMonthLenght(daysInMonth(todayMonth, todayYear));
        setMonthFirstDay(firstDayOfMonth(todayMonth, todayYear));

        switch (monthFirstDay) {
            case 'sat': setCountOfBeforeToday(6);break;
            case 'fri': setCountOfBeforeToday(5);break;
            case 'thu': setCountOfBeforeToday(4);break;
            case 'wed': setCountOfBeforeToday(3);break;
            case 'tue': setCountOfBeforeToday(2);break;
            case 'mon': setCountOfBeforeToday(1);break;
            default : setCountOfBeforeToday(0);break;
        }
    }, [])

    // Returning JSX
    return (
        <div className={'bg-black rounded-[20px] lg:gap-[20px] gap-[10px] lg:py-[30px] py-[20px] px-[20px]'}>
            <div className={'grid grid-cols-7 lg:gap-[20px] gap-[10px] lg:mb-[20px] mb-[10px]'}>
                <div className={'calender-week-days'}>S</div>
                <div className={'calender-week-days'}>M</div>
                <div className={'calender-week-days'}>T</div>
                <div className={'calender-week-days'}>W</div>
                <div className={'calender-week-days'}>T</div>
                <div className={'calender-week-days'}>F</div>
                <div className={'calender-week-days'}>S</div>
            </div>
            <div className={'grid grid-cols-7 lg:gap-[20px] gap-[10px]'}>
                {
                    [...Array(countOfBeforeToday)].map((item, index:number) => (
                        <div key={index} className={'calender-month-days disabled'} />
                    ))
                }
                {
                    [...Array(monthLenght)].map((item, index:number) => (
                        <div key={index}
                             className={`calender-month-days ${(new Date().getDate() === index + 1) ? 'today' : ''} ${(doneDaysArray.includes(index + 1)) ? 'done' : (new Date().getDate() < index + 1) ? 'not-yet' : 'not-done'}`}
                        >
                            {index + 1}
                        </div>
                    ))
                }
                {
                    [...Array(35 - monthLenght)].map((item, index:number) => (
                        <div key={index} className={'calender-month-days disabled'} />
                    ))
                }
            </div>
        </div>
    );
}