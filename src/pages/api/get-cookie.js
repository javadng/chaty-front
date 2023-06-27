import jwt from 'jsonwebtoken';

const Cookies = require('cookies');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(400).json({ message: 'Bad request' });
  }

  const cookies = new Cookies(req, res);

  const token = cookies.get('jwt');

  const decodedToken = jwt.decode(token);

  res.status(200).json({
    status: 'success',
    data: {
      jwt: decodedToken,
    },
  });
}
