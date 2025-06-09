import React, { useRef } from "react";
import { useMatches } from "../hooks/useMatches";
import { MatchCard } from "./MatchCard";

export const CompletedMatches = () => {
    const { matches } = useMatches();

    const scrollRef = useRef(null);

    return (
        <div className="bg-[var(--eggplant)] w-190 h-72 rounded-3xl relative mb-16">

            <h1 className="capitalize text-white text-xl goldman-regular prevent-select mt-4 ml-7">Completed matches</h1>

            <button onClick={() => scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })}>
                <img src="/src/assets/arrows/arrow-prev.svg" className="absolute left-0 top-32 size-9 cursor-pointer"></img>
            </button>

            <div ref={scrollRef} className="overflow-x-scroll no-scrollbar flex flex-row gap-4 px-7">

                <MatchCard></MatchCard>
                <MatchCard></MatchCard>
                <MatchCard></MatchCard>
                <MatchCard></MatchCard>
                <MatchCard></MatchCard>
                <MatchCard></MatchCard>
                <MatchCard></MatchCard>
                
            </div>

            <button onClick={() => scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })}>
                <img src="/src/assets/arrows/arrow-next.svg" className="absolute right-0 top-32 size-9 cursor-pointer"></img>
            </button>

        </div>
    );
};