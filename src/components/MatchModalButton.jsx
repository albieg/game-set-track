import React, {useState} from "react";

export const ModalButton = ({matchIsUpcoming, onAddToWatchlist, onMarkAsWatched}) => {
    const [checkmark, setCheckmark] = useState(false);
        
    const toggle = () => {
        setCheckmark(!checkmark)
    }

    return (
        <section>
            <div className=" text-white text-xs absolute top-17/20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-4">
                {
                checkmark ?
                matchIsUpcoming ? "Add to Watchlist" : "Mark as Watched"
                : 
                matchIsUpcoming ? "On your Watchlist" : "Watched"
                }
                </div>

                <button onClick={() => {
                    toggle(); 
                    matchIsUpcoming ? onAddToWatchlist() : onMarkAsWatched(); 
                    }} 
                    className="cursor-pointer absolute top-9/10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

                    <img src={checkmark ? "/src/assets/ui-icons/add-option.svg" : "/src/assets/ui-icons/checkmark.svg"} className="size-10"></img>

                </button>
            </section>
    );

};