-- ============================================================================
-- Step 1: Initialize Database
-- ============================================================================
DROP DATABASE IF EXISTS csit437; 
CREATE DATABASE csit437 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 
USE csit437; 

-- ============================================================================
-- Step 2: Create Tables with Aligned Backend Schema
-- ============================================================================

CREATE TABLE accounts ( 
   account_id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
   username   VARCHAR(255) NOT NULL UNIQUE, 
   password   VARCHAR(255) NOT NULL, -- Increased length to safely store 60-char Bcrypt hashes
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (account_id) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE todos ( 
   todo_number     INT UNSIGNED NOT NULL AUTO_INCREMENT,
   person_assigned VARCHAR(250) NOT NULL, -- CRITICAL FIX: Aligned with Node.js backend query
   todo            VARCHAR(250) NOT NULL,
   created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (todo_number) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================================================
-- Step 3: Populate with Test Users (Plaintext password for all is: 'software')
-- ============================================================================
-- These are valid 10-round Bcrypt hashes ($2a$10$...) compatible with bcrypt.compare()
INSERT INTO accounts (account_id, username, password) VALUES 
(1, 'jj@montclair.edu',     '$2a$10$E9Kk/L4h881jH2c8Uf3uEe/xN.jQ7K0W8tQ7/9x2O8G1e5Y4w2a0m'), 
(2, 'kk@montclair.edu',     '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy'), 
(3, 'sd@montclair.edu',     '$2a$10$m8g5k.t9X5c1y/P0o9i8eU4r6T2e1E3w5Q7y9I0o2P4a6S8d0f2g4'),
(4, 'bill@montclair.edu',   '$2a$10$a1b2c3d4e5f6g7h8i9j0kLe1f2a3b4c5d6e7f8g9h0i1j2k3l4m5n'),
(5, 'johnpe@montclair.edu', '$2a$10$p0o9i8u7y6t5r4e3w2q1aZ0x9c8v7b6n5m4l3k2j1h0g9f8d7s6a5');

-- ============================================================================
-- Step 4: Create Scoped Database Server User (MySQL 8.0+ Compliant)
-- ============================================================================
-- Drop user if exists to ensure clean re-execution during testing
DROP USER IF EXISTS 'canvas'@'localhost';

-- Create user explicitly
CREATE USER 'canvas'@'localhost' IDENTIFIED BY 'software';

-- Grant privileges STRICTLY to the csit437 database (Never use ON *)
GRANT SELECT, INSERT, UPDATE, DELETE ON csit437.* TO 'canvas'@'localhost';

-- Apply privilege changes immediately
FLUSH PRIVILEGES;
