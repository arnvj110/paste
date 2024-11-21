// EntrySlide.js
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner'; 

const EntrySlide = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const [hasEntered, setHasEntered] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        const entryTimer = setTimeout(() => {
            setHasEntered(true);
        }, 0); 

        const stayTimer = setTimeout(() => {
            setShowSpinner(true);
        }, 1000); 

        const exitTimer = setTimeout(() => {
            setShowSpinner(false);
            setIsExiting(true);
        }, 5000); 

        const finalExitTimer = setTimeout(() => {
            setIsVisible(false);
            onComplete();
        }, 6000); 

        return () => {
            clearTimeout(entryTimer);
            clearTimeout(stayTimer);
            clearTimeout(exitTimer);
            clearTimeout(finalExitTimer);
        };
    }, [onComplete]);

    return (
        <div
            className={`fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-3xl transition-transform duration-1000 ease-in-out 
                ${!hasEntered ? '-translate-x-full' : isExiting ? 'translate-x-full' : 'translate-x-0'}`}
        >
            <h1 className="mb-4">Welcome User...</h1>
            {showSpinner && (
                <div className="mt-2 flex justify-center">
                    <Spinner />
                </div>
            )}
        </div>
    );
};

export default EntrySlide;
