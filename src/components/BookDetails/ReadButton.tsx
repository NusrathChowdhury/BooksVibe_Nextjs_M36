'use client';

import React, { useContext } from 'react';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/book.type';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: IBook }) => {

    const { readBooks, setReadBooks } = useContext(BooksContext);

    const handleReadBook = () => {
        setReadBooks([...readBooks, book]);
        toast.success(`You have read the ${book.bookName}`)
    };

    return (
        <button
            onClick={handleReadBook}
            className="btn btn-primary"
        >
            Read
        </button>
    );
};

export default ReadButton;