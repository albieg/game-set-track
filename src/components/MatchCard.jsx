import React from "react";

export const MatchCard = ({ onExpand, p1Flag, p1Name, p2Flag, p2Name, tournament, tour, level, scoreTime, ball }) => {
    return (
        <div onClick={onExpand} className="card bg-black/10 backdrop-blur-xs min-w-72 max-w-72 min-h-64 m-3 rounded-3xl relative snap-center shrink-0 cursor-pointer">

            <div className="card-divider h-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

            <section className="flex justify-center">
                    
                    <div className="flex flex-col absolute left-6 top-6 text-white card-text gap-1">

                    <section className="flex gap-1 justify-start">
                    <div>{p1Flag}</div>
                    <div>{p1Name}</div>
                    </section>

                    <section className="flex gap-1 justify-start">
                    <div>{p2Flag}</div>
                    <div>{p2Name}</div>
                    </section>

                    </div>
                    
                    <div className="flex flex-col text-white absolute right-6 top-6 gap-1">
                    <section className="flex gap-1 justify-end card-text">
                    <div>{tournament}</div>
                    <div>•</div>
                    <div>{tour}</div>
                    <div>•</div>
                    <div>{level}</div>
                    </section>

                    <section className="flex gap-1 justify-end small-text">
                    <div>{scoreTime}</div>
                    </section>
                    </div>
                    

                    </section>

                    <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-[var(--chartreuse-yellow)] w-9 h-9 rounded-4xl flex justify-center items-center">
                        <p className="goldman-regular z-2">{ball}</p>
                    </div>
                    </section>
        </div>
    );
};