//  Validation Messages
// – Q1: Format backend validation message to frontend format
const backendErrors = {
  email: {
    errors: [{ message: "Can't be blank" }],
  },
  password: {
    errors: [
      { message: "Must contain symbols in different case" },
      { message: "Must be at least 8 symbols length" },
    ],
  },
  passwordConfirmation: {
    errors: [{ message: "Must match with password" }],
  },
};
// Result
// [
// "Email: Can't be blank",
// "Password: Must contain symbols in different case, Must be at least 8 symbols,
// "PasswordConfirmation: Must match with password"
//  ]

function formatErrors(errorsObj) {
  const formattedErrors = [];

  for (const [key, value] of Object.entries(errorsObj)) {
    const fieldName = key.charAt(0).toUpperCase() + key.slice(1);
    const messages = value.errors.map((err) => err.message).join(", ");
    formattedErrors.push(`${fieldName}: ${messages}`);
  }

  return formattedErrors;
}

console.log(formatErrors(backendErrors));
