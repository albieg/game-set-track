import React from "react";

export const MatchCard = ({children}) => {
    return (
        <div className="card card-gradient min-w-45 min-h-45 m-3 rounded-3xl">
            {children}
        </div>
    );
};