'use client';

import React, { useContext } from 'react';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/book.type';
import { toast } from 'react-toastify';

const WishListBtn = ({ book }: { book: IBook }) => {

    const { wishList,
        setWishList } = useContext(BooksContext);

    const handleAddToWisHList = () => {
        setWishList([...wishList, book]);
        toast.success(`You have read the ${book.bookName}`)
    };

    return (
        <button
            onClick={handleAddToWisHList}
            className="btn btn-primary"
        >
            Add To Wishlist
        </button>
    );
};

export default WishListBtn;