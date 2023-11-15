import useFetch from "../hooks/useFetch";
import { ApartmentCard, NavHeader } from "../components/index";
import MainBanner from "../components/MainBanner";
import "../styles/home.scss";
import FooterPage from "../components/PageFooter";

const Home = () => {
  const { response } = useFetch(`https://devporium-rest.onrender.com/kasa/data`);
  const apartments = response.data;

  return (
    <div className='home-page-container'>
      <nav>
        <NavHeader />
      </nav>
      <MainBanner />
      {apartments && (
        <main className='home-main'>
          <div className='cards-container'>
            {apartments.map((x, i) => {
              const {
                title,
                location,
                cover,
                pictures,
                host,
                equipments,
                ratings,
                tags,
                id,
              } = x;
              return (
                <ApartmentCard
                  key={`card-${id}`}
                  title={title}
                  location={location}
                  cover={cover}
                  pictures={pictures}
                  host={host}
                  equipments={equipments}
                  ratings={ratings}
                  tags={tags}
                  id={id}
                />
              );
            })}
          </div>
        </main>
      )}
      <FooterPage />
    </div>
  );
};

export default Home;
