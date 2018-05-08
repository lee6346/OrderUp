export function emailValidator(email) {
  return /^[0-9a-zA-Z_]+@[a-zA-Z0-9]+\.[a-zA-Z]{3}$/.test(email);
}
export function nameValidator(first, last) {
  return /^[a-zA-Z]+$/.test(first) && /^[a-zA-Z]+$/.test(last);
}

export function passwordValidator(password) {
  return /^.{8,}$/.test(password);
}
