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
    num = 0
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
}