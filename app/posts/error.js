// This error.js file is used to catch error and send meaningful error message to the client side.
// It will automatically run when the erro happens and will display such error message.

"use client"; //Error components must be client components

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service.
    console.error(error);
  }, [error]);
  return (
    <div>
      <h2>Something went wrong!!!</h2>
      <button onClick={
        // Attempt to recover by trying to re-render the segment. 
        // The onclick function helps to reset and bring the user back to where they were before the error.
        () => reset()}>Try Again</button>
    </div>
  );
};
