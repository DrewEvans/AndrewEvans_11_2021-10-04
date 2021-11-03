// import ErrorPage from "../pages/ErrorPage";
import {
  ApartmentDescription,
  ApartmentEquipment,
  ApartmentInfo,
  Carousel,
  NavHeader,
} from "../components";
import "../styles/apartment.scss";
import FooterPage from "../components/PageFooter";
import React from "react";

class ApartmentPage extends React.Component {
  state = {
    response: [],
    apartment: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`http://localhost:5000/api/appartement/${id}`)
      .then((response) => response.json())
      .then((apartment) => {
        this.setState({ resonse: "loaded", apartment: apartment });
      });
  }

  render() {
    return (
      <div className='apartment-page-container'>
        <nav>
          <NavHeader />
        </nav>
        {this.state.apartment && (
          <div>
            {this.state.apartment.map((x, i) => {
              const {
                title,
                location,
                pictures,
                description,
                host,
                equipments,
                rating,
                tags,
                key,
              } = x;
              return (
                <main className='apart-main' key={`apart-${this.props.id}`}>
                  <Carousel key={`carousel-${key}-${i}`} pictures={pictures} />
                  <ApartmentInfo
                    key={key}
                    title={title}
                    location={location}
                    host={host}
                    rating={rating}
                    tags={tags}
                  />
                  <div className='dropdown-container'>
                    <ApartmentDescription description={description} />
                    <ApartmentEquipment equipments={equipments} />
                  </div>
                </main>
              );
            })}
          </div>
        )}
        <FooterPage />
      </div>
    );
  }
}

export default ApartmentPage;
