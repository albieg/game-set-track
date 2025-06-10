import React, { useRef, useState } from "react";
import { useMatches } from "../hooks/useMatches";
import { MatchCard } from "./MatchCard";
import { flag } from "../utils/CountryFlags";
import { RoundAbbr } from "../utils/RoundAbbr";

export const UpcomingMatches = () => {
    const { matches } = useMatches();
    const [expanded, setExpanded] = useState(false);

    const scrollRef = useRef(null);
    

    function Expand() {
        setExpanded(i => !i)
    }

    return (
        <div className="bg-[var(--eggplant)] w-190 h-90 rounded-3xl relative mb-3">

            <h1 className="capitalize text-white text-xl goldman-regular prevent-select mt-4 ml-7 ">Upcoming matches</h1>

            <button onClick={() => scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })}>
                <img src="/src/assets/arrows/arrow-prev.svg" className="absolute left-0 top-32 size-9 cursor-pointer"></img>
            </button>

            <div ref={scrollRef} className="overflow-x-scroll no-scrollbar flex flex-row gap-4 px-6">
                {matches.map((match, i) => 
                match.matchStatus !== "finished" ? (
                <MatchCard key={i}>
                    <section className="flex gap-16 justify-center relative">
                    
                    <div className="flex-col text-white card-text">
                    <section className="flex gap-1">
                    <div>{flag[match.player1Country] || "🏳️"}</div>
                    <div>{match.player1Name}</div>
                    </section>

                    <section className="flex gap-1">
                    <div>{flag[match.player2Country] || "🏳️"}</div>
                    <div>{match.player2Name}</div>
                    </section>
                    </div>
                    
                    <section className=" text-white card-text flex gap-1 whitespace-nowrap">
                    <div>{match.tournamentName}</div>
                    <div>•</div>
                    <div>{match.tour}</div>
                    <div>{match.tournamentLevel}</div>
                    </section>
                    </section>

                    <section className="flex justify-center">
                    <div className="bg-[var(--chartreuse-yellow)] w-9 h-9 rounded-4xl flex justify-center items-center absolute top-45">
                        <p className="goldman-regular z-2">{RoundAbbr[match.roundOf]}</p>
                        <div className="card-divider h-45 absolute"></div>
                    </div>
                    </section>
                </MatchCard>): null 
                )}
            </div>

            <button onClick={() => scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })}>
                <img src="/src/assets/arrows/arrow-next.svg" className="absolute right-0 top-32 size-9 cursor-pointer"></img>
            </button>

        </div>
    );
};