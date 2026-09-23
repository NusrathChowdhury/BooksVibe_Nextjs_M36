import { IBook } from '@/types/book.type';
import Image from 'next/image';
import React from 'react';

interface ListedBooksCardProps {
    book: IBook;
}

const ListedBooksCard = ({ book }: ListedBooksCardProps) => {
    return (
        <div className="flex gap-5 p-5 mb-5 border border-base-300 rounded-xl bg-base-100 shadow-sm">

            {/* Book Image */}
            <div className="w-32 h-44 shrink-0">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={128}
                    height={176}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Book Information */}
            <div className="flex flex-col justify-center gap-2">

                <h3 className="text-2xl font-bold">
                    {book.bookName}
                </h3>

                <p className="text-gray-600">
                    By: {book.author}
                </p>

                <p>
                    Category: {book.category}
                </p>

                <p>
                    Rating: ⭐ {book.rating}
                </p>

            </div>

        </div>
    );
};

export default ListedBooksCard;
