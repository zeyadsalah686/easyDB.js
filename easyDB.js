const sqlite3 = require("sqlite3").verbose();

class EasyDB {
	constructor(databasePath) {
		this.db = new sqlite3.Database(databasePath, (err) => {
			if (err) {
				console.error("Error opening database", err);
			} else {
				console.log("Database connected");
			}
		});
	}

	createTable(tableName, schema) {
		const columns = Object.entries(schema)
			.map(([col, type]) => `${col} ${type}`)
			.join(", ");
		const query = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`;

		return this.run(query);
	}

	insert(tableName, data) {
		const columns = Object.keys(data).join(", ");
		const placeholders = Object.keys(data)
			.map(() => "?")
			.join(", ");
		const values = Object.values(data);
		const query = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`;

		return this.run(query, values);
	}

	find(tableName, conditions = {}) {
		const whereClause = Object.keys(conditions)
			.map((key) => `${key} = ?`)
			.join(" AND ");
		const values = Object.values(conditions);
		const query = `SELECT * FROM ${tableName} ${
			whereClause ? `WHERE ${whereClause}` : ""
		}`;

		return this.all(query, values);
	}

	update(tableName, data, conditions) {
		const setClause = Object.keys(data)
			.map((key) => `${key} = ?`)
			.join(", ");
		const whereClause = Object.keys(conditions)
			.map((key) => `${key} = ?`)
			.join(" AND ");
		const values = [...Object.values(data), ...Object.values(conditions)];
		const query = `UPDATE ${tableName} SET ${setClause} WHERE ${whereClause}`;

		return this.run(query, values);
	}

	delete(tableName, conditions) {
		const whereClause = Object.keys(conditions)
			.map((key) => `${key} = ?`)
			.join(" AND ");
		const values = Object.values(conditions);
		const query = `DELETE FROM ${tableName} WHERE ${whereClause}`;

		return this.run(query, values);
	}

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
