# easyDB.js

`easyDB.js` is a simple Node.js package for working with SQLite databases. It provides an easy-to-use API for common database operations.

## Installation

To install `easyDB.js`, run the following command:

```bash
npm install easyDB.js

## API Documentation

EasyDB
new EasyDB(databasePath)
Description: Creates a new instance of EasyDB.

databasePath: The path to the SQLite database file (e.g., 'path/to/your/database.sqlite').
easyDB.run(query, [params])
Description: Executes a SQL query.

query: The SQL query to execute (e.g., 'CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)').
params: Optional array of parameters for the query (default is []).
Returns: A Promise that resolves when the query completes successfully.

easyDB.get(query, [params])
Description: Fetches a single row for a query.

query: The SQL query to execute (e.g., 'SELECT * FROM users WHERE id = ?').
params: Optional array of parameters for the query (default is []).
Returns: A Promise that resolves with the row data (e.g., { id: 1, name: 'John Doe' }).

easyDB.all(query, [params])
Description: Fetches all rows for a query.

query: The SQL query to execute (e.g., 'SELECT * FROM users').
params: Optional array of parameters for the query (default is []).
Returns: A Promise that resolves with an array of rows (e.g., [ { id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' } ]).

easyDB.close()
Description: Closes the database connection.

Returns: A Promise that resolves when the database connection is closed.
