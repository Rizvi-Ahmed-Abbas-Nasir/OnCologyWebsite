import React, { useState, useEffect } from "react";

const App = ({ PopUp }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Synchronize state with PopUp prop
    setIsPopupVisible(!!PopUp);
  }, [PopUp]);

  useEffect(() => {
    let timer;
    if (isPopupVisible) {
      timer = setTimeout(() => {
        setIsPopupVisible(false); // Auto-hide after 5 seconds
      }, 5000);
    }
    return () => clearTimeout(timer); // Cleanup timer
  }, [isPopupVisible]);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f3f4f6;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .popup-overlay {
          position: fixed;
          top: 10px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          z-index: 50;
        }
        .popup-container {
          background: #4caf50;
          color: white;
          padding: 15px 25px;
          border-radius: 8px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          text-align: center;
          font-size: 1rem;
        }
      `}</style>

      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            Your submission was successful! Thank you!
          </div>
        </div>
      )}
    </>
  );
};

export default App;
