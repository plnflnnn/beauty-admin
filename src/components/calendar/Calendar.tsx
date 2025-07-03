import {Calendar as LibCalendar} from "react-calendar";
import { useContext } from "react";
import { useEffect } from "react";
import { AppointmentContext } from "../../context/appointments/AppointmentsContext";

import 'react-calendar/dist/Calendar.css';
import "./calendar.scss";

function Calendar() {
	const {calendarDate, setDateAndFilter, getActiveAppointments} = useContext(AppointmentContext);

	  const refreshCalendar = () => {
		setDateAndFilter([null ,null]);
	  }

      useEffect(() => {
		refreshCalendar()
      }, []);

	return (
		<div className="calendar">
			<LibCalendar value={calendarDate} onChange={(value) => {
				setDateAndFilter(value);
				getActiveAppointments();
			}} selectRange/>
			<button className="deselect-date" onClick={refreshCalendar}>Deselect date</button>
		</div>
	);
}

export default Calendar;
