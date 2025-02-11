import React from 'react';
import { signIn, getSession, getProviders } from 'next-auth/react';
import { SiGoogle, SiGithub } from 'react-icons/si';
import { PiWechatLogo } from "react-icons/pi";
import url from '@/lib/url';

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    // if user is already logged in, redirect to /dashboard
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  const providers = await getProviders();

  return {
    props: { providers, callbackUrl: `${url.client}/dashboard` },
  };
}

export default function Login({ providers, callbackUrl }) {

  const handleSignIn = (providerId) => {
    if (providerId) {
      signIn(providerId, { callbackUrl });
    }
  };
  
  return (
    <main className='bg-gray-900 flex flex-col items-center h-screen space-y-8 justify-center text-gray-200'>
      <div className='flex flex-col items-center space-y-4'>
        <PiWechatLogo 
          className='w-12 h-12 text-blue-400'
          aria-label='Talktime Logo'
        />
        <div className='text-3xl'>
          <p className='inline'> Sign in to </p>
          <p className='font-bold text-blue-400 inline'>Talktime</p>
        </div>
      </div>
      <div className='p-5 flex flex-col space-y-5'>
        <div className='flex flex-col space-y-4'>
          <button
            className='btn'
            onClick={() => handleSignIn(providers?.github?.id)}
          >
            <SiGithub className='btn-icon' />
            Sign in with GitHub
          </button>
          <button
            className='btn'
            onClick={() => handleSignIn(providers?.google?.id)}
          >
            <SiGoogle className='btn-icon' />
            Sign in with Google
          </button>
        </div>
      </div>
    </main>
  );
}
