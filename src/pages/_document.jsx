import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='description'
            content='Talktime is a web app that implements real-time of video calls, chat, and collaboration in one place.'
          />
        </Head>
        <body>
          <script
            async
            defer
            src='https://scripts.simpleanalyticscdn.com/latest.js'
          ></script>
          <noscript>
            <img
              src='https://queue.simpleanalyticscdn.com/noscript.gif'
              alt=''
              referrerPolicy='no-referrer-when-downgrade'
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
