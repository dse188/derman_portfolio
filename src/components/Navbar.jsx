import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white fixed top-0 left-0 right-0 w-full'>
        <div className='w-full py-2 flex justify-between items-center px-8 md:px-16 lg:px-24'>
            <div className='text-2x1 font-bold hidden md:inline'>Derman</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#experience" className='hover:text-gray-400'>Experience</a>
                <a href="#projects" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contacts</a>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect with me</button>
        </div>
    </nav>
    
  );
};

export default Navbar