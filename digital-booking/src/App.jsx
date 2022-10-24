import { RouterProvider } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { router } from './core/Routes';

function App() {
   return (
      <div id="app">
         <main>
            <RouterProvider router={router} />
         </main>
         <Footer>©2022 Digital Booking</Footer>
      </div>
   );
}

export default App;
