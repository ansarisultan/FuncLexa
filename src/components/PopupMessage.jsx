// src/components/PopupMessage.jsx
import React from "react";

const PopupMessage = ({ type, message }) => {
  const bgColor =
    type === "success" ? "bg-green-600" : "bg-red-600";

  return (
    <div className={`fixed bottom-6 right-6 z-50 px-4 py-3 text-white rounded shadow-lg transition-all duration-300 ${bgColor}`}>
      {message}
    </div>
  );
};

export default PopupMessage;
