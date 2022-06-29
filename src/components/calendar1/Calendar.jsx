import "./calendar.scss";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="top">
        <CalendarMonthIcon className="calendaricon"/>
        <span className="calendartitle">Schedule Content</span>
      </div>
      <hr />
      <div className="bottom">
        <CalendarComponent></CalendarComponent>
      </div>
    </div>
  );
};

export default Calendar;
