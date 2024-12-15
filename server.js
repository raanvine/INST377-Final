const express = require('express');
const path = require('path');
const { createClient } = require('@supabase/supabase-js'); // Import once at the top
const app = express();

// Middleware to parse JSON in request bodies
app.use(express.json());

// Serve static files (CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Supabase client setup (only declare once here)
const supabaseUrl = 'https://aqsccebqyumitjsmgsaz.supabase.co'; // Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxc2NjZWJxeXVtaXRqc21nc2F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxNDYxMzEsImV4cCI6MjA0OTcyMjEzMX0.5X8AQ9fTann4aTS6wKvJGqJImRahL0LdGTlODGSU0DU'; // Supabase API key (remember, replace this with a secure method for production)
const supabase = createClient(supabaseUrl, supabaseKey); // Create Supabase client once

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Group_37_Final_Home.html'));
});

// Additional routes for other pages
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Group 37 Final Help.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Group 37 Final Home.html'));
});

app.get('/saved-books', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Group_37_Final_saved_books.html'));
});

// API route to fetch books from Supabase
app.get('/api/books', async (req, res) => {
  const { data, error } = await supabase
    .from('books')
    .select('*'); // Retrieves all columns from the 'books' table

  if (error) {
    return res.status(500).json({ error: 'Error fetching books' });
  }

  res.json(data); // Return books as JSON
});

// API route to insert a new book into Supabase
app.post('/api/books', async (req, res) => {
  const { title, author, summary } = req.body; // Extract data from request body

  const { data, error } = await supabase
    .from('books')
    .insert([{ title, author, summary, created_at: new Date() }]); // Insert the new book into the 'books' table
    console.log(data)
  if (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error inserting book' });
  }

  res.status(201).json(data); // Return the inserted book data
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
