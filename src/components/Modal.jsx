import React from "react";

export const Modal = ({children}) => {
    return (
        <div className="z-2 backdrop-blur-md h-screen w-screen flex justify-center items-center">
        <div className="modal-gradient w-170 h-180 m-3 rounded-3xl">
            {children}
        </div>
        </div>
    )
}