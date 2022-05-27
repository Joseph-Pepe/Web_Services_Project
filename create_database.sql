-- Step 1: Create and select the database (CSIT437).
DROP DATABASE IF EXISTS csit437; 
CREATE DATABASE csit437; 
USE csit437; 

-- Step 2: Create a table (named accounts) with multiple fields.
CREATE TABLE accounts( 
   account_id        INT            NOT NULL   AUTO_INCREMENT, 
   username          VARCHAR(255)   NOT NULL, 
   password          VARCHAR(50)    NOT NULL,
   PRIMARY KEY (account_id) 
);

CREATE TABLE products( 
   product_number     INT            NOT NULL   AUTO_INCREMENT, 
);


-- Step 3: Populate with users. 
INSERT INTO accounts (account_id, username, password,) VALUES 
(1, 'jj@montclair.edu', '9788b833f5e94013b7e83a51a4792ea322020945'), 
(2, 'kk@montclair.edu', '7c6b25ee4af6db0472e5c338206a5cbae911c08b'), 
(3, 'sd@montclair.edu', '8b0c689ddba0d0ebc7ab0a320635f35c0f1ae23f'),
(4, 'bill@montclair.edu', 'ced6caf3d89c2a7ec8795de512ecb68fab24268d'),
(5, 'johnpe@montclair.edu', '11051bdbdd7cbaec855d92db2ded7cfc940b99c6');

-- Step 4: Create a database server user named "account_username" that can query database (main purpose is so it can be used in the creation of a PDO object).
-- Creates a user and grants them full privileges. 
GRANT SELECT, INSERT, UPDATE, DELETE
ON *
TO canvas@localhost
IDENTIFIED BY 'software';

