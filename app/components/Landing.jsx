'use client'
import React from 'react'
import { Link,Button } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Nav from './Navbar';


const Landing = () => {
  return (
    <div className="bg-dark-blue-gradient h-screen flex flex-col justify-center items-center animate-gradient">
    <Nav />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="mt-16 flex flex-col items-center space-y-8">
        <motion.div
          initial={{ scale: 0.8, rotate: -175, opacity: 0 }}
          animate={{ scale: 1, rotate: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            isBlurred
            width={240}
            src="./png.png" // Replace with your logo image
            alt="Logo"
          />
        </motion.div>
        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold text-white text-center "
          >
            Kahani
          </motion.h1>
          <p className="text-lg text-white text-center mb-2">
            AI based Personalized Story Generator
          </p>
        </div>
        <Button
          href="/lander"
          as={Link}
          color="primary"
          showAnchorIcon
          variant="solid"
          size='lg'
          className="animate-float bg-gradient-to-tr from-blue-700 to-pink-500 text-white font-semibold shadow-lg"
          
        >
          Try our Product
        </Button>
      </div>
    </motion.div>
    {/* <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="mt-8 transform transition-transform hover:scale-110">
        <iframe
          src="https://giphy.com/embed/ITRemFlr5tS39AzQUL"
          width="480"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
      </div>
    </motion.div> */}
  </div>
    
  );
};

export default Landing;
