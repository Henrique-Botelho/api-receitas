const PORT = process.env.PORT || 3000;

const DB_NAME = process.env.DB_NAME || "receitas";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USER = process.env.DB_USER || "root";
const DB_PASS = process.env.DB_PASS || "";
const DB_PORT = process.env.DB_PORT || 3306;
const KEY_ACCESS = "4WAPlNmInAy2ZTkIAMy9"

module.exports = {
    PORT,
    DB_NAME,
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_PORT,
    KEY_ACCESS
}