import Footer from '../../components/Footer/Footer';

const Layout = ({ children }) => {
   return (
      <div className="container">
         {/*here goes the header*/}
         <main>{children}</main>
         <Footer />
      </div>
   );
};

export default Layout;
