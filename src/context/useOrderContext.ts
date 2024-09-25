import { useContext } from "react";
import { OrderContext } from "./OrderContext";

// custom hook to use the order context in any component with only one import
export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within an OrderContextProvider");
  }
  return context;
};
