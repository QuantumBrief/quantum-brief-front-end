import React from "react";

export const QuotesContainer = ({ children, ...rest }) => (
  <div
    {...rest}
    className="h-800 md:h-1100 sm:h-1300 flex flex-col justify-center items-center bg-black"
  >
    {children}
  </div>
);