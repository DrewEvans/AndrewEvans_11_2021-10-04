import { NavLink } from "react-router-dom";
import "../styles/componentStyles/apartmentCard.scss";

const ApartmentCard = ({ title, cover, id }) => {
  return (
    <>
      <NavLink
        to={`/appartement/${id}`}
        style={{ textDecoration: "none" }}
        key={id}>
        <div className='card-container'>
          <img
            src={cover}
            alt={cover
              .replaceAll(
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/",
                ""
              )
              .replaceAll(".jpg", "")
              .replaceAll("_", " ")
              .replaceAll(/([A-Z]+)/g, " $1")
              .replaceAll(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
          />
          <div className='card-title'>
            <h2>{title}</h2>
          </div>
        </div>
      </NavLink>
    </>
  );
};
export default ApartmentCard;
