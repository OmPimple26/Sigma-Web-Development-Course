const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Fake database
let books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho" },
];

// GET all books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// GET single book
app.get("/api/books/:id", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
});

// POST create new book
app.post("/api/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update book
app.put("/api/books/:id", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: "Book not found" });

  book.title = req.body.title;
  book.author = req.body.author;
  res.json(book);
});

// DELETE book
app.delete("/api/books/:id", (req, res) => {
  books = books.filter(b => b.id !== parseInt(req.params.id));
  res.json({ message: "Book deleted" });
});

// Start server
app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
