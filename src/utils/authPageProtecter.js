import Cookies from 'cookies';
import jwt from 'jsonwebtoken';

export default async function authProtecter(context) {
  const cookies = new Cookies(context.req, context.res);
  const token = cookies.get('jwt');

  if (!token) return null;
  try {
    await jwt.verify(token, process.env.JWT_SECRET);
    const { username } = jwt.decode(token);
    return { token, username };
  } catch (error) {
    return error.message;
  }
}
