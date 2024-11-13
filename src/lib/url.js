module.exports = {
  client: process.env.NODE_ENV === 'production'
      ? 'client-url'
      : 'http://localhost:3000',

  server: process.env.NODE_ENV === 'production'
      ? 'https://talktime-server-16uu.onrender.com'
      : 'http://localhost:5100',
};
