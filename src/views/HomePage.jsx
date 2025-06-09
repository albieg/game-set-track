import React from "react";
import { UpcomingMatches } from "../components/UpcomingMatches";
import { CompletedMatches } from "../components/CompletedMatches";
import { HeroSection } from "../components/HeroSection";

export default function HomePage(){
    return(
        <div className="grid place-content-center">
            <HeroSection></HeroSection>
            <UpcomingMatches></UpcomingMatches>
            <CompletedMatches></CompletedMatches>
        </div>
    )
}