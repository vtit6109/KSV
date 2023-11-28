import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=' h-screen w-screen bg-gray-500 flex items-center justify-center'>
        <h1 className=' font-bold text-white text-4xl'>
          Hello React - Vite - Tailwind
        </h1>
      </div>
    </>
  );
}

export default App;
