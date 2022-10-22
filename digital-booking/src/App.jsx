import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { router } from './core/Routes';

function App() {
   const [inputValue, setInputValue] = useState(null);

   return (
      <div id="app">
         {/* here goes the header :) */}
         <main>
            <RouterProvider router={router} />
         </main>
         <Footer>©2022 Digital Booking</Footer>
         
      </div>
   );
}

export default App;
