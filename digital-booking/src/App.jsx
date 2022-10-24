import { RouterProvider } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { router } from './core/Routes';
import Header from './components/Header/Header';

function App() {
   return (
      <div id="app">
         <Header/>
         <main>
            <RouterProvider router={router} />
         </main>
         <Footer>©2022 Digital Booking</Footer>
      </div>
   );
}

export default App;
