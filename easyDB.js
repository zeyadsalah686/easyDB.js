const sqlite3 = require('sqlite3').verbose();

/**
 * Class representing a database connection.
 */
class EasyDB {
    /**
     * Create a new EasyDB instance.
     * @param {string} databasePath - The path to the SQLite database file.
     */
    constructor(databasePath) {
        this.db = new sqlite3.Database(databasePath, (err) => {
            if (err) {
                console.error('Error opening database', err);
            } else {
                console.log('Database connected');
            }
        });
    }

    /**
     * Execute a SQL query.
     * @param {string} query - The SQL query to execute.
     * @param {Array} [params=[]] - Optional parameters for the query.
     * @returns {Promise} A promise that resolves when the query completes.
     */
    run(query, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(query, params, function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this);
                }
            });
        });
    }

    /**
     * Fetch a single row for a query.
     * @param {string} query - The SQL query to execute.
     * @param {Array} [params=[]] - Optional parameters for the query.
     * @returns {Promise} A promise that resolves with the row data.
     */
    get(query, params = []) {
        return new Promise((resolve, reject) => {
            this.db.get(query, params, (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    /**
     * Fetch all rows for a query.
     * @param {string} query - The SQL query to execute.
     * @param {Array} [params=[]] - Optional parameters for the query.
     * @returns {Promise} A promise that resolves with an array of rows.
     */
    all(query, params = []) {
        return new Promise((resolve, reject) => {
            this.db.all(query, params, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    /**
     * Close the database connection.
     * @returns {Promise} A promise that resolves when the database connection is closed.
     */
    close() {
        return new Promise((resolve, reject) => {
            this.db.close((err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}

module.exports = EasyDB;
