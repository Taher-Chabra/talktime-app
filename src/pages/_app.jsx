import { SessionProvider } from 'next-auth/react';

import '@/styles/tailwind.css';
import '@/styles/globals.css';
import '@/styles/segoe-ui.css';

import { RoomContextProvider } from '@/context/RoomContext';
import { SocketContextProvider } from '@/context/SocketContext';
import { BackgroundContextProvider } from '@/context/BackgroundContext';

function Application({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <SocketContextProvider>
        <RoomContextProvider>
          <BackgroundContextProvider>
            <Component {...pageProps} />
          </BackgroundContextProvider>
        </RoomContextProvider>
      </SocketContextProvider>
    </SessionProvider>
  );
}

export default Application;
