import React from 'react';
import InputPassword from '@/components/ui/input-password';
import SocialButtons from '@/components/ui/social-buttons';

function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1>Login</h1>
      <div className='flex flex-col gap-y-5'>
        <InputPassword />
        <SocialButtons />
      </div>
    </div>
  );
}

export default HomePage;
