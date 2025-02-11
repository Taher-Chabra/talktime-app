import React from 'react';
import { getSession } from 'next-auth/react';

import Placeholder from '@/components/Layout/Placeholder';
import { generateCallID } from '@/lib/utils';
import Head from '@/components/Head/Head';

export async function getServerSideProps(context) {
  const { query } = context;
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  const roomId = query.name || generateCallID();

  return {
    redirect: {
      destination: `/room/${roomId}`,
      permanent: false,
    },
  };
}

export default function CallRedirect() {
  return (
    <>
      <Head title={'Call'} />
      <Placeholder />
    </>
  );
}
