import React from "react";
import "../styles/TimeSlot.scss";

const TimeSlot = ({ timeSlots, onSelectSlot }) => {
  return (
    <div className="time-slot-container">
      <h3>Available Time Slots</h3>
      <div className="time-slots">
        {timeSlots.map((slot) => (
          <button
            key={slot.id}
            className={`time-slot ${slot.available ? "available" : "unavailable"}`}
            onClick={() => slot.available && onSelectSlot(slot)}
            disabled={!slot.available}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlot;
