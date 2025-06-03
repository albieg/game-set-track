import { useEffect, useState } from "react";
import { today, yesterday, tomorrow } from "../utils/DatesParams";


export default function Matches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
  const getMatches = async () => {
    setLoading(true);
    try {
      const url = `/api/matches/30/5/2025`; // calling your Express backend now

      console.log("Fetching from URL:", url);

      const response = await fetch(url);
      console.log('Response status:', response.status);

       if (!response.ok) {
         const text = await response.text();
         console.error('Error response:', text);
         setLoading(false);
         return; // exit early on error
         }

      const data = await response.json(); // now we expect JSON here
      console.log('API response data:', data);
      
      const filtered = data.events.filter(i =>
        [2000, 1000, 500, 250].includes(i?.tournament?.uniqueTournament?.tennisPoints) &&
        [1].includes(i?.homeTeam?.type)
      );
      console.log(filtered);
      setMatches(filtered);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  getMatches();
}, []);


  return (
    <>
    {loading && <p className="text-amber-50">Loading matches...</p>}
    {(matches.length === 0) && <p className="text-amber-50">No matches found.</p>}

    <p className="text-amber-50">{matches.homeTeam}</p>
    
    </>
  );
}
