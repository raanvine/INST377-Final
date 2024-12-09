# ShelfMatch: Tailored Book Recommendations Without the Spoilers
    Group 37 members: Kamal Patel, Clare Dombrosky, Vineet Ravichandran, Yann Mbianga

## Project Description
ShelfMatch is a web application designed to help users find books while ensuring the exclusion of sensitive content. By integrating the Open Library Search API, users can search for books based on their preferences (title, author, and genre) while excluding specific topics they want to avoid. The application filters results based on user-specified criteria, providing a personalized and spoiler-free browsing experience. Users can also view book details and check available formats (eBook, audiobook, or print).

## Target Browsers
ShelfMatch supports the following browsers on both desktop and mobile devices:

**Desktop Browsers:**
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge


**Mobile Browsers:**
- iOS Safari (12+)
- Android Chrome (8.0+)

## Developer Manual

### Installation
Clone the repository:
Terminal
git clone https://github.com/raanvine/INST377-Final.git
Navigate to the project directory:

Terminal
Type code
cd INST377-Final
Install dependencies using Node.js and npm:

Terminal
Type code
npm install
Running the Application
To run the development server locally:

Terminal
Type code
npm start
The application will be accessible at http://localhost:3000.

Running Tests
Run tests using:

Terminal
Type code
npm test
This ensures all functionality is validated.

API Endpoints
GET /search.json?q=popular
Description: Fetches a list of popular books from the Open Library API.
Response: List of books and genres.
GET /search.json?title={title}&author={author}&subject={subject}&not={exclude_subject}
Description: Fetches books based on user-defined search criteria, excluding unwanted topics.
Response: Filtered list of books.
GET /search.json?title={book_title}&author={book_author}&has_fulltext=true
Description: Retrieves book details, including available formats.
Response: Book availability details.
Known Bugs and Roadmap
Known Bugs:
Book filtering may not perfectly match exclusion criteria.
Mobile layout issues in landscape mode.
Roadmap:
Add user accounts to save preferences.
Integrate more APIs (e.g., Goodreads) for enhanced recommendations.
Improve mobile responsiveness for a better user experience.
Deployment
ShelfMatch has been deployed to Vercel. You can access the live application using the link below:

Live Application: https://shelfmatch.vercel.app (replace with your actual URL after deployment)

How to Deploy
To deploy this project to Vercel:

Create a Vercel account at vercel.com and log in.
Import this repository from GitHub.
Configure any environment variables if needed.
Deploy the project with a single click.
Copy the live deployment URL and add it here. URL: 
