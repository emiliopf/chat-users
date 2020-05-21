import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  privateKey: process.env.JWT_PRIVATE_KEY,
  publicKey: process.env.JWT_PUBLIC_KEY,
  algorithm: process.env.JWT_ALGORITHM,
  expiresIn: process.env.JWT_EXPIRES_IN,
}));
