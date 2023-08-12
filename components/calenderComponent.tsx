// Codes By Mahdi Tasha
// Creating Calender Component And Exporting It As Default
export default function CalenderComponent():JSX.Element {
    // Return JSX
    return (
        <div className={'bg-black lg:w-[50%] w-full grid overflow-auto grid-cols-7 gap-[10px] p-[20px] rounded-[20px]'}>
                <div className={'calender-item weekday'}>S</div>
                <div className={'calender-item weekday'}>S</div>
                <div className={'calender-item weekday'}>M</div>
                <div className={'calender-item weekday'}>T</div>
                <div className={'calender-item weekday'}>W</div>
                <div className={'calender-item weekday'}>T</div>
                <div className={'calender-item weekday'}>F</div>
                <div className={'calender-item monthday done'}>1</div>
                <div className={'calender-item monthday done'}>2</div>
                <div className={'calender-item monthday done'}>3</div>
                <div className={'calender-item monthday done'}>4</div>
                <div className={'calender-item monthday done'}>5</div>
                <div className={'calender-item monthday skipped'}>6</div>
                <div className={'calender-item monthday done'}>7</div>
                <div className={'calender-item monthday not-done'}>8</div>
                <div className={'calender-item monthday not-done'}>9</div>
                <div className={'calender-item monthday not-done'}>10</div>
                <div className={'calender-item monthday not-done'}>11</div>
                <div className={'calender-item monthday not-done'}>12</div>
                <div className={'calender-item monthday not-done'}>13</div>
                <div className={'calender-item monthday not-done'}>14</div>
                <div className={'calender-item monthday not-done'}>15</div>
                <div className={'calender-item monthday not-done'}>16</div>
                <div className={'calender-item monthday not-done'}>17</div>
                <div className={'calender-item monthday not-done'}>18</div>
                <div className={'calender-item monthday not-done'}>19</div>
                <div className={'calender-item monthday not-done'}>20</div>
                <div className={'calender-item monthday not-done'}>21</div>
                <div className={'calender-item monthday not-done'}>22</div>
                <div className={'calender-item monthday not-done'}>23</div>
                <div className={'calender-item monthday not-done'}>24</div>
                <div className={'calender-item monthday not-done'}>25</div>
                <div className={'calender-item monthday not-done'}>26</div>
                <div className={'calender-item monthday not-done'}>27</div>
                <div className={'calender-item monthday not-done'}>28</div>
                <div className={'calender-item monthday not-done'}>29</div>
                <div className={'calender-item monthday not-done'}>30</div>
                <div className={'calender-item monthday disabled'}>1</div>
                <div className={'calender-item monthday disabled'}>2</div>
                <div className={'calender-item monthday disabled'}>3</div>
                <div className={'calender-item monthday disabled'}>4</div>
                <div className={'calender-item monthday disabled'}>5</div>
        </div>
    );
}