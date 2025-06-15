import React, { useState, useEffect } from "react";
import { useMatches } from "../hooks/useMatches";
import { MatchCard } from "./MatchCard";
import { CardsContainer } from "./CardsContainer";
import { MatchModal } from "./MatchModal";
import { AnimatePresence } from "framer-motion";

export const CompletedMatches = () => {
    const { matches } = useMatches();
    const [nextDay, setNextDay] = useState(false);
    const [expandMatch, setExpandMatch] = useState(false);

    const tomorrow = () => {
        setNextDay(!nextDay)
    };

    const fullMatch = () => {
        setExpandMatch(!expandMatch);
    }
    
    useEffect(() => {
        if (expandMatch) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [expandMatch]);


    return (
        <>
        
        <CardsContainer title="Completed Matches" nextDay={tomorrow}>

             <MatchCard 
             onExpand={fullMatch}
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
                <MatchCard ></MatchCard>
                <MatchCard></MatchCard>
                <MatchCard></MatchCard>
                <MatchCard></MatchCard>
                <MatchCard></MatchCard>
        </CardsContainer>
        
        <AnimatePresence>
        {expandMatch && <MatchModal collapse={fullMatch}></MatchModal>}
        </AnimatePresence>

        </>
    );
};