import React from "react";

export const MatchCard = ({children}) => {
    return (
        <div className="card card-gradient min-w-72 min-h-64 m-3 rounded-3xl relative">
            <div className="card-divider h-50 absolute top-7 right-36"></div>
            {children}
        </div>
    );
};