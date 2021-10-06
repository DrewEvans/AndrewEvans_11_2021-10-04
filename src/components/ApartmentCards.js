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
        <img src={cover} />
      </NavLink>
      <h1>{title}</h1>
    </>
  );
};
export default ApartmentCard;
