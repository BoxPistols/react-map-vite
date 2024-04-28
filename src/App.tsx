import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center px-12   bg-gray-100
    ">
      <div className="relative py-3">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-light-blue-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-sm mx-auto">
            <div className="flex items-center space-x-5">
              <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img src={reactLogo} className="h-16 w-16" alt="React logo" />
              </a>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold">Vite + React</h1>
                <div className="flex justify-center">
                  <button
                    className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:ring-cyan-300"
                    onClick={() => setCount((count) => count + 1)}
                  >
                    count is {count}
                  </button>
                </div>
                <p className="text-gray-600">
                  Edit <code className="text-gray-900 font-mono">src/App.tsx</code> and save to test HMR
                </p>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p className="text-cyan-600">
                  Click on the Vite and React logos to learn more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;