import crypto from 'crypto';

const PREFIX = 'vf_';
const LENGTH = 30;

// * Returns token in format: re_qh36Dcfbjz88N4Sc6WkFLkpinzpRPw
export const generateApiToken = () => {
  const token = crypto.randomBytes(LENGTH / 2).toString('hex'); // length/2 because each byte is 2 hex characters
  return PREFIX + token;
};
