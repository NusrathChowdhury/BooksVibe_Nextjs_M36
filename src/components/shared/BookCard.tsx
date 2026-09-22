import { IBook } from '@/types/book.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps {
    book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
    return (
        <article
            className="group bg-white rounded-[28px] p-4 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500"
        >

            {/* Book Cover Area */}
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-[22px] p-6">

                {/* Category */}
                <div className="absolute top-5 left-5 z-10">
                    <span className="bg-white/90 backdrop-blur-md text-emerald-700 text-xs font-bold px-4 py-2 rounded-full shadow-sm">
                        {book.category}
                    </span>
                </div>

                {/* Heart */}
                <button
                    className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center text-gray-500 hover:text-red-500 hover:scale-110 transition"
                >
                    ♡
                </button>

                {/* Image */}
                <div className="h-80 flex items-center justify-center">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={300}
                        height={400}
                        className="h-full w-auto max-w-[80%] object-contain rounded-lg shadow-2xl group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500"
                    />
                </div>

            </div>

            {/* Book Information */}
            <div className="px-2 pt-6 pb-2">

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400 text-sm">
                        ★★★★★
                    </div>

                    <span className="text-sm font-semibold text-gray-700">
                        {book.rating}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-emerald-600 transition">
                    {book.bookName}
                </h3>

                {/* Author */}
                <p className="text-gray-500 mt-1">
                    by{' '}
                    <span className="font-medium text-gray-700">
                        {book.author}
                    </span>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between border-t border-gray-100 mt-5 pt-5">

                    <div>
                        <p className="text-xs text-gray-400">
                            {book.totalPages} pages
                        </p>

                        <p className="text-sm font-semibold text-gray-700">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    {/* IMPORTANT */}
                    <Link href={`/books/${book.bookId}`}>
                        <button className="group/btn flex items-center gap-2 bg-gray-900 hover:bg-emerald-600 text-white text-sm font-semibold px-5 py-3 rounded-full transition-all duration-300">
                            View Details
                            <span className="group-hover/btn:translate-x-1 transition-transform">
                                →
                            </span>
                        </button>
                    </Link>

                </div>

            </div>

        </article>
    );
};

export default BookCard;