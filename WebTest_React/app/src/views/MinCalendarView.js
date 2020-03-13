import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction';
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import MinCalendar from "../components/MinCalendar/container/MinCalendarContainer";

export default function MinCalendarView() {
 
  return (
    <MinCalendar></MinCalendar>
  );
}