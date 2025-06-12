import React from "react";
import { ModalContainer } from "./ModalContainer";


export const MatchModal = ({collapse}) => {
    return (
        <ModalContainer>

            <button onClick={collapse}>
                <img src="/src/assets/arrows/arrow-collapse.svg" className="size-10 cursor-pointer absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"></img>
            </button>

            

        </ModalContainer>
    )
}