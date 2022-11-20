import React from 'react';
import './styles/global.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Contact, Error } from './pages/index';
import { Layout } from './components/index';

function App() {
  return (
    <div className='container'>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  )
}

export default App;
