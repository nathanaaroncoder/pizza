DROP DATABASE if exists pizzas_db;
CREATE DATABASE pizzas_db;
USE pizzas_db;

-- Create the pizza tasks.
CREATE TABLE pizzas
(
id int NOT NULL AUTO_INCREMENT,
pizza_name varchar(255) NOT NULL,
devoured boolean DEFAULT false,
PRIMARY KEY (id)
);
