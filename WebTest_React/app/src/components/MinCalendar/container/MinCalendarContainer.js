import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import MinCalendarComponent from "../presentational/MinCalendarComponent";

import { testCalendarAPICall } from "../../../store/actions/CalendarAction";
import { useDispatch } from "react-redux";

export default function MinCalendar() {
  const events = [
    { title: "today's event", date: new Date() },
    { title: "today's event2", start: "2020-03-05", end: "2020-03-07" }
  ];
  const dispatch = useDispatch();

  const testEvent = () => {
    dispatch(testCalendarAPICall(events));
  };
  return (
    <MinCalendarComponent
      data={events}
      dropEvent={testEvent}
    ></MinCalendarComponent>
  );
}
