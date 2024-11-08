module.exports = {
  client:
    process.env.NODE_ENV === 'production'
      ? 'client-url'
      : 'http://localhost:3000',
  server: 'server-url',
};
