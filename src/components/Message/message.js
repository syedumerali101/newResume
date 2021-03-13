import React from "react";

const Message = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        color: "white",
        padding: 10,
      }}
    >
      {children}
    </div>
  );
};

export default Message;
