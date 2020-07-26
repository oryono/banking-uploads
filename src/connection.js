import mysql from "mysql2";

const pool = mysql.createPool(
    {
        host: "localhost",
        user: "root",
        database: "banking_graph_dev",
        password: "kenp25",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

export default pool.promise();