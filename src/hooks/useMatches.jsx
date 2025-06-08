import { useContext } from "react";
import { MatchContext } from "../contexts/MatchesContext";

export const useMatches = () => {
  const context = useContext(MatchContext);
  if (!context) {
    throw new Error("useMatches must be used within a MatchesProvider");
  }
  return context;
};