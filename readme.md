# Menu Management System

This is a Menu Management System built with Node.js, Express, and MongoDB. It allows managing categories, subcategories, and items for a menu, including their descriptions, images, and tax details.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Categories](#categories)
  - [Subcategories](#subcategories)
  - [Items](#items)
- [License](#license)

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/menu-management.git
    cd menu-management
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Start MongoDB**

    Make sure you have MongoDB installed and running on your machine. By default, it will run on `mongodb://localhost:27017`.

4. **Run the application**
    ```bash
    node app.js
    ```

    The server will start on port 5000 (or 5001 if 5000 is in use).

## Configuration

### Database Configuration

The database connection is configured in `config/db.js`. It connects to a MongoDB instance running on `mongodb://localhost:27017/menu-management`.

### CORS Configuration

CORS is enabled to allow all origins. You can configure specific origins and methods in `app.js`:

```javascript
const corsOptions = {
    origin: 'http://yourfrontenddomain.com', // replace with your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    optionsSuccessStatus: 200 // for legacy browsers
};
app.use(cors(corsOptions));

Answers to questions : 
1. Which database you have chosen and why?
I chose MongoDB for this project because it offers high scalability, flexibility with its schema-less nature, and easy integration with Node.js applications through Mongoose. Its ability to handle large volumes of data efficiently makes it suitable for a dynamic menu management system.

2. things that you learned from this assignment?
How to set up and configure a Node.js and Express server with MongoDB.
The importance of CORS in enabling secure cross-origin resource sharing for web applications.
How to define and use Mongoose schemas and models to interact with a MongoDB database.

3. What was the most difficult part of the assignment?
I didnt find any part of the assignment that difficult because of my experience with team leading and role distributions in full-stack projects . 

4. What you would have done differently given more time?

Given more time, I would implement more robust error handling and validation throughout the API, add comprehensive unit and integration tests to ensure reliability, and enhance the documentation for better clarity and ease of use for future developers.