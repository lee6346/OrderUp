const isValidEmail = email => {
  return /^[a-z0-9_]+@[a-z0-9]+\.[a-z]+$/.test(email.toLowerCase());
};

const isValidPassword = password => {
  return /^[A-Za-z0-9]{8,}$/.test(password);
};

const isValidRating = rating => {
  return 0 <= rating && rating <= 5;
};

module.exports = {
  isValidEmail,
  isValidPassword,
  isValidRating,
};
