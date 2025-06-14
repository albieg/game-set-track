import React, {useState} from "react";
import { ModalContainer } from "./ModalContainer";
import { ModalButton } from "./MatchModalButton";


export const MatchModal = ({collapse}) => {
    return (
        <ModalContainer>

            <button onClick={collapse}>
                <img src="/src/assets/ui-icons/arrow-collapse.svg" className="size-10 cursor-pointer absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"></img>
            </button>

            <section className="flex flex-col items-center mt-10 text-xs">
            <div className="flex flex-col text-white ">
                <section className="flex gap-1  mb-3">
                    <div>Miami</div>
                    <div>•</div>
                    <div>ATP</div>
                    <div>•</div>
                    <div>1000</div>
                </section>
            </div>

            <div className="flex flex-col text-white">
                <section className="flex gap-1">
                    <div>Today</div>
                    <div>•</div>
                    <div>8:00 PM</div>
                </section>
            </div>
            </section>


            <section className="flex flex-row justify-center gap-72 text-white text-md mt-16">
                <section className="flex gap-1">
                    <div>🇫🇷</div>
                    <div>A. Fils</div>
                </section>
                <section className="flex gap-1">
                    <div>🇨🇿</div>
                    <div>J. Mensik</div>
                </section>
            </section>

            <section className="absolute top-7/10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="bg-[var(--chartreuse-yellow)] w-32 h-9 rounded-4xl flex justify-center items-center">
                <p className="goldman-regular">Round of 128</p>
            </div>
            </section>
            <div className="modal-divider w-150 absolute top-7/10 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

            <ModalButton></ModalButton>

        </ModalContainer>
    )
}