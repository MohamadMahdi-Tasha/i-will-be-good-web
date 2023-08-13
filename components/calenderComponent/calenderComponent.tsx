// Codes By Mahdi Tasha
// Importing Part
import CalenderItemComponent from '@/components/calenderComponent/calenderItemComponent';
import FirstMonthDaysFillerComponent from '@/components/calenderComponent/firstMonthDayFillerComponent';
import LastMonthDaysFillerComponent from '@/components/calenderComponent/lastMonthDayFillerComponent';

// Creating Calender Component And Exporting It As Default
export default function CalenderComponent(): JSX.Element {
    // Using Dates
    const today:Date = new Date();
    const todayDate:number = today.getDate();
    const todayMonth:number = today.getMonth() + 1;
    const doneDates:number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
    let thisMonthDaysNumber:any;

    // Small Condition
    switch (todayMonth) {
        case 1:thisMonthDaysNumber = 31;break;
        case 2:thisMonthDaysNumber = 28;break;
        case 3:thisMonthDaysNumber = 31;break;
        case 4:thisMonthDaysNumber = 29;break;
        case 5:thisMonthDaysNumber = 31;break;
        case 6:thisMonthDaysNumber = 30;break;
        case 7:thisMonthDaysNumber = 29;break;
        case 8:thisMonthDaysNumber = 31;break;
        case 9:thisMonthDaysNumber = 30;break;
        case 10:thisMonthDaysNumber = 31;break;
        case 11:thisMonthDaysNumber = 30;break;
        case 12:thisMonthDaysNumber = 30;break;
    }

    // Return JSX
    return (
        <div className={'lg:w-[50%] w-full bg-black p-[20px] rounded-[20px]'}>
            <div className={'grid overflow-auto grid-cols-7 gap-[10px] mb-[10px]'}>
                <CalenderItemComponent isMonthDay={false} name={'S'}/>
                <CalenderItemComponent isMonthDay={false} name={'M'}/>
                <CalenderItemComponent isMonthDay={false} name={'T'}/>
                <CalenderItemComponent isMonthDay={false} name={'W'}/>
                <CalenderItemComponent isMonthDay={false} name={'T'}/>
                <CalenderItemComponent isMonthDay={false} name={'F'}/>
                <CalenderItemComponent isMonthDay={false} name={'S'}/>
            </div>
            <div className={'grid overflow-auto grid-cols-7 gap-[10px]'}>
                <FirstMonthDaysFillerComponent todayMonth={todayMonth} />
                {
                    [...Array(thisMonthDaysNumber)].map((item, index) => (
                        <CalenderItemComponent
                            isMonthDay={true}
                            name={(index + 1).toString()}
                            isDisabled={false}
                            isSkipped={(todayDate > index + 1 && !doneDates.includes(index + 1))}
                            isDone={(doneDates.includes(index + 1))}
                            isToday={(index + 1 === todayDate)}
                        />
                    ))
                }
                <LastMonthDaysFillerComponent todayMonth={todayMonth} />
            </div>
        </div>
    );
}