
'use client';

import { createContext, useState, type ReactNode } from 'react';
import { IBook } from '@/types/book.type';

interface IBookContext {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    wishList: IBook[];
    setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<IBookContext>({
    readBooks: [],
    setReadBooks: () => {},
    wishList: [],
    setWishList: () => {},
});
const BooksProvider = ({ children }: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([]);
    const [wishList, setWishList] = useState<IBook[]>([]);

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
