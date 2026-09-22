interface BookDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const BookDetailPage = async ({ params }: BookDetailPageProps) => {
    const { id } = await params;

    return (
        <div className="max-w-6xl mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold">
                Book ID: {id}
            </h1>
        </div>
    );
};

export default BookDetailPage;