import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header className="w-lvw flex justify-center p-6">
            <Link to={"/HomePage"}>
            <h1 className="text-(--chartreuse-yellow) text-4xl goldman-regular prevent-select">Game, Set, Track</h1>
            </Link>
        </header>
    )
}