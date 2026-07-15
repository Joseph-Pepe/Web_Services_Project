// [Packages]: Import required dependencies once at the module level
const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise'); // Modern promise-based MySQL driver

const app = express();

// [Middleware]: Built-in Express body parsers replace legacy 'body-parser'
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// [Database Pool]: Create a connection pool instead of a single fragile connection
const dbPool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'canvas',
  password: process.env.DB_PASSWORD || 'software',
  database: process.env.DB_NAME || 'csit437',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // Security: Keep multipleStatements disabled (default) to prevent SQLi chaining attacks
});

// [Check Connection]: Verify pool initialization on startup
(async () => {
  try {
    const connection = await dbPool.getConnection();
    console.log('✅ MySQL Database Pool Connection Successful.');
    connection.release();
  } catch (err) {
    console.error('❌ MySQL Connection Failed:', err.message);
    process.exit(1);
  }
})();

// ============================================================================
// STATIC FILE ROUTES
// ============================================================================

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/register-form', (req, res) => {
  res.sendFile(path.join(__dirname, 'register-form.html'));
});

app.get('/dashboard', (req, res) => {
  // Note: In production, wrap this route in a JWT/Session authentication middleware!
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

// ============================================================================
// AUTHENTICATION & API ROUTES
// ============================================================================

/**
 * Register a new user account safely using Bcrypt hashing and Parameterized Queries.
 */
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send('Username and password are required.');
    }

    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Parameterized Query (?) prevents SQL Injection completely
    const sql = 'INSERT INTO accounts (username, password) VALUES (?, ?)';
    await dbPool.execute(sql, [username, hashedPassword]);

    res.sendFile(path.join(__dirname, 'dashboard.html'));
  } catch (err) {
    console.error('Registration Error:', err.message);
    // Handle duplicate username (MySQL ER_DUP_ENTRY)
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).send('Username already exists.');
    }
    res.status(500).send('Internal Server Error during registration.');
  }
});

/**
 * Login to account with safe array-bounds checking.
 */
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send('Username and password are required.');
    }

    const sql = 'SELECT * FROM accounts WHERE username = ?';
    const [rows] = await dbPool.execute(sql, [username]);

    // CRITICAL FIX: Verify user exists before reading properties to prevent crash
    if (rows.length === 0) {
      console.warn(`Failed login attempt for non-existent user: ${username}`);
      return res.sendFile(path.join(__dirname, 'index.html'));
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.sendFile(path.join(__dirname, 'dashboard.html'));
    } else {
      console.warn(`Invalid password attempt for user: ${username}`);
      res.sendFile(path.join(__dirname, 'index.html'));
    }
  } catch (err) {
    console.error('Login Error:', err.message);
    res.status(500).send('Internal Server Error during login.');
  }
});

/**
 * Render dynamic TODO insertion form.
 */
app.get('/insert', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><title>Add Todo</title></head>
    <body>
      <h2>Assign New Task</h2>
      <form action="/process-insert-form" method="post" name="insert_form">
        <label>Person Assigned:</label>
        <input type="text" name="person" required /><br/><br/>
        <label>Task:</label>
        <input type="text" name="todo" required /><br/><br/>
        <input type="submit" value="Submit Task" />
        <input type="reset" value="Reset Form" />
      </form>
    </body>
    </html>
  `;
  res.send(html);
});

/**
 * Process TODO insertion safely using aligned payload keys.
 */
app.post('/process-insert-form', async (req, res) => {
  try {
    // CRITICAL FIX: Aligned property name from 'person_assigned' to 'person'
    const { person, todo } = req.body;

    if (!person || !todo) {
      return res.status(400).send('Both Person Assigned and Task fields are required.');
    }

    // Parameterized Query protects against SQL Injection
    const sql = 'INSERT INTO todos (person_assigned, todo) VALUES (?, ?)';
    const [result] = await dbPool.execute(sql, [person, todo]);

    res.status(201).send(`
      <h3>✅ Todo Submitted Successfully!</h3>
      <p><strong>Task:</strong> ${todo}</p>
      <p><strong>Assigned To:</strong> ${person}</p>
      <p><em>Database Insert ID: ${result.insertId}</em></p>
      <a href="/insert">Add Another Task</a> | <a href="/dashboard">View Dashboard</a>
    `);
  } catch (err) {
    console.error('Todo Insertion Error:', err.message);
    res.status(500).send('Internal Server Error while saving todo.');
  }
});

// [Start Server]:
const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`🚀 Server actively listening on port ${port}...`));
