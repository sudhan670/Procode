import React, { useState } from "react";
import ExpertProfile from "./Components/ExpertProfile";
import TimeSlot from "./Components/TimeSlot";
import BookingModal from "./Components/BookingModal";
import expertData from "./data/expertData.json";
import "./styles/App.scss";

function App() {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const closeBookingModal = () => {
    setSelectedSlot(null);
  };

  return (
    <div className="app">
      <ExpertProfile expert={expertData.expert} />
      <TimeSlot
        timeSlots={expertData.expert.timeSlots}
        onSelectSlot={handleSlotSelection}
      />
      {selectedSlot && (
        <BookingModal slot={selectedSlot} onClose={closeBookingModal} />
      )}
    </div>
  );
}

export default App;
