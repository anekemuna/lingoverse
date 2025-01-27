import bcrypt from 'bcrypt';

export async function hashPassword(password) {
  try {
    //salt factor of 10
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw new Error('Failed to hash password');
  }
}
