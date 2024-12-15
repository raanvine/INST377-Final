# ShelfMatch: Tailored Book Recommendations Without the Spoilers

**Group 37 members**: Kamal Patel, Clare Dombrosky, Vineet Ravichandran, Yann Mbianga

## Project Description
ShelfMatch is a web application designed to help users find books while ensuring the exclusion of sensitive content. By integrating the Open Library Search API, users can search for books based on their preferences (title, author, and genre) while excluding specific topics they want to avoid. The application filters results based on user-specified criteria, providing a personalized and spoiler-free browsing experience. Users can also view book details and check available formats (eBook, audiobook, or print).

Additionally, ShelfMatch integrates a Supabase database to store user-submitted books, including titles, authors, and personalized content tags, enabling a collaborative and evolving book catalog tailored to the community's needs.

---

## Target Browsers
ShelfMatch supports the following browsers on both desktop and mobile devices:

### Desktop Browsers
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

### Mobile Browsers
- iOS Safari (12+)
- Android Chrome (8.0+)

---

## Developer Manual

### Installation
1. Clone the repository:
   ```terminal
   git clone https://github.com/raanvine/INST377-Final.git
   ```
2. Navigate to the project directory:
   ```terminal
   cd INST377-Final
   ```
3. Install dependencies using Node.js and npm:
   ```terminal
   npm install
   ```

---

### Running the Application
To run the development server locally:
```terminal
npm start
```
The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

### Running Tests
To validate functionality, run tests using:
```terminal
npm test
```

---

### API Endpoints

#### External APIs
- **GET /search.json?q=popular**  
  - **Description**: Fetches a list of popular books from the Open Library API.  
  - **Response**: List of books and genres.  

- **GET /search.json?title={title}&author={author}&subject={subject}&not={exclude_subject}**  
  - **Description**: Fetches books based on user-defined search criteria, excluding unwanted topics.  
  - **Response**: Filtered list of books.  

- **GET /search.json?title={book_title}&author={book_author}&has_fulltext=true**  
  - **Description**: Retrieves book details, including available formats.  
  - **Response**: Book availability details.  

#### Backend APIs (Supabase Integration)
- **GET /api/books**  
  - **Description**: Fetches all books stored in the Supabase database, including user-submitted titles and content tags.  
  - **Response**: JSON array of books with metadata (title, author, tags).  

- **POST /api/books**  
  - **Description**: Allows users to submit new books to the Supabase database with custom tags.  
  - **Request Body**: JSON object with `title`, `author`, and optional `tags`.  
  - **Response**: Confirmation of the saved entry.

---

### Known Bugs and Roadmap

#### Known Bugs
- Book filtering may not perfectly match exclusion criteria.  
- Mobile layout issues in landscape mode.  

#### Roadmap
- Add user accounts to save preferences and manage personalized recommendations.  
- Integrate more APIs (e.g., Goodreads) for enhanced recommendations and user reviews.  
- Improve mobile responsiveness for a better user experience.  
- Expand Supabase functionality to enable collaborative book lists and community voting.

---

### Deployment

#### Live Application
ShelfMatch has been deployed to Vercel. Access the live application using the link below:  
**[ShelfMatch Live Deployment](https://shelfmatch.vercel.app)**   

#### How to Deploy
1. Create a Vercel account at [vercel.com](https://vercel.com) and log in.  
2. Import this repository from GitHub.  
3. Configure the following environment variables:  
   - `SUPABASE_URL`: Your Supabase project URL.  
   - `SUPABASE_KEY`: Your Supabase API key.  
4. Deploy the project with a single click.  
5. Copy the live deployment URL and add it above.

---
