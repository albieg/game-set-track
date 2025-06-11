import React from "react";
import { UpcomingMatches } from "../components/UpcomingMatches";
import { CompletedMatches } from "../components/CompletedMatches";
import { HeroSection } from "../components/HeroSection";

export default function HomePage() {
    return(
        <div className="flex flex-col mx-auto max-w-[1280px] px-4">
            <HeroSection></HeroSection>
            <CompletedMatches></CompletedMatches>
        </div>
    );
};