// Codes By Mahdi Tasha
// Importing Part
import CalenderItemComponent from "@/components/calenderComponent/calenderItemComponent";

// Defining Type Of Props
interface propsType {
    todayMonth: number;
}

// Creating Month Days Filler (Firstly) Component And Exporting It As Default
export default function FirstMonthDaysFillerComponent({todayMonth}:propsType) {
    // Conditional Rendering
    if (todayMonth === 1) {return false;}
    else if (todayMonth === 2) {
        return (
            <>
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'29'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'30'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'31'} />
            </>
        );
    } else if (todayMonth === 3) {
        return (
            <>
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'26'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'27'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'28'} />
            </>
        );
    } else if (todayMonth === 4) {
        return (
            <>
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'26'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'27'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'28'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'29'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'30'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'31'} />
            </>
        );
    } else if (todayMonth === 5) {
        return <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'30'} />
    } else if (todayMonth === 6) {
        return (
            <>
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'28'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'29'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'30'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'31'} />
            </>
        )
    } else if (todayMonth === 7) {
        return (
            <>
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'25'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'26'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'27'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'28'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'29'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'30'} />
            </>
        )
    } else if (todayMonth === 8) {
        return (
            <>
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'30'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'31'} />
            </>
        )
    } else if (todayMonth === 9) {
        return (
            <>
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'27'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'28'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'29'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'30'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'31'} />
            </>
        )
    } else if (todayMonth === 10) {return false;} else if (todayMonth === 11) {
        return (
            <>
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'29'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'30'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'31'} />
            </>
        )
    } else if (todayMonth === 12) {
        return (
            <>
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'24'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'25'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'26'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'27'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'28'} />
            </>
        )
    }
}