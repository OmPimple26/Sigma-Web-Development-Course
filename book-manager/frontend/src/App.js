import React, { useEffect, useState } from "react";

export default function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // edit state
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");

  // Fetch all books
  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // Add new book
  const addBook = async () => {
    if (!title.trim() || !author.trim()) return;
    const res = await fetch("http://localhost:5000/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title.trim(), author: author.trim() }),
    });
    const newBook = await res.json();
    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  // Start editing
  const startEdit = (book) => {
    setEditingId(book.id);
    setEditTitle(book.title);
    setEditAuthor(book.author);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditAuthor("");
  };

  // Save edited book (PUT)
  const saveEdit = async (id) => {
    if (!editTitle.trim() || !editAuthor.trim()) return;
    const res = await fetch(`http://localhost:5000/api/books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: editTitle.trim(), author: editAuthor.trim() }),
    });

    if (!res.ok) {
      console.error("Failed to update book");
      return;
    }

    const updated = await res.json();
    setBooks(books.map((b) => (b.id === id ? updated : b)));
    cancelEdit();
  };

  // Delete book
  const deleteBook = async (id) => {
    await fetch(`http://localhost:5000/api/books/${id}`, { method: "DELETE" });
    setBooks(books.filter((b) => b.id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">📚 Book Manager</h1>

      {/* Add Book */}
      <div className="flex flex-wrap gap-2 mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          placeholder="Book Title"
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-2 rounded"
          placeholder="Author"
        />
        <button
          onClick={addBook}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* List Books */}
      <ul className="space-y-2">
        {books.map((book) => {
          const isEditing = editingId === book.id;
          return (
            <li
              key={book.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border p-3 rounded"
            >
              {isEditing ? (
                <div className="flex flex-wrap items-center gap-2 w-full">
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="border p-2 rounded flex-1 min-w-[200px]"
                    placeholder="Title"
                  />
                  <input
                    value={editAuthor}
                    onChange={(e) => setEditAuthor(e.target.value)}
                    className="border p-2 rounded flex-1 min-w-[200px]"
                    placeholder="Author"
                  />
                </div>
              ) : (
                <span>
                  <strong>{book.title}</strong> by {book.author}
                </span>
              )}

              <div className="flex gap-2">
                {isEditing ? (
                  <>
                    <button
                      onClick={() => saveEdit(book.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-gray-300 px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => startEdit(book)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteBook(book.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}