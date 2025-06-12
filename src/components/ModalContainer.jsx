import React from "react";
import { motion } from "framer-motion";

export const ModalContainer = ({children}) => {
    return (
        <motion.div 
        className="backdrop-blur-md fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        >
        <motion.div
        className="modal-gradient w-full max-w-[860px] h-190 mx-8 rounded-3xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        >

        {children}

        </motion.div>
        </motion.div>
    )
}