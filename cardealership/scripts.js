import bcrypt from 'bcryptjs';

async function hashPassword() {
  const password = 'password123'; // Define the password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
}

hashPassword();

async function verifyPassword() {
    const password = 'password123'; // User input
    const hash = '$2a$10$0xnlFg9nH0Qw36n11QnRSe8GWXHiKej.pK46k1KV.oLGIXv7Vok0W'; // Your generated hash

    const isMatch = await bcrypt.compare(password, hash);
    console.log(isMatch ? 'Password is correct!' : 'Incorrect password');
}

verifyPassword();