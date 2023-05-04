import { VALID_EMAIL_REGEX } from '../../config/constants';

type ValidateRegisterOpts = {
  name?: string;
  email?: string;
  password?: string;
};

const validateRegister = ({ name, email, password }: ValidateRegisterOpts) => {
  let errors: ValidateRegisterOpts = {};

  if (!name?.trim()) {
    errors = { ...errors, name: 'Name required' };
  }

  if (!VALID_EMAIL_REGEX.test(email as string)) {
    errors = { ...errors, email: 'Invalid email' };
  }

  if (!email?.trim()) {
    errors = { ...errors, email: 'Email required' };
  }

  if (password && password.length < 6) {
    errors = {
      ...errors,
      password: 'Password should be at least 6 characters',
    };
  }

  if (!password) {
    errors = { ...errors, password: 'Password required' };
  }

  return errors;
};

export default validateRegister;
