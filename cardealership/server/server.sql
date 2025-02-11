DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cars;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(50),
    model VARCHAR(50),
    year INT,
    mileage INT,
    price DECIMAL(10, 2)
);

-- Insert data into the cars table
INSERT INTO cars (make, model, year, mileage, price) 
VALUES ('Tesla', 'Model S', 2024, 10000, 54000);

-- Optional: Insert data into the users table if you want
INSERT INTO users (username, password) 
VALUES ('testuser', '');