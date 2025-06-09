import React, { useEffect, useState, useMemo, createContext } from "react";
import { today, yesterday, tomorrow } from "../utils/DatesParams";

export const MatchContext = createContext();

export const MatchesProvider = ({ children }) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
  const timer = setTimeout(() => {
  const getMatches = async () => {
    console.log("🎾 Fetching from frontend useEffect...");
    try {
     // const url = `/api/matches/30/5/2025`; // calling your Express backend now
      const response = await fetch(url);
      console.log("🎾 Fetch complete", response);
       if (!response.ok) {
         const text = await response.text();
         console.error('Error response:', text);
         return; // exit early on error
         }

      const data = await response.json(); 
      setData(data);
      console.log("✅ Match data:", data);
    } catch (error) {
      console.error(error);
    } 
  };
  getMatches();
}, 1000);
return () => clearTimeout(timer);
}, []);

const matches = useMemo(() => {
  return data?.events
      ?.filter(
        (i) =>
          [2000, 1000, 500, 250].includes(
            i?.tournament?.uniqueTournament?.tennisPoints
            ) && [1].includes(i?.homeTeam?.type)
          )
          ?.map((i) => ({
        // TOURNAMENT STATS
        id: i.id,
        tournamentName: i.tournament?.name,
        tour: i.tournament?.category?.name,
        tournamentLevel: i.tournament?.uniqueTournament?.tennisPoints,

        // MATCH INFO
        roundOf: i.roundInfo?.info,
        matchStatus: i.status?.type,
        winner: i.winnerCode,

        ////
        // PLAYER 1 STATS
        player1Name: i.homeTeam?.name,
        player1Id: i.homeTeam?.id,
        player1Country: i.homeTeam?.country?.alpha3,
        player1Type: i.homeTeam?.type,

        // Total sets won by player 1 
        player1SetsWon: i.homeScore?.current,

        // Player 1 First set score 
        player1Set1Score: i.homeScore?.period1,
        player1Set1Breaker: i.homeScore?.period1TieBreak,

        // Player 1 Second set score 
        player1Set2Score: i.homeScore?.period2,
        player1Set2Breaker: i.homeScore?.period2TieBreak,

        // Player 1 Third set score 
        player1Set3Score: i.homeScore?.period3,
        player1Set3Breaker: i.homeScore?.period3TieBreak,

        // Player 1 Fourth set score 
        player1Set4Score: i.homeScore?.period4,
        player1Set4Breaker: i.homeScore?.period4TieBreak,

        // Player 1 Fifth set score 
        player1Set5Score: i.homeScore?.period5,
        player1Set5Breaker: i.homeScore?.period5TieBreak,

        ////
        // PLAYER 2 STATS
        player2Name: i.awayTeam?.name,
        player2Id: i.awayTeam?.id,
        player2Country: i.awayTeam?.country?.alpha3,
        player2Type: i.awayTeam?.type,

        // Total sets won by player 2 
        player2SetsWon: i.awayScore?.current,

        // Player 2 First set score 
        player2Set1Score: i.awayScore?.period1,
        player2Set1Breaker: i.awayScore?.period1TieBreak,

        // Player 2 Second set score 
        player2Set2Score: i.awayScore?.period2,
        player2Set2Breaker: i.awayScore?.period2TieBreak,

        // Player 2 Third set score 
        player2Set3Score: i.awayScore?.period3,
        player2Set3Breaker: i.awayScore?.period3TieBreak,

        // Player 2 Fourth set score 
        player2Set4Score: i.awayScore?.period4,
        player2Set4Breaker: i.awayScore?.period4TieBreak,

        // Player 2 Fifth set score 
        player2Set5Score: i.awayScore?.period5,
        player2Set5Breaker: i.awayScore?.period5TieBreak,

      })) ?? [];
}, [data?.events]);

  return (
    <MatchContext.Provider value={{ matches }}>
      {children}
    </MatchContext.Provider>
  );
}
