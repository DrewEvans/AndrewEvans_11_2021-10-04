import { NavLink } from "react-router-dom";

const ApartmentCard = ({
  title,
  cover,
  pictures,
  description,
  host,
  equipments,
  ratings,
  tags,
  id,
}) => {
  return (
    <>
      <NavLink to={`/appartement/${id}`}>
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
      </NavLink>
      <h1>{title}</h1>
    </>
  );
};
export default ApartmentCard;
