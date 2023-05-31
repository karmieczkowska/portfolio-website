import React from 'react';
import HeroSection2 from '../components/HeroSection2';

const Success = () => {
  return (
    <div>
      <HeroSection2
        heading="Contact"
        text="Let's have a chat"
      />
      <h1 style={{textAlign:"center", paddingTop:100}}>Thanks for your message!</h1>
    </div>
  );
};

export default Success;