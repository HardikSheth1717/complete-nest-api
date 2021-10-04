import { registerAs } from '@nestjs/config';

export default registerAs('commonEnv', () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT),
}));
