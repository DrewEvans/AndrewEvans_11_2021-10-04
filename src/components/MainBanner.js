import Banner from "../images/home-backdrop.jpg";
import "../styles/componentStyles/banner.scss";

const MainBanner = () => {
  return (
    <div className='banner-container'>
      <img src={Banner} alt='coastal-banner' />
      <span>Chez vous, partout et ailleurs</span>
    </div>
  );
};

export default MainBanner;
