const Cookies = require('cookies');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'Bad request' });
  }

  const cookies = new Cookies(req, res);

  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') cookieOption.secure = true;
  cookies.set('jwt', req.body.token, cookieOption);

  res.status(200).json({ message: 'successfully login and cookies set.' });
}
