import { starRating } from "../functions";
import "../styles/componentStyles/apartmentInfo.scss";

const ApartmentInfo = ({ title, location, host, rating, tags }) => {
  rating = parseInt(rating);

  return (
    <>
      <div className='apartment-info-container'>
        <div className='details-container'>
          <h2 className='title'>{title}</h2>
          <h3 className='location'>{location}</h3>
          <ul>
            {tags.map((x, i) => (
              <li key={`${i}${x}`}>{x}</li>
            ))}
          </ul>
        </div>
        <div className='host-container'>
          <div className='host-profile'>
            <h4>{host.name}</h4>
            <img
              src={host.picture}
              alt={host.picture
                .replaceAll(
                  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/",
                  ""
                )
                .replaceAll(".jpg", "")
                .replaceAll("_", " ")
                .replaceAll(/([A-Z]+)/g, " $1")
                .replaceAll(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
            />
          </div>
          <ul className='star-rating'>{starRating(rating)}</ul>
        </div>
      </div>
    </>
  );
};

export default ApartmentInfo;
