import { VALID_EMAIL_REGEX } from '../../config/constants';

type ValidateLoginOpts = {
  email?: string;
  password?: string;
};

const validateLogin = ({ email, password }: ValidateLoginOpts) => {
  let errors: ValidateLoginOpts = {};

  if (!VALID_EMAIL_REGEX.test(email as string)) {
    errors = { ...errors, email: 'Invalid email' };
  }

  if (!email?.trim()) {
    errors = { ...errors, email: 'Email required' };
  }

  if (!password) {
    errors = { ...errors, password: 'Password required' };
  }

  return errors;
};

export default validateLogin;
