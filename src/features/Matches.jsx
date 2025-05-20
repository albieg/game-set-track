import { useEffect, useState } from "react";


export default function Matches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const getMatches = async () => {
      setLoading(true);
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          const filtered = result.events.filter(i =>
            [2000, 1000, 500, 250].includes(i?.tournament?.uniqueTournament?.tennisPoints) &&
            [1].includes(i?.homeTeam?.type)
          );
          console.log(filtered);
          setMatches(filtered);
          setLoading(false);
        } catch (error) {
          console.error(error);
        };
    };

    getMatches();
  }, []);
  

  return (
    <>
    </>
  );
}

/*
<div className="p-4">
      <h2 className="text-xl font-bold mb-4">Matches</h2>
      {loading ? (
        <p>Loading...</p>
      ) : matches.length === 0 ? (
        <p>No upcoming matches found.</p>
      ) : (
        <ul className="space-y-2">
          {matches.map((match) => (
            <li key={match.id} className="border p-3 rounded shadow">
              <div className="font-medium">{match.uniqueTournament.name}</div>
              <div className="text-sm">
                Category: {match.uniqueTournament.category.name.toUpperCase()}
              </div>
              <div className="text-sm italic">
                Round: {match.roundInfo.round}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    */