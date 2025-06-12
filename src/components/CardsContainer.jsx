import React, { useRef } from "react";


export const CardsContainer = ({title, children, onViewAll}) => {

    const scrollRef = useRef(null);

    return (
        <div className="container-gradient relative w-auto h-100 rounded-3xl mb-16">

            <h1 className="capitalize text-white text-xl goldman-regular prevent-select absolute left-14 top-6  mb-7">{title}</h1>

            {onViewAll && (
            <button onClick={onViewAll} className="cursor-pointer button-text text-[var(--chartreuse-yellow)] border absolute right-14 top-6 py-1 px-5 rounded-3xl">VIEW ALL</button>
            )}

            <div className="flex flex-row items-center mt-18"> 

            <button onClick={() => scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })}>
                <img src="/src/assets/arrows/arrow-prev.svg" className=" size-30 cursor-pointer"></img>
            </button>

            <div ref={scrollRef} className="overflow-x-scroll no-scrollbar flex flex-row gap-2 snap-x snap-mandatory">

                {children}

            </div>

            <button onClick={() => scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })}>
                <img src="/src/assets/arrows/arrow-next.svg" className="size-30 cursor-pointer"></img>
            </button>

            </div>

        </div>
    );
};