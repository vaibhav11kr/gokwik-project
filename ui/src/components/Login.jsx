import React, { useState } from 'react';
import Divider from './Divider';
import SignInButton from './SignInButton';
import Footer from './Footer';

const Login = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobRegex = /^\d{10}$/;

    if (/^\d+$/.test(value)) {
      
      if (mobRegex.test(value)) {
        setError('');
        setIsValid(true);
      } else {
        setError('Please enter a valid 10-digit mobile number.');
        setIsValid(false);
      }
    } else {
      
      if (emailRegex.test(value)) {
        setError('');
        setIsValid(true);
      } else {
        setError('Please enter a valid email address.');
        setIsValid(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert('All good');
      setInput('');
      setIsValid(false);
    }
  };

  return (
    <div className='bg-white md:w-[360px] lg:w-[450px] m-8 h-[92%] md:h-[85%] md:absolute md:right-6 md:z-20 w-full flex flex-col items-left p-14 justify-between md:-top-3 shadow-md'>
      <div className='flex-grow'>
        <header className='text-2xl font-semibold text-[#304c6c]'>Login to Dashboard</header>

<div className="flex flex-col">

<label htmlFor="input" className='text-[#969da6] mt-10'>Email or Mobile Number</label>
        <input
          type="text"
          name="input"
          id="input"
          className='mt-10 border-b-2 border-[#E0DFE2] focus:outline-none focus:border-[#bab8bb]'
          value={input}
          onChange={handleChange}
        />
        {error && input && <div className='text-red-500 mt-2'>{error}</div>}

        <button
          type="submit"
          className={`bg-[#0283E5] mt-10 p-2 text-white text-lg ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleSubmit}
          disabled={!isValid}
        >
          Next
        </button>
</div>
        <Divider />
        <div className="flex justify-center">
          <SignInButton />
        </div>
      </div>
      <div className='md:hidden'>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
