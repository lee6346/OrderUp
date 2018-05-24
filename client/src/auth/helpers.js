export const emailValid = email => /^[0-9a-zA-Z_]+@[a-zA-Z0-9]+\.[a-zA-Z]{3}$/.test(email);

export const nameValid = (first, last) => /^[a-zA-Z]+$/.test(first + last) && last;

export const passwordValid = password => /^.{8,}$/.test(password);

export const zipCodeValid = zipCode => /^\s*(\d{5})|(\d{5}-\d{4})\s*$/.test(zipCode);

export const streetValid = address => /^\w+(\s+\w+){2,}$/.test(address);
