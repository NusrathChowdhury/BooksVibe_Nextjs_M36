import React from 'react';
import BookCard from '../shared/BookCard';
import { IBook } from '@/types/book.type';

const getBooks = async () => {
    const res = await fetch('http://localhost:3000/booksData.json');
    const data = await res.json();
    return data;
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="bg-[#faf9f6] py-20 px-4">

            {/* Section Header */}
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-14">
                    <p className="text-emerald-600 font-semibold tracking-[0.2em] uppercase text-sm">
                        Curated Collection
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                        Find Your Next
                        <span className="text-emerald-600"> Favorite Book</span>
                    </h2>

                    <p className="text-gray-500 max-w-2xl mx-auto mt-5 leading-relaxed">
                        Lose yourself in unforgettable stories, discover new
                        perspectives, and find books that stay with you.
                    </p>
                </div>


                {/* Book Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {booksData.slice(0,9).map((book:IBook,ind:number) => {

                        return <BookCard key={ind} book={book} />

                    })}

                </div>

            </div>

        </section>
    );
};

export default Books;
