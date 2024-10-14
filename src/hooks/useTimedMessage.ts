import { useState } from "react";

/**
 * Timer to display a message for a certain duration
 * @param duration Time in milliseconds to display the message
 * @returns type {isSubmitted: boolean, displaySuccessMessage: () => void}
 */
export const useTimedMessage = (duration = 2000) => {
  // state
  const [isDisplayed, setIsDisplayed] = useState(false);

  // comportements
  const displayMessage = () => {
    setIsDisplayed(true);
    setTimeout(() => {
      setIsDisplayed(false);
    }, duration);
  };

  return { isDisplayed, displayMessage };
};
