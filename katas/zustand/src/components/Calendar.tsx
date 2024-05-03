import { FC } from 'react';
import { useCalendarStore } from '../store/calendarStore';
import { useDarkModeStore } from '../store/darkModeStore';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Calendar: FC = () => {
    const { month, year, nextMonth, prevMonth } = useCalendarStore();
    const darkMode = useDarkModeStore((state) => state.darkMode);

    // Function to compute the days of the calendar
    const getCalendarDays = () => {
        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month + 1, 0);
        const days = [];
        // Adjusting the start day to consider Monday as the first day of the week
        let startDay = startDate.getDay() - 1;
        if (startDay === -1) startDay = 6; // If it's Sunday, make it the last day of the array (6)

        // Fill the initial empty slots
        for (let i = 0; i < startDay; i++) {
            days.push("");
        }

        // Fill the actual days of the month
        for (let day = 1; day <= endDate.getDate(); day++) {
            days.push(day);
        }

        return days;
    };

    const calendarDays = getCalendarDays();

    return (
        <div className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-md rounded-lg`}>
            <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth} className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
                    Prev
                </button>
                <span>{months[month]} {year}</span>
                <button onClick={nextMonth} className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
                    Next
                </button>
            </div>
            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
                {weekDays.map(day => (
                    <div key={day} className="py-2 text-center font-bold">
                        {day}
                    </div>
                ))}
                {calendarDays.map((day, index) => (
                    <div key={index} className="py-2 text-center">
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calendar;
