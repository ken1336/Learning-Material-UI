
import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction';
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";


export default function MinCalendarComponent(props) {


    return (
        <div className="App" style={{ padding: "100px" }}>
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin, interactionPlugin]}
                events={props.data}
                //eventClick={testEvent}
                editable="true"
                droppable="true"
            />
        </div>
    );
}
