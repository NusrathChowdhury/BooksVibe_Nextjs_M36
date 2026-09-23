import BookCard from '@/components/shared/BookCard';
import { IBook } from '@/types/book.type';

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

const BooksPage = async () => {
    const books: IBook[] = await getBooks();

    return (
        <div className="max-w-6xl mx-auto py-10">
            <h1 className="text-4xl font-bold text-center mb-10">
                All Books
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book: IBook) => (
                    <BookCard
                        key={book.bookId}
                        book={book}
                    />
                ))}
            </div>
        </div>
    );
};

export default BooksPage;
