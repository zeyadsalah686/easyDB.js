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
easyDB.createTable(tableName, schema)
Description: Creates a new table with the given schema.

tableName: The name of the table to create (e.g., 'users').
schema: An object representing the table schema (e.g., { id: 'INTEGER PRIMARY KEY', name: 'TEXT', email: 'TEXT' }).
Returns: A Promise that resolves when the table is created.

easyDB.insert(tableName, data)
Description: Inserts a new record into the specified table.

tableName: The name of the table to insert the record into (e.g., 'users').
data: An object representing the record data (e.g., { name: 'John Doe', email: 'john@example.com' }).
Returns: A Promise that resolves when the record is inserted.

easyDB.find(tableName, conditions)
Description: Finds records in the specified table that match the given conditions.

tableName: The name of the table to query (e.g., 'users').
conditions: An object representing the query conditions (e.g., { name: 'John Doe' }).
Returns: A Promise that resolves with an array of matching rows.

easyDB.update(tableName, data, conditions)
Description: Updates records in the specified table that match the given conditions.

tableName: The name of the table to update (e.g., 'users').
data: An object representing the new data (e.g., { email: 'john.doe@example.com' }).
conditions: An object representing the update conditions (e.g., { name: 'John Doe' }).
Returns: A Promise that resolves when the records are updated.

easyDB.delete(tableName, conditions)
Description: Deletes records from the specified table that match the given conditions.

tableName: The name of the table to delete records from (e.g., 'users').
conditions: An object representing the delete conditions (e.g., { name: 'John Doe' }).
Returns: A Promise that resolves when the records are deleted.

easyDB.close()
Description: Closes the database connection.

Returns: A Promise that resolves when the database connection is closed.