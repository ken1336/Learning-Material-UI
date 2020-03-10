import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction';
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

export default function TestComponent() {
  const events = [{ title: "today's event", date: new Date() },{title: "today's event2", start  : '2020-03-05',
  end    : '2020-03-07'}];

  const testEvent = () => {
      alert("test");
  }
  return (
    <div className="App" style={{padding:"100px"}}>
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin,interactionPlugin]}
        events={events}
        eventClick = {testEvent}
        editable = "true"
        droppable = "true"
      />
    </div>
  );
}