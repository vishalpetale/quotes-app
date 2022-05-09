import { useParams, Link } from "react-router-dom";

const LoadComment = () => {
  const params = useParams();

  return (
    <div className="centered">
      <Link className="btn--flat" to={`/quote/${params.quoteID}/comments`}>
        Load comments
      </Link>
    </div>
  );
};

export default LoadComment;
