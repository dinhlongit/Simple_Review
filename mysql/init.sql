CREATE DATABASE `reviewmovie`;
USE `user`;

CREATE TABLE user (
    `id` INT NOT NULL auto_increment PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
);

INSERT INTO user (`name`, `email`,`password`) VALUES ('Dinh Long IT', 'dinhlong@gmail.com','123456');

CREATE TABLE posts (
    `id` INT NOT NULL auto_increment PRIMARY KEY,
    `description` VARCHAR(100) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
);