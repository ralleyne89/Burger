CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INTEGER PRIMARY KEY AUTO INT,
    burger_name VARCHAR(30) UNIQUE NOT NULL,
    devoured BOOLEAN
);
