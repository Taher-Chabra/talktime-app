module.exports = {
  client: process.env.NODE_ENV === 'production'
      ? 'https://talktime-app.onrender.com'
      : 'http://localhost:3000',

    server: 'https://ws.msft.lohani.dev'

//   server: process.env.NODE_ENV === 'production'
//       ? 'https://ws.msft.lohani.dev'
//       : 'http://localhost:5100',
};
