import React, { useState, useEffect } from "react";
import { useMatches } from "../hooks/useMatches";
import { MatchCard } from "./MatchCard";
import { CardsContainer } from "./CardsContainer";
import { MatchListModal } from "./MatchListModal";
import { MatchModal } from "./MatchModal";
import { AnimatePresence } from "framer-motion";

export const CompletedMatches = () => {
    const { matches } = useMatches();
    const [expandList, setExpandList] = useState(false);
    const [expandMatch, setExpandMatch] = useState(false);

    const fullList = () => {
        setExpandList(!expandList);
    };

    const fullMatch = () => {
        setExpandMatch(!expandMatch);
    }
    
    useEffect(() => {
        if (expandList) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [expandList]);


    return (
        <>
        
        <CardsContainer title="Completed Matches" onViewAll={fullList}>

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
        {expandList && <MatchListModal collapse={fullList}></MatchListModal>}
        </AnimatePresence>
        
        <AnimatePresence>
        {expandMatch && <MatchModal collapse={fullMatch}></MatchModal>}
        </AnimatePresence>

        </>
    );
};