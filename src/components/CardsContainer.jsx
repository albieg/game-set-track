import React, { useRef, useState } from "react";



export const CardsContainer = ({title, children, nextDay, prevDay}) => {
    const [date, setDate] = useState("today");
    const scrollRef = useRef(null);


    return (
        <div className="container-gradient relative w-auto h-100 rounded-3xl mb-16 ">

            <h1 className="capitalize text-white text-2xl goldman-regular prevent-select absolute left-16 top-6 mb-7">{title}</h1>

            <section className="text-white/30 border absolute right-16 top-6 rounded-4xl inline-flex items-center p-0 m-0">
            <button 
            onClick={()=>setDate('today')}
            className={date == "today" ? "cursor-pointer button-text text-[var(--chartreuse-yellow)] bg-white/30 py-2 px-3 rounded-3xl leading-none m-0 transition duration-400 ease-in-out" : "cursor-pointer button-text text-white/30 py-2 px-3 rounded-3xl leading-none m-0 transition duration-400 ease-in-out"}>
                TODAY
            </button>

            {nextDay && (
            <button 
            onClick={()=>setDate('tomorrow')}
            className={date == "tomorrow" ? "cursor-pointer button-text text-[var(--chartreuse-yellow)] bg-white/30 py-2 px-3 rounded-3xl leading-none m-0 transition duration-400 ease-in-out" : "cursor-pointer button-text text-white/30 py-2 px-3 rounded-3xl leading-none m-0 transition duration-400 ease-in-out"}>
                TOMORROW
            </button>
            )}
            </section>


            <div className="flex flex-row items-center mt-18"> 

            <button onClick={() => scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })}>
                <img src="/src/assets/ui-icons/arrow-prev.svg" className=" size-30 cursor-pointer"></img>
            </button>

            <div ref={scrollRef} className="overflow-x-scroll no-scrollbar flex flex-row gap-2 snap-x snap-mandatory">

                {children}

            </div>

            <button onClick={() => scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })}>
                <img src="/src/assets/ui-icons/arrow-next.svg" className="size-30 cursor-pointer"></img>
            </button>

            </div>

        </div>
    );
};