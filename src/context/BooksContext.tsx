'use client';

import { createContext, useState, type ReactNode } from 'react';

export const BooksContext = createContext({});

const BooksProvider = ({ children }: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const sheardData = {
        readBooks,
        setReadBooks,
        wishList,
        setWishList,
    };

    return (
        <BooksContext.Provider value={sheardData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;