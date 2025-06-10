import React, { useRef } from "react";
import { useMatches } from "../hooks/useMatches";
import { MatchCard } from "./MatchCard";

export const CompletedMatches = () => {
    const { matches } = useMatches();

    const scrollRef = useRef(null);

    return (
        <div className="bg-[var(--eggplant)] w-190 h-90 rounded-3xl relative mb-16">

            <h1 className="capitalize text-white text-xl goldman-regular prevent-select mt-4 ml-7">Completed matches</h1>

            <button onClick={() => scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })}>
                <img src="/src/assets/arrows/arrow-prev.svg" className="absolute left-0 top-32 size-9 cursor-pointer"></img>
            </button>

            <div ref={scrollRef} className="overflow-x-scroll no-scrollbar flex flex-row gap-4 px-7">

                <MatchCard>
                    <section className="flex gap-16 justify-center">
                    
                    <div className="flex-col text-white card-text">
                    <section className="flex gap-1">
                    <div>🇮🇹</div>
                    <div>Jannik Sinner</div>
                    </section>

                    <section className="flex gap-1">
                    <div>🇫🇷</div>
                    <div>Ugo Humbert</div>
                    </section>
                    </div>
                    
                    <section className=" text-white card-text flex gap-1">
                    <div>WTA London, Great Britain Women Singles</div>
                    <div>•</div>
                    <div>ATP</div>
                    <div>1000</div>
                    </section>
                    </section>

                    <section className="flex justify-center pt-20">
                    <div className="bg-[var(--chartreuse-yellow)] w-9 h-9 rounded-4xl flex justify-center items-center">
                        <p className="goldman-regular z-2">r16</p>
                    </div>
                    </section>
                </MatchCard>

                
            </div>

            <button onClick={() => scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })}>
                <img src="/src/assets/arrows/arrow-next.svg" className="absolute right-0 top-32 size-9 cursor-pointer"></img>
            </button>

        </div>
    );
};