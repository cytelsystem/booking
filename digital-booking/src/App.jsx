import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Apartment from './pages/Apartment/Apartment';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
   },
   {
      path: '/login',
      element: <Login />,
   },
   {
      path: '/register',
      element: <Register />,
   },
   {
      path: '/:apartmentId',
      element: <Apartment />,
   },
]);

function App() {
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
