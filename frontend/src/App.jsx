import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button>Hello</button>
      <Box minH={("100vh")}>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
      </Box>
    </>
  );
}

export default App
