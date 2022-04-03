import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";

<Rating
  initialRating={4.5}
  emptySymbol={<FontAwesomeIcon icon={faStar} />}
  fullSymbol={<FontAwesomeIcon style={{ color: "golden" }} icon={faStar} />}
  readonly
></Rating>;
