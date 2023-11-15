# Cat Database Server

This server provides a basic CRUD (Create, Read, Update, Delete) API for different cats database. It is built using Node.js and Express, and the data is stored in-memory as a JavaScript array.

## Prerequisites

Before you start, make sure you have Node.js and npm (Node Package Manager) installed on your machine.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pockche123/mvc-exercise.git

   ```

2. **Running the Server:**

To start the server, run the following command:

```bash
 npm install
 npm run dev
```
This will start the server at http://localhost:3100.

## API Endpoints

**1. Get all cats**  
   Endpoint: /cats  
   Method: GET  
   Description: Retrieve a list of all cats in the database.

**2. Get an cat by ID**  
   Endpoint: /cats/:id  
   Method: GET  
   Description: Retrieve details of a specific cat by providing its ID.  

**3. Add a new cat**  
   Endpoint: /cats  
   Method: POST  
   Description: Add a new cat to the database. Provide the cat details in the request body.  

**4. Update an existing cat**  
   Endpoint: /cats/:id    
   Method: PATCH    
   Description: Update the details of an existing cat using its ID. Provide the updated details in the request body.  

**5. Delete an cat**  
   Endpoint: /cats/:id  
   Method: DELETE  
   Description: Delete a specific cat from the database by providing its ID.  


## Contributing
Feel free to contribute to the development of this project by submitting pull requests.



