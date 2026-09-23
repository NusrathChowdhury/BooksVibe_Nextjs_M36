import ReadButton from "@/components/BookDetails/ReadButton";
import WishListBtn from "@/components/BookDetails/wishListBtn";
import { IBook } from "@/types/book.type";
import Image from "next/image";

interface BookDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getBooks = async () => {
    const res = await fetch(
        'https://books-vibe-nextjs-m36.vercel.app/booksData.json'
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch books: ${res.status}`);
    }

    const data = await res.json();

    return data;
};



const BookDetailPage = async ({ params }: BookDetailPageProps) => {
    const { id } = await params;

    const bookData = await getBooks();

    const book = bookData.find(
        (book: IBook) => String(book.bookId) === String(id)
    ) as IBook;

    return (
        <main className="min-h-screen bg-[#faf9f6] py-16 px-4">

            <div className="max-w-6xl mx-auto">

                {/* Main Card */}
                <div className="relative overflow-hidden rounded-[36px] bg-white border border-gray-100 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

                    {/* Decorative background */}
                    <div className="absolute -top-32 -right-32 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl" />
                    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl" />

                    <div className="relative card lg:card-side">

                        {/* ================= BOOK IMAGE ================= */}
                        <figure className="lg:w-[45%] min-h-[650px] bg-gradient-to-br from-[#f1f2ef] via-[#e7e8e4] to-[#dfe2dc] flex items-center justify-center p-10 lg:p-14">

                            <div className="relative w-full h-[560px] flex items-center justify-center">

                                {/* Soft glow */}
                                <div className="absolute w-[380px] h-[480px] bg-emerald-900/10 blur-3xl rounded-full" />

                                {/* Book */}
                                <Image
                                    src={book.image}
                                    alt={book.bookName}
                                    width={450}
                                    height={600}
                                    className="relative w-auto h-[500px] lg:h-[540px] max-w-[90%] object-contain rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.28)] hover:scale-105 hover:-rotate-1 transition-all duration-500"
                                />

                            </div>

                        </figure>

                        {/* ================= BOOK INFORMATION ================= */}
                        <div className="card-body lg:w-[58%] p-8 md:p-12 lg:p-14">

                            {/* Category + Wishlist */}
                            <div className="flex items-center justify-between">

                                <span className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {book.category}
                                </span>

                                <button className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition">
                                    ♡
                                </button>

                            </div>


                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mt-7">
                                {book.bookName}
                            </h1>


                            {/* Author */}
                            <p className="text-gray-500 text-lg mt-4">
                                Written by{" "}
                                <span className="font-semibold text-gray-800">
                                    {book.author}
                                </span>
                            </p>


                            {/* Rating */}
                            <div className="flex items-center gap-3 mt-6">

                                <div className="flex text-amber-400 text-lg tracking-wide">
                                    ★★★★★
                                </div>

                                <span className="font-bold text-gray-900">
                                    {book.rating}
                                </span>

                                <span className="text-gray-400 text-sm">
                                    Excellent rating
                                </span>

                            </div>


                            {/* Divider */}
                            <div className="border-t border-gray-100 my-7" />


                            {/* Description */}
                            <div>

                                <h2 className="text-lg font-bold text-gray-900 mb-3">
                                    About the book
                                </h2>

                                <p className="text-gray-500 leading-7">
                                    {book.review}
                                </p>

                            </div>


                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-6">

                                {book.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-2 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-semibold rounded-full"
                                    >
                                        #{tag}
                                    </span>
                                ))}

                            </div>


                            {/* Book Information */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">

                                <div className="rounded-2xl bg-[#faf9f6] p-4">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                                        Pages
                                    </p>

                                    <p className="text-lg font-bold text-gray-900 mt-1">
                                        {book.totalPages}
                                    </p>
                                </div>


                                <div className="rounded-2xl bg-[#faf9f6] p-4">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                                        Published
                                    </p>

                                    <p className="text-lg font-bold text-gray-900 mt-1">
                                        {book.yearOfPublishing}
                                    </p>
                                </div>


                                <div className="rounded-2xl bg-[#faf9f6] p-4 col-span-2 md:col-span-1">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                                        Publisher
                                    </p>

                                    <p className="text-sm font-bold text-gray-900 mt-2 truncate">
                                        {book.publisher}
                                    </p>
                                </div>

                            </div>


                            {/* Bottom Action */}
                            <div className="flex flex-col sm:flex-row gap-3 mt-9">
                                <ReadButton book={book}></ReadButton>
                                <WishListBtn book={book}></WishListBtn>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
};

export default BookDetailPage;