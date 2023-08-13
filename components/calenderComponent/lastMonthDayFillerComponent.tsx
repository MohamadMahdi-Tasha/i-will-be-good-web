// Codes By Mahdi Tasha
// Importing Part
import CalenderItemComponent from "@/components/calenderComponent/calenderItemComponent";

// Defining Type Of Props
interface propsType {
    todayMonth: number;
}

// Creating Month Days Filler (Last) Component And Exporting It As Default
export default function LastMonthDaysFillerComponent({todayMonth}:propsType) {
    // Conditional Rendering
    if (todayMonth === 1) {
        return (
            <>
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'1'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'2'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'3'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'4'} />
            </>
        );
    }
    else if (todayMonth === 2) {
        return (
            <>
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'1'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'2'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'3'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'4'} />
            </>
        );
    } else if (todayMonth === 3) {
        return <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'1'} />
    } else if (todayMonth === 4) {return false;} else if (todayMonth === 5) {
        return (
            <>
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'1'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'2'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'3'} />
            </>
        )
    } else if (todayMonth === 6) {
        return <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'1'} />
    } else if (todayMonth === 7) {return false;} else if (todayMonth === 8) {
        return (
            <>
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'1'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'2'} />
            </>
        )
    } else if (todayMonth === 9) {return false;} else if (todayMonth === 10) {
        return (
            <>
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'1'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'2'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'3'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'4'} />
            </>
        );
    } else if (todayMonth === 11) {
        return (
            <>
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'1'} />
                <CalenderItemComponent isMonthDay={true} isDisabled={true} name={'2'} />
            </>
        )
    } else if (todayMonth === 12) {return false;}
}