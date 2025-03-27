import { createUser } from './passwordUtils.js';

// Example: Creating a new user
const username = 'newUser';
const password = 'securePassword';

const createNewUser = async () => {
  const result = await createUser(username, password);
  if (result) {
    console.log('User created successfully');
  } else {
    console.log('Error creating user');
  }
};

createNewUser();