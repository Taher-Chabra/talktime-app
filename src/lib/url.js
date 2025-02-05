module.exports = {
  client: process.env.NODE_ENV === 'production'
  ? 'https://talktime.taherchabra.tech'
  : 'http://localhost:3000', 

  server: process.env.NODE_ENV === 'production'
  ? 'https://talktime-server.taherchabra.tech'
  : 'http://localhost:5100',
};