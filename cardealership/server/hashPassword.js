import db from './db.js';
import bcrypt from 'bcryptjs';

async function hashPasswords() {
    try {
        // 1. Fetch users
        const [rows] = await db.execute('SELECT id, password FROM users'); 

        if (!Array.isArray(rows)) {
            throw new Error("Unexpected database response");
        }

        for (let user of rows) {
            const { id, password } = user;

            // 2. Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // 3. Update the database with hashed password
            await db.execute('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, id]);

            console.log(`🔄 Updated password for user ID: ${id}`);
        }

        console.log('✅ All passwords have been hashed successfully.');
    } catch (error) {
        console.error('❌ Error updating passwords:', error);
    } finally {
        await db.end();
    }
}

// Run the function
hashPasswords();