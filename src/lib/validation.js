export const validateAuth = (fields, fieldNames) => {
  const error = { status: false };

  // checks for empty fields
  fieldNames.forEach((field) => {
    if (!fields[field] || fields[field].trim() === '') {
      error[field] = `${field} field must be filled`;
      error.status = true;
    }
  });

  // checks for valid email
  const emailFormat = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
  if (fields.email !== '') {
    if (!emailFormat.test(fields.email.trim())) {
      error.email = 'You\'ve entered an invalid email';
      error.status = true;
    }
  }

  return error;
};
