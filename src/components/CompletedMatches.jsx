import React from "react";
import { useMatches } from "../hooks/useMatches";
import { MatchCard } from "./MatchCard";
import { CardsContainer } from "./CardsContainer";

export const CompletedMatches = () => {
    const { matches } = useMatches();

    return (
        
        <CardsContainer title="Completed Matches" onViewAll=".">

             <MatchCard 
             p1Flag="🇮🇹"
             p1Name="Jannik Sinner"
             p2Flag="🇫🇷"
             p2Name="Ugo Humbert"
             ball="r16"

             tournament="London"
             tour="ATP"
             level="500"
             scoreTime="Mensik def. Fils • 7-6 3-6 6-1"
             > 
             </MatchCard>


                <MatchCard></MatchCard>
                <MatchCard></MatchCard>
                <MatchCard></MatchCard>
                <MatchCard></MatchCard>
                <MatchCard></MatchCard>
                <MatchCard></MatchCard>
                <MatchCard></MatchCard>

        </CardsContainer>
    );
};