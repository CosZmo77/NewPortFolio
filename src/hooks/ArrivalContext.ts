import { createContext, useContext } from "react";

export const ArrivalContext = createContext(true);
export const useArrivalReady = () => useContext(ArrivalContext);
