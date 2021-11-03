import { ApartmentCard, NavHeader } from "../components/index";
import MainBanner from "../components/MainBanner";
import "../styles/home.scss";
import FooterPage from "../components/PageFooter";
import React from "react";

class Home extends React.Component {
  state = {
    apartments: [],
  };

  componentDidMount() {
    fetch(`http://localhost:5000/api/data`)
      .then((response) => response.json())
      .then((apartments) => {
        this.setState({ apartments: apartments });
      });
  }

  render() {
    return (
      <div className='home-page-container'>
        <nav>
          <NavHeader />
        </nav>
        <MainBanner />
        {this.state.apartments && (
          <main className='home-main'>
            <div className='cards-container'>
              {this.state.apartments.map((x, i) => {
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
  }
}

export default Home;
