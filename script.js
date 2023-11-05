const bookList = document.getElementById("book-list");
const addBookButton = document.getElementById("add-button");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Sample book data (you can load this from a server or a database)
const books = [
    { title: " Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari",ISBN:36384490 },
    { title: " Untamed", author: " Glennon Doyle" ,ISBN:368938639390},
    { title: " Principle", author: " Ray Dalio", ISBN:936389202837},
    { title: " Mindset", author: " Carol S. Dweck",ISBN:3639449400390 },
    { title: " The 7 Habits of Highly Effective People", author: " Stephen R. Covey",ISBN:56793084490 },

];

// Display initial book list
function displayBookList() {
    bookList.innerHTML = "";
    books.forEach((book, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${book.title} by ${book.author}</span>`;
        bookList.appendChild(li);
    });
}

// Add a new book to the list
addBookButton.addEventListener("click", () => {
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;

    if (title && author) {
        const newBook = { title, author };
        books.push(newBook);
        displayBookList();
        document.getElementById("book-title").value = "";
        document.getElementById("book-author").value = "";
    }
});

// Search for books
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";
    const searchResultsData = books.filter((book) => book.title.toLowerCase().includes(query));
    searchResultsData.forEach((book) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${book.title} by ${book.author}</span>`;
        searchResults.appendChild(li);
    });
});

// Display the initial book list
displayBookList();
