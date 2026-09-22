import React from 'react';
import bannerimg from '@/assets/hero_img.jpg';
import Image from 'next/image';

const Bannner = () => {
    return (
        <section className="py-10 md:py-16 px-4">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-emerald-50 via-white to-green-100 rounded-3xl p-6 md:p-10 shadow-xl overflow-hidden">

                {/* Left Content */}
                <div className="space-y-6 md:pl-6">

                    <div className="inline-block">
                        <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                            Discover Your Next Read
                        </span>
                    </div>

                    <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900">
                        Books to freshen up
                        <span className="text-emerald-600 block">
                            your bookshelf
                        </span>
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg max-w-md leading-relaxed">
                        Explore inspiring stories, timeless classics, and
                        exciting new reads. Find your next favorite book today.
                    </p>

                    <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none rounded-full px-7">
                        View The Task
                        <span className="text-lg">→</span>
                    </button>

                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <Image
                        src={bannerimg}
                        alt="Books on a bookshelf"
                        className="w-full max-w-md rounded-2xl object-cover shadow-lg"
                    />
                </div>

            </div>

        </section>
    );
};

export default Bannner;
