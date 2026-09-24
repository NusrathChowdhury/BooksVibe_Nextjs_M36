# 📚 BookVibes

A modern book management and discovery web application built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

Users can explore books, view detailed information, mark books as read, add books to their wishlist, and view their reading list with a chart.

## 🚀 Live Demo

[Coming soon...](https://books-vibe-nextjs-m36.vercel.app/)

## ✨ Features

* 📚 Browse all available books
* 🔍 View individual book details
* 📖 Add books to the Read Books list
* ❤️ Add books to the Wishlist
* 📊 Visualize read books with a bar chart
* ⭐ Display book ratings
* 🏷️ Display book categories and tags
* 📱 Responsive design for mobile, tablet, and desktop
* 🎨 Modern UI with Tailwind CSS and daisyUI
* ⚡ Built with Next.js App Router

## 🛠️ Technologies Used

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **daisyUI**
* **Recharts**
* **Next Image**
* **Context API**
* **JSON**

## 📂 Project Structure

```text
src
├── app
│   ├── books
│   │   ├── page.tsx
│   │   └── [id]
│   │       └── page.tsx
│   ├── listed-books
│   │   └── page.tsx
│   └── ...
│
├── components
│   ├── BookDetails
│   ├── shared
│   │   ├── BookCard
│   │   ├── ListedBooksCard
│   │   └── Footer
│   └── ...
│
├── context
│   └── BooksContext
│
└── types
    └── book.type

public
└── booksData.json
```

## 📖 Main Pages

### Home

Displays featured books and the main website interface.

### All Books

```text
/books
```

Displays all books from the book data.

### Book Details

```text
/books/[id]
```

Displays detailed information about a selected book.

### Listed Books

```text
/listed-books
```

Displays books added to the Read Books list and Wishlist.

## 📊 Reading Chart

The project uses **Recharts** to display read books visually using a bar chart.

The chart is connected to the `BooksContext`, so the displayed data comes from the books selected by the user.

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/NusrathChowdhury/nextjs_DatacCahing_m35.git
```

Go to the project folder:

```bash
cd nextjs_DatacCahing_m35
```

Install dependencies:

```bash
npm install
```

## ▶️ Run Locally

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To run the production version:

```bash
npm start
```

## 📚 Book Data

Book information is stored in:

```text
public/booksData.json
```

Each book contains information such as:

* Book ID
* Book name
* Author
* Image
* Review
* Total pages
* Rating
* Category
* Tags
* Publisher
* Year of publishing

## 🎯 Purpose

This project was created as a practical Next.js project to learn and implement:

* Next.js App Router
* Dynamic routes
* Server and client components
* Data fetching
* React Context API
* State management
* Responsive UI
* Data visualization
* Modern frontend development

## 👩‍💻 Author

**Nusrath Chowdhury**

BSc in Computer Science & Engineering

GitHub:
https://github.com/NusrathChowdhury

---

⭐ If you find this project useful, feel free to explore the repository.
