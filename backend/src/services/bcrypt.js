import bcrypt from 'bcrypt';

export const encryptPhrase = async (phrase) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(phrase, salt);
};

export function compareWithEncrypted(decrypted, encrypted) {
  return bcrypt.compare(decrypted, encrypted);
}
