import React from 'react';

function Footer() {
  return (
    <footer className='bg-gray-800 flex items-center justify-center border-t border-gray-600 h-16'>
      <p className='text-gray-400'>
        Developed by{' '}
        <a
          href='https://in.linkedin.com/in/taher-chabra'
          target='_blank'
          rel='norefferer noopener'
          className='text-blue-400 font-bold hover:text-blue-500'
        >
          Taher Chabra
        </a>
      </p>
    </footer>
  );
}

export default Footer;