import { starRating } from "../functions";

const ApartmentInfo = ({ title, location, host, rating, tags }) => {
  rating = parseInt(rating);

  return (
    <>
      <section>
        <div>
          <h2>{title}</h2>
          <h3>{location}</h3>
          {tags.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </div>
        <div>
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
          <ul>{starRating(rating)}</ul>
        </div>
      </section>
    </>
  );
};

export default ApartmentInfo;
