import React, { useState } from "react";
import "../styles/BookingModal.scss";

const BookingModal = ({ slot, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsLoading(true); // Start the loading spinner

    // Simulate an API call or delay
    setTimeout(() => {
      setIsLoading(false); // Stop the spinner
      setIsConfirmed(true); // Mark booking as confirmed
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div className="booking-modal">
      <div className="modal-content">
        {isConfirmed ? (
          <div className="confirmation-message">
            <h3>Booking Confirmed!</h3>
            <p style={{ color: "#28a745" }}>Your booking for {slot.time} is confirmed.</p>
            <button onClick={onClose} className="close-button">
              Close
            </button>
          </div>
        ) : (
          <>
            <h3>Confirm Booking</h3>
            <p>You are about to book: {slot.time}</p>
            <div className="modal-actions">
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                <>
                  <button onClick={handleConfirm} className="confirm-button">
                    Confirm
                  </button>
                  <button onClick={onClose} className="cancel-button">
                    Cancel
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
