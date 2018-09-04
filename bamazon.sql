DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products_stock (
    id INT(10) AUTO_INCREMENT NOT NULL, 
    PRIMARY KEY (id),
    ProductName VARCHAR (50) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price INT(10) NOT NULL,
    stockQuantity INT(10) NOT NULL
);

INSERT INTO products(ProductName, DepartmentName, Price, StockQuantity)
VALUES ("Apple", "Fruits", 1.99, 10),
	("Retro Jordans", "Foortwear", 49.88, 1),
	("T-Mac Jersey", "Clothing", 45.99, 2),
	("Boyz In The Hood", "Movies", 12.99, 15),
	("Basketball", "Sports", 30.68, 10),
	("T-Shirt", "Clothing", 8.99, 15),
	("Pants", "Clothing", 16.99, 10),
	("Pampers", "Baby", 35.99, 20),
	("Dresser", "Furniture", 45.70, 5),
	("Fifa19", "Games", 30.98, 15);
