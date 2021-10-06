import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faStar} />;

const starRating = (num) => {
  switch (num) {
    case 1:
      return (
        <>
          <li className='known-star' alt='star'>
            {element}
          </li>
          <li className='unknown-star' alt='star'>
            {element}
          </li>
          <li className='unknown-star' alt='star'>
            {element}
          </li>
          <li className='unknown-star' alt='star'>
            {element}
          </li>
          <li className='unknown-star' alt='star'>
            {element}
          </li>
        </>
      );
    case 2:
      return (
        <>
          <li className='known-star' alt='star'>
            {element}
          </li>
          <li className='known-star' alt='star'>
            {element}
          </li>
          <li className='unknown-star' alt='star'>
            {element}
          </li>
          <li className='unknown-star' alt='star'>
            {element}
          </li>
          <li className='unknown-star' alt='star'>
            {element}
          </li>
        </>
      );
    case 3:
      <>
        <li className='known-star' alt='star'>
          {element}
        </li>
        <li className='known-star' alt='star'>
          {element}
        </li>
        <li className='known-star' alt='star'>
          {element}
        </li>
        <li className='unknown-star' alt='star'>
          {element}
        </li>
        <li className='unknown-star' alt='star'>
          {element}
        </li>
      </>;
    case 4:
      return (
        <>
          <li className='known-star' alt='star'>
            {element}
          </li>
          <li className='known-star' alt='star'>
            {element}
          </li>
          <li className='known-star' alt='star'>
            {element}
          </li>
          <li className='known-star' alt='star'>
            {element}
          </li>
          <li className='unknown-star' alt='star'>
            {element}
          </li>
        </>
      );
    case 5:
      return (
        <>
          <li className='known-star' alt='star'>
            {element}
          </li>
          <li className='known-star' alt='star'>
            {element}
          </li>
          <li className='known-star' alt='star'>
            {element}
          </li>
          <li className='known-star' alt='star'>
            {element}
          </li>
          <li className='known-star' alt='star'>
            {element}
          </li>
        </>
      );
    default:
      <>
        <li className='unknown-star' alt='star'>
          {element}
        </li>
        <li className='unknown-star' alt='star'>
          {element}
        </li>
        <li className='unknown-star' alt='star'>
          {element}
        </li>
        <li className='unknown-star' alt='star'>
          {element}
        </li>
        <li className='unknown-star' alt='star'>
          {element}
        </li>
      </>;
  }
};

export default starRating;
