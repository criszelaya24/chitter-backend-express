CREATE DATABASE chitter;
CREATE TABLE users(id SERIAL PRIMARY KEY, name VARCHAR(60) NOT NULL, username VARCHAR(60) NOT NULL unique, email TEXT NOT NULL unique, password TEXT NOT NULL);
CREATE TABLE chitters(id SERIAL PRIMARY KEY, title VARCHAR(60) NOT NULL, body VARCHAR(300) NOT NULL, date DATE NOT NULL, userId INTEGER REFERENCES users(id));