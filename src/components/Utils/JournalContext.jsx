import React,{ createContext, useContext, useState} from "react";

export const JournalContext = createContext(null);


export const JournalProvider = ({children}) => {
    const [journalEntries, setJournalEntries] = useState({});

    const addJournalEntry = (entryKey, entryData) => {
        setJournalEntries((prevEntries)=>({
            ...prevEntries,
            [entryKey]: entryData
        }));
    };

    return (
        <JournalContext.Provider value={{journalEntries, addJournalEntry}}>
            {children}
        </JournalContext.Provider>
    );
};

