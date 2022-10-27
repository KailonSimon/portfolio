import React, { useEffect } from "react";

function LoadingScreen() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          boxShadow: "inset 0 0 5vw 0.5rem #000",
        }}
      >
        <div className="loading-container">
          <div className="dot-loading-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="dot-loading-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="dot-loading-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
