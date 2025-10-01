export const isValidEmail = (email) => {
  // Basic regex (can replace with better logic)
  return /^\S+@\S+\.\S+$/.test(email);
};
export const isValidLength = (testString, testLength) => {
  return !testString.length > testLength;
};
