import Gif from '../../../public/loader-gif.gif';
import './LoadingPage.scss'

const LoadingScreen = () => {
   return (
      <div className="db-loading-page">
         <img src={Gif} />
      </div>
   );
};

export default LoadingScreen;
