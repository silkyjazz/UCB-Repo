-- Drops the inventory_db if it exists currently --
DROP DATABASE IF EXISTS inventory_db;
-- Creates the inventory_db database --
CREATE DATABASE inventory_db;

-- use inventory_db database --
USE inventory_db;

-- Creates the table "produce" within inventory_db --
CREATE TABLE produce (
  -- Creates a numeric column called "id" --
  id INT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL
);

-- mysql -u root -p

-- Database Naming Conventions
-- Name can be singular or plural but as the database represents a single database it should be singular.


-- Table Naming Conventions
-- Using lowercase will help speed typing, avoid mistakes as MYSQL is case sensitive.
-- Space replaced with Underscore — Using space between words is not advised.
-- Numbers are not for names — While naming, it is essential that it contains only Alpha English alphabets.
-- Valid Names — Names should be a descriptive of the elements. i.e. — Self-explanatory and not more than 64 characters.
-- Don't use dots, spaces, or dashes in database, schema, table, or column names. Dots are for identifying objects, usually in the database.