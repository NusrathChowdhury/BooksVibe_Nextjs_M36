'use client';

import ListedBooksCard from '@/components/shared/ListedBooksCard';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/book.type';
import React, { useContext, useState } from 'react';

const Listedpage = () => {
    const { readBooks, wishList } = useContext(BooksContext);

    const [sortBy, setSortBy] = useState<'rating' | 'pages' | 'year'>('rating');

const sortBooks=(books:IBook[])=>{
    const sortedBooks=[...books];
    if(sortBy==='rating'){
        sortedBooks.sort((a,b)=>b.rating-a.rating)
    }
    else if(sortBy==='pages'){
        sortedBooks.sort((a,b)=>a.totalPages-b.totalPages)
    }
    else if(sortBy==='year'){
        sortedBooks.sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing)
    }
    return sortedBooks
}

        const sortedReadBooks=sortBooks(readBooks)
        const sortedWishList=sortBooks(wishList)
    return (
        <div className="max-w-4xl mx-auto py-5">

            {/* Page Title */}
            <h2 className="my-4 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center">
                Listed Books
            </h2>

            <div className="text-center">
                <select
                    value={sortBy}
                    onChange={(e) =>
                        setSortBy(e.target.value as 'rating' | 'pages' | 'year')
                    }
                    className="select select-success"
                >
                    <option value="rating">Rating</option>
                    <option value="pages">Number of Pages</option>
                    <option value="year">Published Year</option>
                </select>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-border">

                {/* Read Books */}
                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab"
                    aria-label={`Read Books (${readBooks.length})`}
                    defaultChecked
                />

                {/* Read Books Content */}
                <div className="tab-content border-base-300 bg-base-100 p-5">

                    {sortedReadBooks.length > 0 ? (
                        sortedReadBooks.map((book: IBook, index: number) => {
                            return (
                                <ListedBooksCard
                                    key={`${book.bookId}-${index}`}
                                    book={book}
                                />
                            );
                        })
                    ) : (
                        <p className="text-center text-lg font-semibold py-10">
                            No Read Books Found
                        </p>
                    )}

                </div>

                {/* Wishlist Books */}
                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab"
                    aria-label={`Wishlist Books (${wishList.length})`}
                />

                {/* Wishlist Content */}
                <div className="tab-content border-base-300 bg-base-100 p-5">

                    {sortedWishList.length > 0 ? (
                        sortedWishList.map((book: IBook, index: number) => {
                            return (
                                <ListedBooksCard
                                    key={`${book.bookId}-${index}`}
                                    book={book}
                                />
                            );
                        })
                    ) : (
                        <p className="text-center text-lg font-semibold py-10">
                            No Wishlist Books Found
                        </p>
                    )}

                </div>

            </div>

        </div>
    );
};

export default Listedpage;
