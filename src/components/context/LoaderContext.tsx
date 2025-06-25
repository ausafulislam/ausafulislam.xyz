"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

const LoaderContext = createContext({ isLoading: true });

export const LoaderProvider = ({ duration = 5000, children }: { duration?: number, children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), duration);
        return () => clearTimeout(timeout);
    }, [duration]);

    return (
        <LoaderContext.Provider value={{ isLoading }}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader = () => useContext(LoaderContext);
