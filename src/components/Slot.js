// import { useState } from "react";

// import React from 'react'

// const Slot = (props) => {
//     const [date, setDate] = useState("");
//     const [time, setTime] = useState("");
//     const [showTiming, setShowTiming] = useState(false);
//     const displayTimings = (e) => {
//         setDate(e);
//         setShowTiming(true)
//     }
//     const timingMessage = (time) => {
//         setTime(time);
//         props.actions.timingMessage({date, time});
//         document.getElementById("time-div").style.display = "none";
//     }

//   return (
//     <div id="time-div">
//         <div>
//             <button id="date1" className="btn" onClick={()=>displayTimings("15 May, Mon")}>15 MAY <br/>Mon</button>
//             <button id="date2" className="btn" onClick={()=>displayTimings("16 May, Mon")}>16 MAY <br/>Tue</button>
//             <button id="date3" className="btn" onClick={()=>displayTimings("17 May, Mon")}>17 MAY <br/>Wed</button>
//         </div>
//         {showTiming ?
//             <div>
//                 <div className="time-container">
//                     <p>Morning</p>
//                     <button className="btn" onClick={()=>timingMessage("9 AM")}>09:00</button>
//                     <button className="btn" onClick={()=>timingMessage("10 AM")}>10:00</button>
//                     <button className="btn" onClick={()=>timingMessage("11 AM")}>11:00</button>
//                     <button className="btn" onClick={()=>timingMessage("12 AM")}>12:00</button>
//                 </div>
//                 <div className="time-container">
//                     <p>Noon</p>
//                     <button className="btn" onClick={()=>timingMessage("2 PM")}>02:00</button>
//                     <button className="btn" onClick={()=>timingMessage("3 PM")}>03:00</button>
//                     <button className="btn" onClick={()=>timingMessage("4 PM")}>04:00</button>
//                     <button className="btn" onClick={()=>timingMessage("5 PM")}>05:00</button>
//                 </div>
//                 <div className="time-container">
//                     <p>Evening</p>
//                     <button className="btn" onClick={()=>timingMessage("7 PM")}>07:00</button>
//                     <button className="btn" onClick={()=>timingMessage("8 PM")}>08:00</button>
//                     <button className="btn" onClick={()=>timingMessage("9 PM")}>09:00</button>
//                     <button className="btn" onClick={()=>timingMessage("10 PM")}>10:00</button>
//                 </div>
//                 <></>}
      
//     </div>
//   );
// }

// export default Slot;

import React, { useState } from 'react';

const Slot = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [showTiming, setShowTiming] = useState(false);

    const displayTimings = (selectedDate) => {
        setDate(selectedDate);
        setShowTiming(true);
    };

    const timingMessage = (selectedTime) => {
        setTime(selectedTime);
        props.actions.timingMessage({ date, time: selectedTime });
        setShowTiming(false); // Hide timings after selecting a time
    };

    return (
        <div id="time-div">
            <div>
                <button id="date1" className="btn" onClick={() => displayTimings("15 May, Mon")}>15 MAY <br />Mon</button>
                <button id="date2" className="btn" onClick={() => displayTimings("16 May, Tue")}>16 MAY <br />Tue</button>
                <button id="date3" className="btn" onClick={() => displayTimings("17 May, Wed")}>17 MAY <br />Wed</button>
            </div>
            {showTiming && (
                <div>
                    <div className="time-container">
                        <p>Morning</p>
                        <button className="btn" onClick={() => timingMessage("9 AM")}>09:00</button>
                        <button className="btn" onClick={() => timingMessage("10 AM")}>10:00</button>
                        <button className="btn" onClick={() => timingMessage("11 AM")}>11:00</button>
                        <button className="btn" onClick={() => timingMessage("12 PM")}>12:00</button>
                    </div>
                    <div className="time-container">
                        <p>Noon</p>
                        <button className="btn" onClick={() => timingMessage("2 PM")}>02:00</button>
                        <button className="btn" onClick={() => timingMessage("3 PM")}>03:00</button>
                        <button className="btn" onClick={() => timingMessage("4 PM")}>04:00</button>
                        <button className="btn" onClick={() => timingMessage("5 PM")}>05:00</button>
                    </div>
                    <div className="time-container">
                        <p>Evening</p>
                        <button className="btn" onClick={() => timingMessage("7 PM")}>07:00</button>
                        <button className="btn" onClick={() => timingMessage("8 PM")}>08:00</button>
                        <button className="btn" onClick={() => timingMessage("9 PM")}>09:00</button>
                        <button className="btn" onClick={() => timingMessage("10 PM")}>10:00</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Slot;

