// Event listener for form submission to handle book search
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    const title = document.getElementById('searchTitle').value;
    const author = document.getElementById('searchAuthor').value;
    const genre = document.getElementById('searchGenre').value;
    const excludeKeywords = document.getElementById('excludeKeywords').value.toLowerCase().split(',').map(k => k.trim());

    // Ensure at least one search criteria is filled out
    if (!title && !author && !genre) {
        alert('Please enter at least one search criteria!');
        return;
    }

    // Change header on front end while results load
    document.getElementById('resultsHeader').innerHTML = "Please wait..."

    // Prepare query parameters based on user input
    const query = [];
    if (title) query.push(`title=${title}`);
    if (author) query.push(`author=${author}`);
    if (genre) query.push(`subject=${genre}`);

    // Fetch data from Open Library API
    fetch(`https://openlibrary.org/search.json?${query.join('&')}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('bookResults');
            resultsDiv.innerHTML = ''; // Clear previous results

            // Filter books based on excludeKeywords
            const books = data.docs.filter(book => {
                if (excludeKeywords.length > 0) {
                    const fieldsToCheck = [
                        book.title,
                        book.author_name?.join(', '),
                        book.subject?.join(', ')
                    ].join(' ').toLowerCase();

                    return excludeKeywords.some(keyword => fieldsToCheck.includes(keyword));
                }
                return true;
            });

            // Display the top 15 results
            books.slice(0, 15).forEach(book => {
                const bookDiv = document.createElement('div');
                bookDiv.innerHTML = `
                    <h3>${book.title}</h3>
                    <p><strong>Author:</strong> ${book.author_name?.join(', ') || 'Unknown'}</p>
                    <p><strong>Publish Year:</strong> ${book.first_publish_year || 'Unknown'}</p>
                    <p><strong>Formats:</strong> ${book.ebook_count_i > 0 ? 'eBook Available' : 'No eBook'}</p>
                `;
                resultsDiv.appendChild(bookDiv);
            });
            document.getElementById('resultsHeader').innerHTML = "Results"
        })
        .catch(err => {
            console.error(err);
            alert('Error fetching book data. Please try again later.');
            document.getElementById('resultsHeader').innerHTML = "Results"
        });
});

/* Scrapped from earlier draft: 
//Loadin book based on title
function loadBookAPI() {
    // Generate URL
    myString = "https://openlibrary.org/search.json?title="
    userIn = document.bookSearch.searchTitle.value
    userInput = userIn.replaceAll(" ", "+")
    myString += userInput
    
    // Fetching via URL
    return fetch(myString)
        .then((res) => res.json())
}

// Funnction to load the site and populate the book table
async function loadSite() {
    // Changing front end text while loading API
    document.getElementById('waitText').innerHTML = "Please wait..."

    const myLoad = await loadBookAPI()

    // Retrieving docs from API 
    const storeBooks = myLoad.docs

    // Resetting table on front end
    const bookTable = document.getElementById('bookTable');
    bookTable.innerHTML = ""

    const tableHead = document.createElement("tr")
    const bookName = document.createElement("td")
    const bookAuth = document.createElement("td")
    const bookYear = document.createElement("td")
    const bookRating = document.createElement("td")
    
    bookName.innerHTML = "<b>Title</b>";
    bookAuth.innerHTML = "<b>Author</b>";
    bookYear.innerHTML = "<b>Publish Year</b>";
    bookRating.innerHTML = "<b>Rating</b>";

    tableHead.appendChild(bookName)
    tableHead.appendChild(bookAuth)
    tableHead.appendChild(bookYear)
    tableHead.appendChild(bookRating)

    bookTable.appendChild(tableHead)

    // (Re)filling table on front end
    let num = 0
    storeBooks.forEach((book) => {
        if (num < 15) {
            const tableRow = document.createElement("tr")
            const bookNameInTable = document.createElement("td")
            const bookAuthInTable = document.createElement("td")
            const bookYearInTable = document.createElement("td")
            const bookRatingInTable = document.createElement("td")
            
            bookNameInTable.innerHTML = book.title;
            bookAuthInTable.innerHTML = book.author_name;
            bookYearInTable.innerHTML = book.first_publish_year;
            bookRatingInTable.innerHTML = book.ratings_average;
            
            tableRow.appendChild(bookNameInTable)
            tableRow.appendChild(bookAuthInTable)
            tableRow.appendChild(bookYearInTable)
            tableRow.appendChild(bookRatingInTable)

            bookTable.appendChild(tableRow)
            num++
        }
            document.getElementById('waitText').innerHTML = "Top Results"
    })
} */