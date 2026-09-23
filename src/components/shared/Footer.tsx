import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white mt-20">
            <div className="max-w-6xl mx-auto px-5 py-14">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="text-3xl font-bold tracking-tight"
                        >
                            Book<span className="text-emerald-400">Nest</span>
                        </Link>

                        <p className="text-gray-400 mt-5 leading-7 max-w-sm">
                            Discover your next favorite book, keep track of
                            your reading journey, and build your personal
                            collection.
                        </p>

                        <div className="flex gap-3 mt-6">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition"
                            >
                                f
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition"
                            >
                                X
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition"
                            >
                                in
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition"
                            >
                                ◎
                            </a>
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5">
                            Explore
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-emerald-400 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/books"
                                    className="hover:text-emerald-400 transition"
                                >
                                    All Books
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/listed-books"
                                    className="hover:text-emerald-400 transition"
                                >
                                    Listed Books
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-emerald-400 transition"
                                >
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Reading */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5">
                            Your Reading
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li className="hover:text-emerald-400 transition cursor-pointer">
                                Read Books
                            </li>

                            <li className="hover:text-emerald-400 transition cursor-pointer">
                                Wishlist
                            </li>

                            <li className="hover:text-emerald-400 transition cursor-pointer">
                                Reading Progress
                            </li>

                            <li className="hover:text-emerald-400 transition cursor-pointer">
                                Discover Books
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-5">
                            Stay Connected
                        </h3>

                        <p className="text-gray-400 leading-6 mb-5">
                            Get book recommendations and reading inspiration
                            delivered to your inbox.
                        </p>

                        <div className="flex bg-white/10 rounded-full p-1 border border-white/10">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-transparent outline-none px-4 w-full text-sm text-white placeholder:text-gray-500"
                            />

                            <button className="bg-emerald-500 hover:bg-emerald-400 px-5 py-2 rounded-full text-sm font-semibold transition whitespace-nowrap">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-10"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>
                        © {new Date().getFullYear()} BookNest. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link
                            href="/privacy"
                            className="hover:text-white transition"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="hover:text-white transition"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
