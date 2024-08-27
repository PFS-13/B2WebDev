CREATE DATABASE security_test;

USE security_test;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

INSERT INTO users (username, password) VALUES ('admin', 'password123');
INSERT INTO users (username, password) VALUES ('user1', 'pass1');
INSERT INTO users (username, password) VALUES ('user2', 'pass2');