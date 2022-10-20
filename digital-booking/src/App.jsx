import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Layout from './shared/Layout/Layout';

function App() {
   const [count, setCount] = useState(0);

   return <Layout></Layout>;
}

export default App;
