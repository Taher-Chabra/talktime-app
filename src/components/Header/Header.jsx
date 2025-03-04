import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { PiWechatLogo } from "react-icons/pi";
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
 
  return (
    <header className='bg-gray-900 border-b border-gray-950 sticky h-20'>
      <div className='wrapper flex flex-row justify-between py-3 items-center'>
        <div className='flex flex-row space-x-4 items-center'>
          <a
            href='/'
            rel='noopener noreferrer'
            style={{ height: 'min-content' }}
            className='flex items-center'
          >
            <PiWechatLogo 
              className='w-12 h-12 text-blue-400'
              aria-label='Talktime Logo'
            />
          </a>
          <a
            style={{ fontSize: '32px', marginBottom: '2px' }}
            className='text-blue-400 font-bold'
            href='/'
          >
            Talktime
          </a>
        </div>

        <div className='flex flex-row space-x-5 items-center '>
          {!session && (
            <>
              <button onClick={signIn} className='btn sm:block'>
                Sign In
              </button>
              <FaUserCircle className='w-12 h-12 text-blue-400 hidden sm:block' />
            </>
          )}
          {session && (
            <>
              <button onClick={signOut} className='btn sm:block'>
                Sign Out
              </button>
              <img
                src={session.user.image}
                alt='user avatar'
                className='w-12 h-12 rounded-full border-2 shadow-sm'
                style={{ borderColor: session.user.color }}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
