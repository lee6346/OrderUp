export const emailValidator = email => /^[0-9a-zA-Z_]+@[a-zA-Z0-9]+\.[a-zA-Z]{3}$/.test(email);

export const nameValidator = (first, last) => /^[a-zA-Z]+$/.test(first + last) && last;

//need to increase password standard?
export const passwordValidator = password => /^.{8,}$/.test(password);

export const validZipCode = zipCode => /^\s*(\d{5})|(\d{5}-\d{4})\s*$/.test(zipCode);

export const validStreetAddress = address => /^\w+(\s+\w+){2,}$/.test(address);
